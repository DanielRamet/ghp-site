import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BetResult, PlayerBet } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private BASE_URL = "https://xapa-apps.onrender.com/api/quinicheck";

  constructor(private http: HttpClient) { }

  public getAllBets(season: string) {
    return this.http.get<BetResult[]>(this.BASE_URL + '/season', {params: { season: season}});
  }
}
