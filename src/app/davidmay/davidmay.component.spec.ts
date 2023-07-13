import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidmayComponent } from './davidmay.component';

describe('DavidmayComponent', () => {
  let component: DavidmayComponent;
  let fixture: ComponentFixture<DavidmayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavidmayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DavidmayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
