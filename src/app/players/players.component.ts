import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [DataService]
})
export class PlayersComponent {
  elements!: any[];
  currentGameweek!: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getElements();
    this.getGameWeeks();
  }

  getElements() {
    this.dataService.getElements().subscribe((data) => {
      console.log(data);
      this.elements = data.sort((a: any, b: any) => {
        return b.expected_goals - a.expected_goals;
      });
    });
  }

  getGameWeeks() {
    this.dataService.getGameWeeks().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].is_current === true) {
          console.log(data[i].name.slice (-1))
          this.currentGameweek = Number (data[i].name.slice (-1));
          console.log(this.currentGameweek)
        } 
      }
    });
  }

}
