import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-button-sample',
  standalone: true,
  imports: [
    ButtonModule,
    ButtonGroupModule,
    SplitButtonModule,
    SpeedDialModule
  ],
  templateUrl: './button-sample.component.html',
  styleUrl: './button-sample.component.scss'
})
export class ButtonSampleComponent
  implements OnInit {
  items: MenuItem[] = [];
  ngOnInit(): void {
    new Array(10).fill(null).forEach((value, index) => {
      this.items.push({
        label: `menu item ${index}`,
        icon:'pi pi-fw pi-file',
        items: [{
          label: `menu item ${index}`,
        }]
      });
    });
  }


}
