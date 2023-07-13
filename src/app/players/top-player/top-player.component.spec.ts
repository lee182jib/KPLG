import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlayerComponent } from './top-player.component';

describe('TopPlayerComponent', () => {
  let component: TopPlayerComponent;
  let fixture: ComponentFixture<TopPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
