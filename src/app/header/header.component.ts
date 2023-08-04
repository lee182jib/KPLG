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
  currentGameweek!: string;
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
      for (let i = 0; i < data.length; i++) {
        if (data[i].is_current === true) {
          console.log(data[i].name)
          this.currentGameweek = data[i].name;
        } else {
          this.currentGameweek = "Gameweek 0"
        }
      }
    });
  }
}

