import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerBet } from '../model/model';
import { FootballDataService } from '../services/football-data.service';

@Component({
  selector: 'app-quinicheck',
  templateUrl: './quinicheck.component.html',
  styleUrls: ['./quinicheck.component.css']
})
export class QuinicheckComponent implements OnInit {

  constructor(private footballData: FootballDataService) { }

  latestBets: Observable<PlayerBet[]>;

  ngOnInit(): void {
    this.latestBets = this.footballData.getLatestBets();
  }

}
