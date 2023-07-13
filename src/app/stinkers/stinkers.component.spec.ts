import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StinkersComponent } from './stinkers.component';

describe('StinkersComponent', () => {
  let component: StinkersComponent;
  let fixture: ComponentFixture<StinkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StinkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
