import {Component, OnInit} from '@angular/core';
import {IUser} from '../shared/interfaces/IUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',

  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  private users: IUser[];
  public username: string;
  public pass: string;
  public errorMessage: string;
  public isError: boolean;

  constructor(private router: Router) {
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

    this.isError = false;
  }

  ngOnInit() {
  }

  public login() {
    /*check user name and pass*/
    const userArr = this.users.filter((user: IUser) => {
      return user.Password === this.pass && user.UserName === this.username;
    });

    if (userArr.length > 0) {
      /*if right - forward to components*/
      this.redirectUser(userArr[0]);
    } else {
      /*if wrong - activate error messages*/
      this.errorMessage = 'User name and password are incorrect, please try again.';
      this.isError = true;
    }
  }


  redirectUser(user: IUser) {
    if (user.Position === 'TW') {
      /*redirect to TW component*/
      this.router.navigate(['/TW']);
    }
    if (user.Position === 'FED') {
      /*redirect to TW component*/
      this.router.navigate(['/FED']);
    }
  }


}
