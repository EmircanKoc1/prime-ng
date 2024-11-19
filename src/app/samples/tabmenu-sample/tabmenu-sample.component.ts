import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
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
  router: Router = inject(Router);

  activeItem: MenuItem = {
    label: 'Messages',
    icon: 'pi pi-inbox',
    command: () => {
      console.log("lwnkoweınweo");
    },
    tabindex: "0"
  };
  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => this.router.navigate(["dashboard"])
      },
      {
        label: 'Transactions', icon: 'pi pi-chart-line',
        routerLink: "dashboard"
      },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Products', icon: 'pi pi-list', expanded: false, },

    ];
    this.items.push(this.activeItem);
  }

  activeItemchanged() {
    console.log("item changed");

  }

}
