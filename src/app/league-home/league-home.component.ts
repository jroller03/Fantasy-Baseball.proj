import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
// import { LeagueService } from '../league.service';
// import { League } from '../models/league.model';
import { Team } from '../models/team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-league-home',
  templateUrl: './league-home.component.html',
  styleUrls: ['./league-home.component.css'],
  providers: [TeamService]
})
export class LeagueHomeComponent implements OnInit {
  teamId: string;
  teamToDisplay;
  teams: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['id'];
    });
    this.teamToDisplay = this.teamService.getTeamById(this.teamId);
  }

}
