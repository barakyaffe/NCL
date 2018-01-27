import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NclService} from '../../services/ncl.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input()
  options: any[];

  @Output()
  selectItem: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(public nclService: NclService) {
  }


  /*public selectproject(id: number) {

    this.nclService.setProject(id);
  }*/


  ngOnInit() {
  }

  selectProject(item: any) {
    this.selectItem.emit(item);
  }

}
