import {Injectable} from '@angular/core';
import {ScreenService} from './screen.service';
import {NclHttpService} from './ncl-http.service';
import {IProjectInfo} from '../interfaces/IProjectInfo';

@Injectable()
export class NclService {


  public selectedScreens: any[];
  public projectInfo: IProjectInfo;


  constructor(private screenService: ScreenService, private  nclHttpService: NclHttpService) {

    this.selectedScreens = [];
    this.selectedScreens.push({id: 3, text: 'TimeFrame', x: 316, y: 146, w: 120});
    this.selectedScreens.push({id: 4, text: 'Categories', x: 317, y: 178, w: 120});
    this.selectedScreens.push({id: 5, text: 'Payees', x: 317, y: 209, w: 120});
    // @CrossOrigin


    this.nclHttpService.getProject({projectID: 1});

  }


  updateScreen() {


    const model = this;

    this.nclHttpService.getAllSentences().subscribe(x => {

      console.log(x);

    });


    this.nclHttpService.getProject({projectID: 1}).subscribe(response => {

      model.projectInfo = response;
      model.screenService.setData(response.screenList[0].sentenceList);

      console.log(response);
    });


  }


}
