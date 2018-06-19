import { Team } from './team.model';

export class League {
  teams: Team[] = [];
  constructor(public leagueName: string, public numberOfTeams: number) {
    this.teams;
    this.leagueName = "Team Week";
    this.numberOfTeams = 8;
  }
}
