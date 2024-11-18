import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-sample',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './card-sample.component.html',
  styleUrl: './card-sample.component.scss'
})
export class CardSampleComponent {

}
