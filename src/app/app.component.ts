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
    AccordionSampleComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prime-ng';
  sidebarVisible: boolean = false;
}
