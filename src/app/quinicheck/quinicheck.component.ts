import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../services/football-data.service';

@Component({
  selector: 'app-quinicheck',
  templateUrl: './quinicheck.component.html',
  styleUrls: ['./quinicheck.component.css']
})
export class QuinicheckComponent implements OnInit {

  constructor(private footballData: FootballDataService) { }

  text: string;

  ngOnInit(): void {
    this.text = this.footballData.getData();
  }

}
