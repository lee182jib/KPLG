import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameweekComponent } from './gameweek.component';

describe('GameweekComponent', () => {
  let component: GameweekComponent;
  let fixture: ComponentFixture<GameweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameweekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
