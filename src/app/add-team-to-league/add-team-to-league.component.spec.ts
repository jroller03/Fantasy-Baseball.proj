import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamToLeagueComponent } from './add-team-to-league.component';

describe('AddTeamToLeagueComponent', () => {
  let component: AddTeamToLeagueComponent;
  let fixture: ComponentFixture<AddTeamToLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamToLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamToLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
