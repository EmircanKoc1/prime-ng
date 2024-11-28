import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSampleComponent } from './timeline-sample.component';

describe('TimelineSampleComponent', () => {
  let component: TimelineSampleComponent;
  let fixture: ComponentFixture<TimelineSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
