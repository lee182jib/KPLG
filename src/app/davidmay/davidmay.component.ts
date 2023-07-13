import { Component } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-davidmay',
  templateUrl: './davidmay.component.html',
  styleUrls: ['./davidmay.component.css'],
  providers: [DataService]
})
export class DavidmayComponent {
  elements!: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getDavidPlayers()
  }

  getDavidPlayers() {
    this.dataService.getTopPointsData().subscribe((data: any) => {
      const elements = data.elements;
      const gk = elements.filter((el: any) => el.element_type === 1).slice(0, 1);
      const df = elements.filter((el: any) => el.element_type === 2).slice(0, 3);
      const md = elements.filter((el: any) => el.element_type === 3).slice(0, 4);
      const fw = elements.filter((el: any) => el.element_type === 4).slice(0, 2);
      this.elements = [gk, df, md, fw];
      console.log(this.elements)
    });
  }

  getPhotoUrl(photo: string): string {
    return `https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo.replace('jpg', 'png')}`;
  }
}
