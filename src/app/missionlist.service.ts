import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFlight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class MissionlistService{
  private _url: string = "https://api.spacexdata.com/v3/launches";

  constructor(private http: HttpClient) { }

  getFlights(): Observable<IFlight[]>{
    return this.http.get<IFlight[]>(this._url);
  }
}
