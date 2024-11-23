import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterSampleComponent } from './meter-sample.component';

describe('MeterSampleComponent', () => {
  let component: MeterSampleComponent;
  let fixture: ComponentFixture<MeterSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeterSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
