import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { PlayersComponent } from './players/players.component';
import { StinkersComponent } from './stinkers/stinkers.component';
import { DavidmayComponent } from './davidmay/davidmay.component';
import { HipsterComponent } from './hipster/hipster.component';
import { StatselectorComponent } from './statselector/statselector.component';

const routes: Routes = [
  { path:'', component: StoriesComponent },
  { path:'minutes', component: PlayersComponent },
  { path: 'stinkers', component: StinkersComponent },
  { path: 'davidmay', component: DavidmayComponent },
  { path: 'hipster', component: HipsterComponent},
  { path: 'statSelector', component: StatselectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



