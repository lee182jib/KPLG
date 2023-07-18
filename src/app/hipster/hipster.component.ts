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
  private _percent: number = 7;
  selectedElement: number = 3;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getHipsterPlayers()
  }

  get percent(): number {
    return this._percent;
  }
  set percent(value: number) {
    this._percent = value;
  }

  getHipsterPlayers() {
    this.dataService.getElements().subscribe((data) => {
      this.elements = data.filter((element: any) => {
        return element.selected_by_percent <= this.percent && element.element_type === parseInt(this.selectedElement.toString());
      }).sort((a: any, b: any) => {
        return b.selected_by_percent - a.selected_by_percent;
      }).slice(0, 10);
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
