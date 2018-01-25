import {Injectable} from '@angular/core';

@Injectable()
export class NclService {


  private selectedScreens: any[];
  public setScreens: (data: any) => void;


  constructor() {

    this.selectedScreens = [];
    this.selectedScreens.push({id: 3, text: 'TimeFrame', x: 316, y: 146, w: 120});
    this.selectedScreens.push({id: 4, text: 'Categories', x: 317, y: 178, w: 120});
    this.selectedScreens.push({id: 5, text: 'Payees', x: 317, y: 209, w: 120});


  }


  updateScreen() {
    this.setScreens(this.selectedScreens);
  }


}
