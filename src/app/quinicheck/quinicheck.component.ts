import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BetResult, PlayerBet } from '../model/model';
import { FootballDataService } from '../services/football-data.service';

@Component({
  selector: 'app-quinicheck',
  templateUrl: './quinicheck.component.html',
  styleUrls: ['./quinicheck.component.css']
})
export class QuinicheckComponent implements OnInit {

  constructor(private footballData: FootballDataService) { }

  bets: Observable<BetResult[]>;

  ngOnInit(): void {
    this.bets = this.footballData.getAllBets('2023');
  }

}
