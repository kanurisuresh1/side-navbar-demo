import { Component, OnInit } from '@angular/core';
import { AdddialogReactiveComponent } from '../adddialog-reactive/adddialog-reactive.component';
import { MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss']
})
export class ReactiveFormValidationComponent implements OnInit {
 
  firstname = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z]{3,}$"),
  ]);
  lastname = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z]{3,}$"),
  ]);
  workemail = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
  ]);
  paymentmode = new FormControl("", [Validators.required]);
  // usertype = new FormControl("", [Validators.required]);
  address = new FormControl("", [Validators.required]);

  addContractorDialogForm: FormGroup;

  constructor( public dialog: MatDialog,) { 

  }

  ngOnInit(): void {
    this.addContractorDialogForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      workemail: this.workemail,
      // phone: this.phone,
      // usertype: this.usertype,
      paymentmode: this.paymentmode,
      // company: this.company,
      // country: this.countrycontrol,
      // remainingBalance: this.remainingBalance,
      address: this.address,
      // lic: this.lic,
      // prelimdesigndiscount: this.prelimdesigndiscount,
      // permitdesigndiscount: this.permitdesigndiscount
    });
  }
  getErrorMessage(
    control: FormControl
  ):
    // | string
    // | string
    // | string
    // | string
    | string
    | string
    | string
    | string
    | string {
    if (control.hasError("required")) {
      return "You must enter a value";
    }
    if (control == this.firstname) {
      return this.firstname.hasError("pattern")
        ? "Firstname should be of min. 3 characters and contain only alphabets."
        : "";
    } else if (control == this.lastname) {
      return this.lastname.hasError("pattern")
        ? "Lastname should be of min. 3 characters and contain only alphabets."
        : "";
    } else if (control == this.workemail) {
      return this.workemail.hasError("pattern")
        ? "Please enter a valid email."
        : "";
    }
    //  else if (control == this.phone) {
    //   return this.phone.hasError("pattern")
    //     ? "Please enter a valid phone number."
    //     : "";
    // }
    else if (control == this.paymentmode) {
      return this.paymentmode.hasError("pattern")
        ? "Please enter a valid payment mode."
        : "";
    }
    //  else if (control == this.usertype) {
    //   return this.usertype.hasError("pattern")
    //     ? "Please enter a valid account type."
    //     : "";
    // } else if (control == this.remainingBalance) {
    //   return this.remainingBalance.hasError("min")
    //     ? "Value must be greater then 0."
    //     : this.remainingBalance.hasError("max")
    //       ? "Value must be less then the wallet amount."
    //       : "";
    // }

    // else if (control == this.lic) {
    //   return this.lic.hasError("pattern")
    //     ? "Please enter a valid license number."
    //     : "";
    // }
  }


  onAddContractor($ev): void {

  }



}
