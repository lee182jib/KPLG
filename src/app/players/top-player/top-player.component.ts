import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-player',
  templateUrl: './top-player.component.html',
  styleUrls: ['./top-player.component.css']
})
export class TopPlayerComponent {
  @Input() firstElement: any;

  getPhotoUrl(photo: string): string {
    return `https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo.replace('jpg', 'png')}`;
  }

}
