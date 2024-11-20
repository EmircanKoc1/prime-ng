import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSampleComponent } from './slider-sample.component';

describe('SliderSampleComponent', () => {
  let component: SliderSampleComponent;
  let fixture: ComponentFixture<SliderSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
