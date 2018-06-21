import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [TeamService]
})
export class PlayerListComponent implements OnInit {

  players: FirebaseListObservable<any[]>;
  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.players = this.teamService.getPlayers();
  }

}
