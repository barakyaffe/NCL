///<reference path="ISentence.ts"/>
import {ISentences} from './ISentence';

export interface IScreenInfo {

  name: string;
  screenId: number;
  projectId: number;
  path: string;
  selected?: boolean;


  sentenceList: ISentences[];

}
