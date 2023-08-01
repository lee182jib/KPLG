import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hipster',
  templateUrl: './hipster.component.html',
  styleUrls: ['./hipster.component.css'],
  providers: [DataService]
})
export class HipsterComponent {
  elements!: any[];
  players: any[] = [];
  selectedElement: number = 3;

  private _percent: number = 7;
  private _totalPoints: number = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getHipsterPlayers()
  }

  get totalPoints(): number {
    return this._totalPoints;
  }
  set totalPoints(value: number) {
    this._totalPoints = value;
  }

  get percent(): number {
    return this._percent;
  }
  set percent(value: number) {
    this._percent = value;
  }

  // getHipsterPlayers() {
  //   this.dataService.getElements().subscribe((data) => {
  //     this.elements = data.filter((element: any) => {
  //       return element.selected_by_percent <= this.percent && element.element_type === parseInt(this.selectedElement.toString());
  //     }).sort((a: any, b: any) => {
  //       return b.selected_by_percent - a.selected_by_percent;
  //     }).slice(0, 10);
  //     console.log(this.elements);
  //   });
  // }

  getHipsterPlayers() {
    this.dataService.getElements().subscribe((data) => {
      this.elements = data.filter((element: any) => {
        return element.selected_by_percent <= this.percent && element.element_type === parseInt(this.selectedElement.toString()) && element.total_points >= this.totalPoints;
      }).sort((a: any, b: any) => {
        return b.selected_by_percent - a.selected_by_percent;
      }).slice(0, 25);
      console.log(this.elements);
    });
  }






  reloadData() {
    this.getHipsterPlayers();
  }

  getPhotoUrl(photo: string): string {
    return `https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo.replace('jpg', 'png')}`;
  }
}
