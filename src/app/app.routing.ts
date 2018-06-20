import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { MatchupComponent } from './matchup/matchup.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { LeagueHomeComponent } from './league-home/league-home.component';
import { DraftComponent } from './draft/draft.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'create-team',
    component: CreateTeamComponent
  },
  {
    path: 'team-page',
    component: TeamPageComponent
  },
  {
    path: 'player-list',
    component: PlayerListComponent
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
    path: 'draft',
    component: DraftComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
