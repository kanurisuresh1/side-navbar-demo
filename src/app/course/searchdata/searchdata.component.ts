import { Component, OnInit } from '@angular/core';
import { empuser } from '../../searchuserdata';

@Component({
  selector: 'app-searchdata',
  templateUrl: './searchdata.component.html',
  styleUrls: ['./searchdata.component.scss']
})
export class SearchdataComponent implements OnInit {

  empuserdata: empuser[] = [];
  searchname: string;

  constructor() { }

  ngOnInit(): void {
    this.empuserdata = [
      { id: 1, fname: 'suresh', lname: 'kanuri', pnumber: 7894561231 },
      { id: 2, fname: 'raju', lname: 'kanuri', pnumber: 7894561231 },
      { id: 3, fname: 'kumar', lname: 'kanuri', pnumber: 7894561231 },
      { id: 4, fname: 'baba', lname: 'kanuri', pnumber: 7894561231 },
    ]
  }

  search() {
    // let term = this.searchname.toLowerCase();
    if (this.searchname != "") {
      this.empuserdata = this.empuserdata.filter(res => {
        return res.fname.toLocaleLowerCase().match(this.searchname.toLocaleLowerCase());
        // return res.fname.toLocaleLowerCase().indexOf(term) >= 0;
        // return res.fname.toLocaleLowerCase().includes(this.searchname.toLocaleLowerCase());
      })
    } else if (this.searchname == "") {
      this.ngOnInit();
    }
  }

}
