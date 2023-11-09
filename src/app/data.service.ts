import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  bootstrap: string = 'http://localhost:3000/api/bootstrap-static/';
  h2h: string = 'http://localhost:3000/api/h2h/';

  getTopPointsData() {
    return this.http.get(this.bootstrap).pipe(
      map((data: any) => {
        data.elements.sort((a: any, b: any) => b.total_points - a.total_points);
        return data;
      })
    );
  }
  
  getAllData() {
    return this.http.get(this.bootstrap).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  
  getElements() {
    return this.http.get(this.bootstrap).pipe(
      map((data: any) => {
        return data.elements;
      })
    );
  }
  
  getGameWeeks() {
    return this.http.get(this.bootstrap).pipe(
      map((data: any) => {
        return data.events;
      })
    );
  }
  
  geth2h(gw: number) {
    return this.http.get(`${this.h2h}?gw=${gw}`).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  }
}  

