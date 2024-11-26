import { Component } from '@angular/core';

import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-skeleton-sample',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './skeleton-sample.component.html',
  styleUrl: './skeleton-sample.component.scss'
})
export class SkeletonSampleComponent {

}
