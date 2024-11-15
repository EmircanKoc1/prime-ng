import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-accordion-sample',
  standalone: true,
  imports: [
    AccordionModule,
    CommonModule
  ],
  templateUrl: './accordion-sample.component.html',
  styleUrl: './accordion-sample.component.scss'
})
export class AccordionSampleComponent {

}
