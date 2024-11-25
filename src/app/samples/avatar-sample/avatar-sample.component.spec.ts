import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSampleComponent } from './avatar-sample.component';

describe('AvatarSampleComponent', () => {
  let component: AvatarSampleComponent;
  let fixture: ComponentFixture<AvatarSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
