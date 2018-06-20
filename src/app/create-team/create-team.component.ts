import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from '../team.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  providers: [TeamService]
})
export class CreateTeamComponent implements OnInit {
  constructor(private teamService: TeamService, private database: AngularFireDatabase) { }
  userId = "";
  teamToDisplay;
  teams: FirebaseListObservable<any[]>;
  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }
  createTeam(teamName: string) {
    var newTeam: Team = new Team(teamName);
    this.teamService.addTeam(newTeam);
    return newTeam;
  }
}
