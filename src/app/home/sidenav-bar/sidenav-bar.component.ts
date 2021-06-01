import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.scss']
})
export class SidenavBarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  mode = new FormControl('side');

  logOutUser(){
    localStorage.removeItem("uname");
    localStorage.removeItem("psw")
    this.router.navigate(['login']);
  }

}
