import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamPageComponent } from './team-page/team-page.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
