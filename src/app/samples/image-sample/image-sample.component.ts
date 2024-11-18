import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-image-sample',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './image-sample.component.html',
  styleUrl: './image-sample.component.scss'
})
export class ImageSampleComponent {

}
