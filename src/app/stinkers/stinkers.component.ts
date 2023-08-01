import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stinkers',
  templateUrl: './stinkers.component.html',
  styleUrls: ['./stinkers.component.css'],
  providers: [DataService]
})
export class StinkersComponent {

  elements!: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getStinkers();
  }

  getStinkers() {
    this.dataService.getElements().subscribe((data) => {
      console.log(data);
      this.elements = data.sort((a: any, b: any) => {
        return b.transfers_out - a.transfers_out;
      }).slice(0, 50);
    });
  }

  getPhotoUrl(photo: string): string {
    return `https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo.replace('jpg', 'png')}`;
  }
  
}
