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
}
