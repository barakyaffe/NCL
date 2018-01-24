/**
 * Created by baraky on 1/24/2018.
 */

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LogInComponent} from './log-in/log-in.component';
import {TwComponent} from './tw/tw.component';
import {FedComponent} from './fed/fed.component';


const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'TW',
    component: TwComponent
  },
  {
    path: 'FED',
    component: FedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
