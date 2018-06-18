import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyHomeComponent } from './fantasy-home.component';

describe('FantasyHomeComponent', () => {
  let component: FantasyHomeComponent;
  let fixture: ComponentFixture<FantasyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
