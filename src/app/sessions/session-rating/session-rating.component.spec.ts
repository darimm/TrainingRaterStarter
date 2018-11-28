import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRatingComponent } from './session-rating.component';

describe('SessionRatingComponent', () => {
  let component: SessionRatingComponent;
  let fixture: ComponentFixture<SessionRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
