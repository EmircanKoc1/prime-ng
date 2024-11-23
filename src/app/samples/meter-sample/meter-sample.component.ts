import { Component } from '@angular/core';

import { MeterGroupModule } from 'primeng/metergroup';
@Component({
  selector: 'app-meter-sample',
  standalone: true,
  imports: [MeterGroupModule],
  templateUrl: './meter-sample.component.html',
  styleUrl: './meter-sample.component.scss'
})
export class MeterSampleComponent {
  value = [
    { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
  ];
}
