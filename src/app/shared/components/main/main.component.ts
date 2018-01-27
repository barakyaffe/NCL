import {Component, OnInit} from '@angular/core';


import {NclService} from '../../services/ncl.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {


  constructor(private nclService: NclService) {
    // debugger
  }


  ngOnInit() {


  }

  getProjectImage(): string {

    if (this.nclService.selectedScreen) {
      return 'http://localhost:8080/NCL//GetImage/' + this.nclService.selectedScreen.path;
    }

    return 'http://localhost:8080/NCL//GetImage/logo1.png';
  }


}
