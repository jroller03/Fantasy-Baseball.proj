import { Component, OnInit } from '@angular/core';
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
  teams: FirebaseListObservable<any[]>;
  constructor(private teamService:TeamService, private router: Router) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

}
