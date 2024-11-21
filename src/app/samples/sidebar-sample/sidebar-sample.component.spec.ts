import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSampleComponent } from './sidebar-sample.component';

describe('SidebarSampleComponent', () => {
  let component: SidebarSampleComponent;
  let fixture: ComponentFixture<SidebarSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
