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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getElements();
  }

  getElements() {
    this.dataService.getElements().subscribe((data) => {
      console.log(data);
      this.elements = data.sort((a: any, b: any) => {
        return b.expected_goals - a.expected_goals;
      });
    });
  }

}
