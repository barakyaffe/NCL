import {Component, OnInit} from '@angular/core';
import {NclService} from '../../services/ncl.service';
import {ISentences} from '../../interfaces/ISentence';

class ISentemce {
}

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.scss']
})
export class SentencesComponent implements OnInit {

  public term: string;

  constructor(public nclService: NclService) {
    this.term = '';
  }

  ngOnInit() {
  }


  public getDisplaySentemces(): ISentemce[] {

    const model = this;

    if (this.term.length === 0) {
      return model.nclService.allSentences;
    }

    return this.nclService.allSentences.filter(function (x: ISentences) {
        return x.text.toString().toLowerCase().indexOf(model.term.toLowerCase()) !== -1;
      }
    );

  }


  public getText(txt: string) {

    if (txt.length > 20) {
      return txt.substring(0, 20) + '...';
    }

    return txt;

  }


}
