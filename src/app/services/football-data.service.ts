import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PlayerBet } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private BASE_URL = "https://xapa-apps.onrender.com/api/quinicheck";

  constructor(private http: HttpClient) { }

  public getLatestBets() {
    let season: string = '2023';
    let matchday: string= '33';

    return this.http.get<PlayerBet[]>(this.BASE_URL + '/matchday', {params: {
      season: season, matchday: matchday}});
  }
}
