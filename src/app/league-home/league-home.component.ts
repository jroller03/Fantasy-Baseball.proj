import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-league-home',
  templateUrl: './league-home.component.html',
  styleUrls: ['./league-home.component.css'],
  providers: [LeagueService]
})
export class LeagueHomeComponent implements OnInit {
  leagueId: string;
  leagueToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private leagueService: LeagueService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.leagueId = urlParameters['id'];
    });
    this.leagueToDisplay = this.leagueService.getLeagueById(this.leagueId);
  }

}
