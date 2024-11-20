import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-slider-sample',
  standalone: true,
  imports: [FormsModule,SliderModule],
  templateUrl: './slider-sample.component.html',
  styleUrl: './slider-sample.component.scss'
})
export class SliderSampleComponent {
  value: any = 101;
}
