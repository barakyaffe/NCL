import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LogInComponent} from './log-in/log-in.component';
import {TwComponent} from './tw/tw.component';
import {FedComponent} from './fed/fed.component';
import {FormsModule} from '@angular/forms';
import {DropDownComponent} from './shared/components/drop-down/drop-down.component';
import {TopBarComponent} from './shared/components/top-bar/top-bar.component';
import {MainComponent} from './shared/components/main/main.component';
import {SearchComponent} from './shared/components/search/search.component';
import {GalleryComponent} from './shared/components/gallery/gallery.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {NclService} from './shared/services/ncl.service';
import {ScreenService} from './shared/services/screen.service';
import {HttpClientModule} from '@angular/common/http';
import {NclHttpService} from './shared/services/ncl-http.service';
import { SentencesComponent } from './shared/components/sentences/sentences.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    TwComponent,
    FedComponent,
    DropDownComponent,
    TopBarComponent,
    MainComponent,
    SearchComponent,
    GalleryComponent,
    SentencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [NclService, ScreenService, NclHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
