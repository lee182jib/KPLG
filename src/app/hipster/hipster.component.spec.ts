import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipsterComponent } from './hipster.component';

describe('HipsterComponent', () => {
  let component: HipsterComponent;
  let fixture: ComponentFixture<HipsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipsterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
