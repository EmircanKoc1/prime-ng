import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-tabmenu-sample',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './tabmenu-sample.component.html',
  styleUrl: './tabmenu-sample.component.scss'
})
export class TabmenuSampleComponent
  implements OnInit {
  items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Products', icon: 'pi pi-list' },
      {
        label: 'Messages', icon: 'pi pi-inbox',
        command: () => {
          console.log("lwnkoweınweo");

        }
      }
    ];
  }


}
