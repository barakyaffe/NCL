import {Injectable} from '@angular/core';


import * as d3 from 'd3';
import {NclService} from './ncl.service';
import {IScreenInfo} from '../interfaces/IScreenInfo';


@Injectable()
export class ScreenService {


  private svg: any;
  private data: any[];
  private screen: IScreenInfo;
  private groups: any;

  public nclService: NclService;

  constructor() {

  }


  printRemoveIcon(groups: any) {

    const model = this;

    groups.append('svg:image')
      .attr('xlink:href', '../../../../assets/images/x.png')
      .attr('x', 5)
      .attr('y', 10)
      .attr('class', 'removeIcone')
      .on('click', removeIcon);

    function removeIcon(d) {
      model.data = model.data.filter(function (x) {
        return x.sentenceKey !== d.sentenceKey;
      });

      // model.nclService.onUpdateDataset(model.data);
      model.setData(model.data, model.screen);


      model.screen.sentenceList = model.data;

    }
  }


  clean() {


  }


  setData(data: any, screen: IScreenInfo) {

    this.screen = screen;

    const model = this;

    d3.select('#svgcontainer>svg').remove();


    this.svg = d3.select('#svgcontainer')
      .append('svg')
      .attr('width', 900)
      .attr('height', 600);


    model.data = data;


    d3.select('svg').empty();

    model.groups = model.svg.selectAll('g').data(data).enter().append('g');


    model.groups.attr('class', function (d) {
      return 'group_' + d.sentenceKey;
    });

    model.groups.attr('transform', function (d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });

    model.groups.call(d3.drag().on('drag', dragended));


    function dragended(d) {
      d.x += d3.event.dx;
      d.y += d3.event.dy;
      d3.select(this).attr('transform', 'translate(' + d.x + ',' + d.y + ')');
    }


    model.printFrame(model.groups);
    model.printRightBorder(model.groups);
    model.printText(model.groups);
    model.printRemoveIcon(model.groups);
  }


  printRightBorder(groups: any) {

    groups.append('rect')
      .attr('class', function (d) {
        return 'border_r';
      })
      .attr('x', function (d) {
        d.xBorder = d.w - 5;
        return d.xBorder;
      })
      .call(d3.drag().on('drag', move));


    function move(d: any) {
      d.xBorder += d3.event.dx;

      d3.select(this).attr('x', d.xBorder);

      d3.select('#' + d.frameId).attr('width', (d.xBorder));

      console.log(d.xBorder - d.x);
    }

  }


  printText(groups: any) {
    groups.append('text')
      .attr('x', 25)
      .attr('y', 20)
      .attr('class', 'sentence')
      .text(function (d) {
        return d.text;
      });
  }


  printFrame(groups: any): any {
    groups.append('rect')
      .attr('width', function (d) {
        return d.w;
      })
      .attr('class', 'frame')
      .attr('id', function (d) {
        d.frameId = 'frame' + d.sentenceKey;
        return d.frameId;
      });
  }


}
