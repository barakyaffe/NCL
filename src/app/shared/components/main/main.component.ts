import {Component, OnInit} from '@angular/core';


import * as d3 from 'd3';
import {NclService} from '../../services/ncl.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {


  constructor(private nclService: NclService) {


  }


  ngOnInit() {

    this.nclService.updateScreen();

  }


}
