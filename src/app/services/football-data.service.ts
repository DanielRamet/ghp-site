import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  constructor() { }


  public getData() {
    return "data service";
  }
}
