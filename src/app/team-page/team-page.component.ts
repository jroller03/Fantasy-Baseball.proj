import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../models/team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css'],
  providers: [TeamService]
})
export class TeamPageComponent implements OnInit {
  teamId: string;
  teamName;
  teams: FirebaseListObservable<any[]>;
  teamToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['id'];

      // console.log(this.teamId);
    });
    this.teamToDisplay = this.teamService.getTeamById(this.teamId).subscribe(dataLastEmitted => {

      this.teamName = dataLastEmitted.teamName;
    });

  }
  players = [
    "schwarber",
    "rizzo",
    "abreu",
    "nolan",
    "ichiro",
    "manny",
    "mookie",
    "trout"
  ];
  totalPlayers = [];
  team1 =[];
  team2 =[];
  team3 =[];
  team4 =[];
  team5 =[];
  team6 =[];
  team7 =[];
  team8 =[];
  // $("button").click(function() {
    // console.log("h");
    randomPlayerArray() {
      if(this.totalPlayers.length == 8) {
        alert("done drafting");
      } else {
        var randomPlayer = this.players[Math.floor(Math.random()*this.players.length)];
        if(this.totalPlayers.indexOf(randomPlayer) == -1) {
          this.totalPlayers.push(randomPlayer);
          this.team1.push(randomPlayer)
          // parag.innerHTML = players[randomPlayer];
        } else {
          this.randomPlayerArray();
        }

      console.log(this.team1);

    }
  }

}
