import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  elements!: any[];
  newsPlayers!: any[];

  constructor(private dataService: DataService) { this.dataService.getElements().subscribe(data => { this.elements = data; }); }

  ngOnInit() {
    this.getNews()
  }

  getNews() {
    this.dataService.getElements().subscribe((data) => {
      this.newsPlayers = data.filter((e: any) => e.news !== "");
      console.log(this.newsPlayers);
      this.elements = this.newsPlayers.sort((a: any, b: any) => {
        return a.web_name.localeCompare(b.web_name);
      });
    });
  }
  
  


}

