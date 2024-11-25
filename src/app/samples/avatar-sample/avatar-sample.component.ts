import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroup, AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-avatar-sample',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './avatar-sample.component.html',
  styleUrl: './avatar-sample.component.scss'
})
export class AvatarSampleComponent {

}
