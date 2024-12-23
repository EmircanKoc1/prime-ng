import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonSampleComponent } from "./samples/button-sample/button-sample.component";
import { ToastSampleComponent } from './samples/toast-sample/toast-sample.component';
import { AccordionSampleComponent } from "./samples/accordion-sample/accordion-sample.component";
import { CardSampleComponent } from "./samples/card-sample/card-sample.component";
import { ImageSampleComponent } from "./samples/image-sample/image-sample.component";
import { TabmenuSampleComponent } from "./samples/tabmenu-sample/tabmenu-sample.component";
import { SliderSampleComponent } from "./samples/slider-sample/slider-sample.component";
import { SidebarSampleComponent } from "./samples/sidebar-sample/sidebar-sample.component";
import { ChartSampleComponent } from "./samples/chart-sample/chart-sample.component";
import { MeterSampleComponent } from "./samples/meter-sample/meter-sample.component";
import { AvatarSampleComponent } from './samples/avatar-sample/avatar-sample.component';
import { SkeletonSampleComponent } from './samples/skeleton-sample/skeleton-sample.component';
import { TimelineSampleComponent } from './samples/timeline-sample/timeline-sample.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // BrowserModule,
    // BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    ButtonSampleComponent,
    ToastSampleComponent,
    AccordionSampleComponent,
    CardSampleComponent,
    ImageSampleComponent,
    TabmenuSampleComponent,
    SliderSampleComponent,
    SidebarSampleComponent,
    ChartSampleComponent,
    MeterSampleComponent,
    AvatarSampleComponent,
    SkeletonSampleComponent,
    TimelineSampleComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prime-ng';
  sidebarVisible: boolean = false;
}
