import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from '../team.service';
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
  providers: [TeamService]
})
export class CreateTeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }
  createTeam(teamName: string) {
    var newTeam: Team = new Team(teamName);
    this.teamService.addTeam(newTeam);
  }
}
