import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gameweek',
  templateUrl: './gameweek.component.html',
  styleUrls: ['./gameweek.component.css'],
  providers: [DataService]
})

export class GameweekComponent {
  elements!: any;
  currentGameweek!: number;
  gameweek: number = 1
  gameweekOptions: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getCurrentWeek();
  }

  getCurrentWeek() {
    this.dataService.getGameWeeks().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].is_current === true) {
          console.log(data[i])
          this.currentGameweek = Number (data[i].name.slice (-1));
          this.geth2h();
          console.log('gameweek is' + this.currentGameweek)

          // create gameweek options array
          for (let j = 1; j <= this.currentGameweek; j++) {
            this.gameweekOptions.push(j);
          }
        } 
      }
    });
  }

  geth2h() {
    this.dataService.geth2h(this.currentGameweek).subscribe((data) => {
      console.log(data)
      this.elements = data.sort((a: any, b: any) => {
        return data;
      });
    })
  }
}





// export class GameweekComponent {
//   elements!: any;
//   currentGameweek!: number;
//   gameweek: number = 1

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.getCurrentWeek();
//     this.geth2h();
//   }

//   getCurrentWeek() {
//     this.dataService.getGameWeeks().subscribe((data) => {
//       for (let i = 0; i < data.length; i++) {
//         if (data[i].is_current === true) {
          
//           this.currentGameweek = data[i].name.slice(-1);
//           console.log(this.currentGameweek)
//         } 
//       }
//     });
//   }

//   geth2h() {
//     this.dataService.geth2h(this.currentGameweek).subscribe((data) => {
//       console.log(data)
//       this.elements = data.sort((a: any, b: any) => {
//         return data;
//       });
//     })
//   }
// }
