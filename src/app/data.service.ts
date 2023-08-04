import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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
}

