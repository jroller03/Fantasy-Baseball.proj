import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSettingsComponent } from './league-settings.component';

describe('LeagueSettingsComponent', () => {
  let component: LeagueSettingsComponent;
  let fixture: ComponentFixture<LeagueSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
