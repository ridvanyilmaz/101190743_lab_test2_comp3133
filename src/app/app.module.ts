import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import  {HttpClientModule}  from "@angular/common/http";
import { MissionlistComponent } from './missionlist/missionlist.component';
import {MissionlistService} from "./missionlist.service";
import { AppRoutingModule, routingComponents } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MissionlistService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
