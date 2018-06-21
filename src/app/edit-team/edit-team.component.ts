import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
  providers: [TeamService]
})
export class EditTeamComponent implements OnInit {
  @Input() selectedTeam;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }
  beginUpdatingTeam(teamToUpdate) {
    this.teamService.updateTeam(teamToUpdate);
  }

  beginDeletingTeam(teamToDelete) {
    if (confirm("Are you sure?")) {
      this.teamService.deleteTeam(teamToDelete);
    }
  }
}
