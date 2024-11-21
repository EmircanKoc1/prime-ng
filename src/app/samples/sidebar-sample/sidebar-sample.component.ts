import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-sidebar-sample',
  standalone: true,
  imports: [SidebarModule, ButtonModule,AvatarModule],
  templateUrl: './sidebar-sample.component.html',
  styleUrl: './sidebar-sample.component.scss'
})
export class SidebarSampleComponent {
  sidebarVisible: boolean = false;
}
