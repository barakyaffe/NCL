import {Component, OnInit} from '@angular/core';
import {IScreenInfo} from '../../interfaces/IScreenInfo';
import {NclService} from '../../services/ncl.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  constructor(public nclService: NclService) {
  }

  ngOnInit() {
  }

  public getImage(path: string): string {
    // return '../assets/images/pm-screen1.png';

    return 'http://localhost:8080/NCL//GetImage/' + path;
  }

  public getName(screen: IScreenInfo): string {
    return screen.path.replace('.png', '');
  }
}
