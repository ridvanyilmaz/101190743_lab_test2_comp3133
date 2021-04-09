import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {MissionlistService} from "../missionlist.service";

@Component({
  selector: 'app-missionlist',
  styleUrls: ['./missionlist.component.css'],
  template:`
  <table>
  <tr>
    <th>Mission Name</th>
    <th>Launch Year</th>
    <th>Details</th>
    <th>Mission Patch</th>
  </tr>
  <tr *ngFor = "let flight of flights">
    <td>{{flight.mission_name}}</td>
    <td>{{flight.launch_year}}</td>
    <td>{{flight.details}}</td>
    <td>{{flight.mission_patch_small}}</td>
  </tr>	
  </table>
  `
})
export class MissionlistComponent implements OnInit {
 message: string = "Works"
 @Output() messageEvent = new EventEmitter<string>();
  public flights = [];
  constructor(private _missionlistService: MissionlistService) { }

  ngOnInit(): void {
    this._missionlistService.getFlights().subscribe(
      data => this.flights = data
    );
  }

  sendMessage(){
    this.messageEvent.emit(this.message)
  }

}
