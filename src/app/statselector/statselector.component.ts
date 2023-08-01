import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-statselector',
  templateUrl: './statselector.component.html',
  styleUrls: ['./statselector.component.css']
})

export class StatselectorComponent {
  elements!: any[];
  selectedStat: string = 'total_points';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getElements(this.selectedStat)
  }

  getElements(sortBy: string) {
    this.dataService.getElements().subscribe((data) => {
      console.log(data);
      this.elements = data.sort((a: any, b: any) => {
        return b[sortBy] - a[sortBy];
      }).slice(0, 50);
    });
  }

  reloadData() {
    this.getElements(this.selectedStat);
  }

  getPhotoUrl(photo: string): string {
    return `https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo.replace('jpg', 'png')}`;
  }

}
