import { Component, OnInit } from '@angular/core';
// import { League } from '../models/league.model';
// import { LeagueService } from '../league.service';
import { Team } from '../models/team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [TeamService]
})
export class WelcomeComponent implements OnInit {
  currentRoute: string = this.router.url;
  // leagues: FirebaseListObservable<any[]>;
  teams: FirebaseListObservable<any[]>;
  constructor(private teamService:TeamService, private router: Router) { }

  ngOnInit() {
    // this.leagues = this.leagueService.getLeagues();
    this.teams = this.teamService.getTeams();
  }

  goToLeaguePage(league, team) {
    this.router.navigate(['team-page', team.$key]);
  }

}
