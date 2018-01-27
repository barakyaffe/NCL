import {Injectable} from '@angular/core';
import {ScreenService} from './screen.service';
import {NclHttpService} from './ncl-http.service';
import {IProjectInfo} from '../interfaces/IProjectInfo';
import {IScreenInfo} from '../interfaces/IScreenInfo';
import {ISentences} from '../interfaces/ISentence';

@Injectable()
export class NclService {


  public selectedScreens: any[];
  public projectInfo: IProjectInfo = {name: '', id: 0};
  public selectedScreen: IScreenInfo;
  public screens: IScreenInfo[] = [];
  public allSentences: ISentences[] = [];

  constructor(private screenService: ScreenService, private  nclHttpService: NclHttpService) {

    const model = this;
    model.setProject(1);
    // this.screenService.nclService = model;

    this.nclHttpService.getAllSentences().subscribe(response => {
      model.allSentences = response;
    });


  }


  setProject(id: number) {


    const model = this;


    this.nclHttpService.getProject({projectID: id}).subscribe(response => {
      model.projectInfo = response;
      model.screens = response.screenList;
      model.selectedScreen = model.screens[0];
      model.screenService.setData(model.selectedScreen.sentenceList, model.selectedScreen);
      console.log(response);
    });

  }

  public changeScreen(screen: IScreenInfo) {
    this.screenService.setData(screen.sentenceList, screen);
    this.selectedScreen = screen;
  }


  public addNewSentence(txt: string) {

    const model = this;

    let key: string = (new Date()).getFullYear().toString() + (new Date()).getSeconds().toString();

    key = (txt.length > 5 ? txt.substring(0, 4) : txt) + key;


    const newSentence: ISentences = {
      sentenceKey: key,
      screenId: this.selectedScreen.screenId,
      sentenceId: 0,
      w: (txt.length * 8) + 40,
      x: 300,
      y: 300,
      text: txt
    };

    this.selectedScreen.sentenceList.push(newSentence);

    console.log(this.selectedScreen.sentenceList);
    this.screenService.setData(this.selectedScreen.sentenceList, this.selectedScreen);


    const txtExist = model.allSentences.filter(function (sen) {
      return sen.text === txt;
    }).length > 0;


    if (!txtExist) {
      model.allSentences.push(newSentence);
    }

  }

}
