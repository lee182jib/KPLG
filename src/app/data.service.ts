import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url: string = 'https://fantasy.premierleague.com/api/bootstrap-static/';

  getTopPointsData() {
    return this.http.get('https://fantasy.premierleague.com/api/bootstrap-static/').pipe(
      map((data: any) => {
        data.elements.sort((a: any, b: any) => b.total_points - a.total_points);
        return data;
      })
    );
  }

  getAllData() {
    return this.http.get('https://fantasy.premierleague.com/api/bootstrap-static/').pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getElements() {
    return this.http.get('https://fantasy.premierleague.com/api/bootstrap-static/').pipe(
      map((data: any) => {
        return data.elements;
      })
    );
  }

  getGameWeeks() {
    return this.http.get('https://fantasy.premierleague.com/api/bootstrap-static/').pipe(
      map((data: any) => {
        return data.events;
      })
    );
  }

  geth2h(gw: number) {
    return this.http.get(`https://fantasy.premierleague.com/api/leagues-h2h-matches/league/1036000/?event=${gw}`).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  }
}

