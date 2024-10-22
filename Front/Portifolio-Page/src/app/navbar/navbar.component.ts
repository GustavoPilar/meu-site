import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CollapseDirective } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    CollapseDirective
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public isCollapsed = true;
}
