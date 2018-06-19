import { Component, OnInit } from '@angular/core';
import { League } from '../models/league.model';
import { LeagueService } from '../league.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [LeagueService]
})
export class WelcomeComponent implements OnInit {
  currentRoute: string = this.router.url;
  leagues: FirebaseListObservable<any[]>;

  constructor(private leagueService: LeagueService, private router: Router) { }

  ngOnInit() {
    this.leagues = this.leagueService.getLeagues();
  }
  goToLeaguePage(league) {
    this.router.navigate(['league-home', league.$key]);
  }

}
