import { Injectable } from '@angular/core';
import { Player } from './models/player.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.players = database.list('dailyplayerstats/activeplayers/playerentry');
    return;
 }

  getPlayers(): FirebaseListObservable<any[]> {
    console.log("player service" + this.players);
    return this.players;
  }
  playerList = [ /*83 players */
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
    "Roller, Justin",
    "Etling, Danny",
    "Ferentz, James",
    "Flowers, Marquis",
    "Flowers, Trey",
    "Gillislee, Mike",
    "Gilmore, Stephon",
    "Gostkowski, Stephen",
    "McNamara, Jimmy",
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
    "Santos, Verna",
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
    "Tumbleposwki, Dave",
    "Matthews, Jordan",
    "McCarron, Riley",
    "McCourty, Devin",
    "McCourty, Jason",
    "Michel, Sony",
    "Mitchell, Malcolm",
    "Moore, An",
    "Niklas, Troy",
    "Patterson, Cordarrelle",
    "Lupton, Andrew",
    "Richards, Jordan",
    "Rivers, Derek",
    "Roberts, Elandon",
    "Rowe, Eric",
    "Sam, Christian"
  ];
}
