import {Component, OnInit} from '@angular/core';
import {NclService} from '../../services/ncl.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  private options: any[];

  constructor(public nclService: NclService) {
    this.options = [
      {
        id: 1,
        name: 'Policy manager'
      },
      {
        id: 2,
        name: 'Compliance assurance'
      }];
  }

  ngOnInit() {

  }

  public itemSelected(item: any) {
    this.nclService.setProject(item.id);
  }

}
