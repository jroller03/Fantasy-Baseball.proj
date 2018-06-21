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
  players = [ /*83 players */
    "Schwarber",
    "Rizzo",
    "Abreu",
    "Nolan",
    "Ichiro",
    "Manny",
    "Mookie",
    "Trout",
    "Allen, Dwayne",
    "Allen, Ryan",
    "Andrews, David",
    "Atkins, John",
    "Bentley, Ja'Whaun",
    "Berrios, Braxton",
    "Seager, Corey",
    "Bolden, Brandon",
    "Bowanko, Luke",
    "Brady, Tom",
    "Britt, Kenny",
    "Brown, Malcom",
    "Brown, Trent",
    "Burkhead, Rex",
    "Butler, Adam",
    "Cannon, Marcus",
    "Cardona, Joe",
    "Chung, Patrick",
    "Clayborn, Adrian",
    "Crossen, Keion",
    "Croston, Cole",
    "Davis, Keionta",
    "Dawson, Duke",
    "Develin, James",
    "Dorsett, Phillip",
    "Ebner, Nate",
    "Edelman, Julian",
    "Etling, Danny",
    "Ferentz, James",
    "Flowers, Marquis",
    "Flowers, Trey",
    "Gillislee, Mike",
    "Gilmore, Stephon",
    "Gostkowski, Stephen",
    "Grigsby, Nicholas",
    "Grissom, Geneo",
    "Gronkowski, Rob",
    "Guy, Lawrence",
    "Harmon, Duron",
    "Harris, Trent",
    "Herron, Frank",
    "Hightower, Donta",
    "Hill, Jeremy",
    "Hogan, Chris",
    "Hollister, Cody",
    "Hollister, Jacob",
    "Hoyer, Brian",
    "Izzo, Ryan",
    "Jackson, Jc",
    "Jelks, Andrew",
    "John, Ulrick",
    "Jones, Cyrus",
    "Jones, David",
    "Jones, Jonathan",
    "Karras, Ted",
    "King, Brandon",
    "King, Jason",
    "Langi, Harvey",
    "Lee, Eric",
    "Lewis, Ryan",
    "Mason, Shaq",
    "Matthews, Jordan",
    "McCarron, Riley",
    "McCourty, Devin",
    "McCourty, Jason",
    "Michel, Sony",
    "Mitchell, Malcolm",
    "Moore, An",
    "Niklas, Troy",
    "Patterson, Cordarrelle",
    "Richards, Jordan",
    "Rivers, Derek",
    "Roberts, Elandon",
    "Rowe, Eric",
    "Sam, Christian"
  ];
  // each team should have exacty 10 players, with 3 free agents
  totalPlayers = [];
  team1 =[];
  team2 =[];
  team3 =[];
  team4 =[];
  team5 =[];
  team6 =[];
  team7 =[];
  team8 =[];
  teams = [this.team1, this.team2, this.team3, this.team4, this.team5, this.team6, this.team7, this.team8];
  freeAgents = [];

  randomPlayerArray() {
    for(var i = 0; i<8; i++) {
      if (this.totalPlayers.length<80) {
        var randomPlayer = this.players[Math.floor(Math.random()*this.players.length)];
        if(this.totalPlayers.indexOf(randomPlayer) == -1) {
          this.totalPlayers.push(randomPlayer);
          this.teams[i].push(randomPlayer)
        } else {
          i -=1;
        }
      } else {
        for(var x = 0; x<this.players.length; x++) {
          if (this.totalPlayers.indexOf(this.players[x]) == -1) {
            this.freeAgents.push(this.players[x]);
          }
        }
        console.log(this.freeAgents);
        console.log("team 1: " + this.team1);
        console.log("team 2: " + this.team2)
        return this.teams;
      }
      if (i === 7) {
        i = -1;
      }
    }
  }
}
