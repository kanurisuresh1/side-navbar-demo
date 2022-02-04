import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { vehicleData } from 'src/app/ModelClass/vehicleUserData';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-dropdownsearch',
  templateUrl: './dropdownsearch.component.html',
  styleUrls: ['./dropdownsearch.component.scss']
})
export class DropdownsearchComponent implements OnInit {

  vehicles: vehicleData[] = [];
  private _vehicles: vehicleData[] = [];


  vehiclesCheckBox: vehicleData[];
  private _vehiclesCheckBox: vehicleData[];
  checkboxVehicle: any;
  matselectvalue: string;
  constructor(private httprequst: CommonService) { }

  @ViewChild('mySelect') mySelect:any; 

  ngOnInit(): void {
    this.getVehicles();
  }

  onInputSearch(item) {
    const searchInput = item.target.value ? item.target.value : '';
    this.vehicles = this._vehicles.filter(ele => {
      const afterSearch: string = ele.vehicle_number.toLocaleLowerCase();
      return afterSearch.indexOf(searchInput) > -1;
    })
  }

  getVehicles() {
    this.httprequst.home_lite_v1().subscribe(response => {
      this.vehicles = response.data;
      this._vehicles = response.data;
      this.vehiclesCheckBox = response.data;
      this._vehiclesCheckBox = response.data;
      console.log(this.vehicles)
    });
  }

  updateSelectedValue(row) {
    console.log(row)
  }

  selectedClientDesign(id) {
    this.checkboxVehicle=id
    this.vehiclesCheckBox.map(item => {
      if (item.device_link_id == id) {
        item.checked = true;
      }
      else {
        item.checked = false;
      }
    })
    this.mySelect.open();
  }

  appbtn(){
    console.log(this.checkboxVehicle)
    this.mySelect.close();
  }

  clrbtn(){
    this.vehiclesCheckBox.map(item => {
      item.checked = false;
      this.matselectvalue = '';
    })
    this.checkboxVehicle = ''
    this.mySelect.close();
  }
  onInputCheckBpxSearch(item) {
    const searchInput = item.target.value ? item.target.value : '';
    this.vehiclesCheckBox = this._vehiclesCheckBox.filter(ele => {
      const afterSearch: string = ele.vehicle_number.toLocaleLowerCase();
      return afterSearch.indexOf(searchInput) > -1;
    })
  }

}



