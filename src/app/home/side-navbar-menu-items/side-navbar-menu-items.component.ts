import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navbar-menu-items',
  templateUrl: './side-navbar-menu-items.component.html',
  styleUrls: ['./side-navbar-menu-items.component.scss']
})
export class SideNavbarMenuItemsComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
 }

}
