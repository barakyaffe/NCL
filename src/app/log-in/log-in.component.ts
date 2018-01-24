import {Component, OnInit} from '@angular/core';
import {IUser} from '../shared/interfaces/IUser';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  private users: IUser[];

  constructor() {
    this.users = [
      {
        UserId: 1,
        Position: 'FED',
        UserName: 'Barak',
        Password: '1234'
      },
      {
        UserId: 2,
        Position: 'TW',
        UserName: 'Ilana',
        Password: '1234'
      }
    ];
  }

  ngOnInit() {
  }

}
