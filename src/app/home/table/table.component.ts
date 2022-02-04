import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../common.service';
import {userinfoDetails} from '../../home/userDetails';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  getUserData: any;

  UserinfoDetailesObj : userinfoDetails = new userinfoDetails();


addUserDetails=new FormGroup({
  name:new FormControl (''),
  age:new FormControl (''),
  phonenumber:new FormControl (''),
  gmail:new FormControl ('')
})


  constructor(private curdservice:CommonService){

  }

  ngOnInit() {
    this.getuserList();
  }


  adduser(){
    console.log(this.addUserDetails.value);
    this.UserinfoDetailesObj.name = this.addUserDetails.value.name;
    this.UserinfoDetailesObj.age = this.addUserDetails.value.age;
    this.UserinfoDetailesObj.phonenumber = this.addUserDetails.value.phonenumber;
    this.UserinfoDetailesObj.gmail = this.addUserDetails.value.gmail;

    this.curdservice.createUser(this.UserinfoDetailesObj).subscribe(ele=>{ele
      alert ("New user add");
       this.getuserList();
    })
  }

  getuserList(){
    this.curdservice.getAllUser().subscribe(ele=>{
         this.getUserData=ele
    })
  }

  edituser(data:any){
    this.UserinfoDetailesObj.id=data.id;
     this.addUserDetails.controls['name'].setValue(data.name);
     this.addUserDetails.controls['age'].setValue(data.age);
     this.addUserDetails.controls['phonenumber'].setValue(data.phonenumber);
     this.addUserDetails.controls['gmail'].setValue(data.gmail);
  }

  updateUser(){
    this.UserinfoDetailesObj.name = this.addUserDetails.value.name;
    this.UserinfoDetailesObj.age = this.addUserDetails.value.age;
    this.UserinfoDetailesObj.phonenumber = this.addUserDetails.value.phonenumber;
    this.UserinfoDetailesObj.gmail = this.addUserDetails.value.gmail;
    this.curdservice.updateUser(this.UserinfoDetailesObj,this.UserinfoDetailesObj.id).subscribe(()=>{
      alert ("user update succesful");
      this.getuserList();
    })
  }

  deleteuser(delete_id){
    this.curdservice.deleteUser(delete_id).subscribe(ele=>{
      alert ("user remove succesful");
      this.getuserList(); 
    })
  }

}

