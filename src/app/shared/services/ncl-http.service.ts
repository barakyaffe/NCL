import {Injectable} from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ISentences} from '../interfaces/ISentence';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {IProjectID} from '../interfaces/IProjectID';
import {IProjectInfo} from '../interfaces/IProjectInfo';


@Injectable()
export class NclHttpService {

  constructor(private _http: HttpClient) {


  }


  getAllSentences(): Observable<ISentences[]> {

    return this._http.get<ISentences[]>('http://localhost:8080/NCL/GetAllSentences').do(response => {
      console.log(response);
    });
  }


  getProject(projectID: IProjectID): Observable<IProjectInfo> {

    return this._http.post<IProjectInfo>('http://localhost:8080/NCL/GetProjectData', projectID).do(response => {
      console.log(response);
    });

  }


}
