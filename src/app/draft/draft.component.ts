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
