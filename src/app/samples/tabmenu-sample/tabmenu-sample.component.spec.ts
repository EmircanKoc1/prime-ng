import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmenuSampleComponent } from './tabmenu-sample.component';

describe('TabmenuSampleComponent', () => {
  let component: TabmenuSampleComponent;
  let fixture: ComponentFixture<TabmenuSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabmenuSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabmenuSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
