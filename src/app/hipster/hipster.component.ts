import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hipster',
  templateUrl: './hipster.component.html',
  styleUrls: ['./hipster.component.css'],
  providers: [DataService]
})
export class HipsterComponent {
  elements!: any[];
  players: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getHipsterPlayers()
  }

  getHipsterPlayers() {
    this.dataService.getElements().subscribe((data) => {
      this.elements = data.sort((a: any, b: any) => {
        return b.selected_by_percent - a.selected_by_percent;
      }).slice(0, 10);
      console.log(this.elements);

    });
  }

  getPhotoUrl(photo: string): string {
    return `https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo.replace('jpg', 'png')}`;
  }
}

