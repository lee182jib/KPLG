import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DatePipe, DataService]
})
export class HeaderComponent {
  gameweeks!: any[];
  currentGameweek!: any[];

  todayDate = new Date();

  constructor(private datePipe: DatePipe, private dataService: DataService) {
    this.todayDate = new Date();
  }
  ngOnInit() {
    this.getGameWeeks()
    console.log(this.datePipe.transform(this.todayDate, 'dd/MM/yyyy'));
  }

  getGameWeeks() {
    this.dataService.getGameWeeks().subscribe((data) => {
      
      this.gameweeks = data;
      console.log('here is gameweek data' + data[0].name);
      
    });
  }


}

