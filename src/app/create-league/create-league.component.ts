import { Component, OnInit } from '@angular/core';
import { League } from '../models/league.model';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css'],
  providers: [LeagueService]
})
export class CreateLeagueComponent implements OnInit {

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
  }

  submitLeague(name: string, teams: number) {
    var newLeague: League = new League(name, teams);
    this.leagueService.addLeague(newLeague);
  }

}
