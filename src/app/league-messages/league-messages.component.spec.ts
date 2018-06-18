import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueMessagesComponent } from './league-messages.component';

describe('LeagueMessagesComponent', () => {
  let component: LeagueMessagesComponent;
  let fixture: ComponentFixture<LeagueMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
