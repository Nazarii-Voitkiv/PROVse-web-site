import { Component } from '@angular/core';
import {NzHeaderComponent, NzSiderComponent} from 'ng-zorro-antd/layout';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NzRowDirective} from 'ng-zorro-antd/grid';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NzHeaderComponent,
    RouterLink,
    NzRowDirective,
    NzButtonComponent,
    RouterLinkActive,
    NzSiderComponent,
    NzMenuDirective,
    NzMenuItemComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
