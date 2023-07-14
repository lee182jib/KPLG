import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TopPlayerComponent } from './players/top-player/top-player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoriesComponent } from './stories/stories.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StinkersComponent } from './stinkers/stinkers.component';
import { DavidmayComponent } from './davidmay/davidmay.component';
import { HipsterComponent } from './hipster/hipster.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TopPlayerComponent,
    NavbarComponent,
    StoriesComponent,
    HeaderComponent,
    FooterComponent,
    StinkersComponent,
    DavidmayComponent,
    HipsterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
