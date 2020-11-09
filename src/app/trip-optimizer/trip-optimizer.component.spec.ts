import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOptimizerComponent } from './trip-optimizer.component';

describe('TripOptimizerComponent', () => {
  let component: TripOptimizerComponent;
  let fixture: ComponentFixture<TripOptimizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripOptimizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripOptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
