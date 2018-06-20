import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
  team1 =["1"];
  team2 =["2"];
  team3 =["3"];
  team4 =["4"];
  team5 =["5"];
  team6 =["6"];
  team7 =["7"];
  team8 =["8"];
  teams = [this.team1, this.team2, this.team3, this.team4, this.team5, this.team6, this.team7, this.team8];

    randomPlayerArray() {
      for(var i=0; i<8; i++) {
        if(this.totalPlayers.length < 8) {
          var randomPlayer = this.players[Math.floor(Math.random()*this.players.length)];
          if(this.totalPlayers.indexOf(randomPlayer) == -1) {
            this.totalPlayers.push(randomPlayer);
            this.teams[i].push(randomPlayer)
          } else {
            i -=1;
          }
          console.log("team" + (i+1) + " " + this.teams[i]);
        } else {
          alert("done drafting");
      }
    }
  }
}
