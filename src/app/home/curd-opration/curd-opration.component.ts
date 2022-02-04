import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/common.service';
import { AdddialogReactiveComponent } from '../adddialog-reactive/adddialog-reactive.component';

@Component({
  selector: 'app-curd-opration',
  templateUrl: './curd-opration.component.html',
  styleUrls: ['./curd-opration.component.scss']
})
export class CurdOprationComponent implements OnInit {

  constructor(public dialog: MatDialog,private curdservice:CommonService) { }

  ngOnInit(): void {
    this.my_company_list();
  }
  openAddRectiveDialog(): void {
    const dialogRef = this.dialog.open(AdddialogReactiveComponent, {
      width: "40%",
      autoFocus: false,
      disableClose: true,
      data: { isEditMode: false },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result && result.triggerEditEvent) {
    //     this.fetchAllContractorsList();
    //   }
    //   this.isLoading = false;
    // });
  }

  my_company_list() {
    const formData = new FormData();
    formData.append('user_id', '1')
    formData.append('device_token', 'Web')
    formData.append('user_type', 'Customer')
    this.curdservice.my_company_list(formData).subscribe(response => {
      console.log(response)
    })
  }
}
