import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../models/team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league-home',
  templateUrl: './league-home.component.html',
  styleUrls: ['./league-home.component.css'],
  providers: [TeamService]
})
export class LeagueHomeComponent implements OnInit {
  teamId: string;
  currentRoute: string = this.router.url;

  teamToDisplay;
  teams: FirebaseListObservable<any[]>;
  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService, private router: Router) {
  }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['id'];
      this.teams = this.teamService.getTeams();

    });
    this.teamToDisplay = this.teamService.getTeamById(this.teamId);
  }

  goToTeamPage(team) {
    this.router.navigate(['team-page', team.$key]);
  }
}
