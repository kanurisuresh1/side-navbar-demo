import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  logingForm = new FormGroup ({
    userName : new FormControl (),
    pws : new FormControl (),
  })

  cheackUser(){
   if(this.logingForm.value.userName,this.logingForm.value.pws){
    localStorage.setItem('uname', this.logingForm.value.userName);
    localStorage.setItem('psw', this.logingForm.value.pws);
    this.router.navigate(['home']);
   }else{
     alert('invalid user')
   }
  }
}
