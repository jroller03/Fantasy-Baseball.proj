import { Injectable } from '@angular/core';
import { League } from './models/league.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class LeagueService {
  leagues: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.leagues = database.list('leagues');
  }
  getLeagues() {
    return this.leagues;
  }


  getLeagueById(leagueId: string) {
    return this.database.object('leagues/' + leagueId);
  }
}
