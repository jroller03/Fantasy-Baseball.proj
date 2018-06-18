import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { LeagueHomeComponent } from './league-home/league-home.component';
import { MatchupComponent } from './matchup/matchup.component';
import { LeagueSettingsComponent } from './league-settings/league-settings.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'player-list',
    component: PlayerListComponent
  },
  {
    path: 'team-page',
    component: TeamPageComponent
  },
  {
    path: 'matchup',
    component: MatchupComponent
  },
  {
    path: 'league-home',
    component: LeagueHomeComponent
  },
  {
    path: 'league-settings',
    component: LeagueSettingsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
