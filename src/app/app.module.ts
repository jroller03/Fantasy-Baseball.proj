import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { LeagueHomeComponent } from './league-home/league-home.component';
import { MatchupComponent } from './matchup/matchup.component';
import { LeagueSettingsComponent } from './league-settings/league-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlayerListComponent,
    TeamPageComponent,
    LeagueHomeComponent,
    MatchupComponent,
    LeagueSettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
