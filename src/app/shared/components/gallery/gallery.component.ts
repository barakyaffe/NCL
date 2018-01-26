import {Component, OnInit} from '@angular/core';
import {IScreenInfo} from '../../interfaces/IScreenInfo';
import {NclService} from '../../services/ncl.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public screens: Array<IScreenInfo>;

  constructor(public nclService: NclService) {
  }

  ngOnInit() {
  }

  public getImage(path: string): string {
    return '../assets/images/pm-screen1.png';
    // return 'http://localhost:8080/NCL/getImage/' + path;
  }

  public getName(name: string): string {
    return 'PM - main screen';
  }
}
