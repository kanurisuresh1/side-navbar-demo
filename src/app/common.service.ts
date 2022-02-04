import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from'@angular/common/http';
import {VehicleDataResponse} from '../app/ModelClass/vehicleUserData';
import {CompanyResponse, DataEntity} from '../app/ModelClass/companyResponse';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  createUser(users){
  return this.http.post('http://localhost:3000/posts',users)
  }
  updateUser(user:any,id:number,){
    return this.http.put('http://localhost:3000/posts/' +id,user)
  }
  getAllUser(){
    return this.http.get('http://localhost:3000/posts')
  }
  deleteUser(users){
    return this.http.delete('http://localhost:3000/posts/' +users.id)
  }

  home_lite_v1() {
    const params = new HttpParams()
      .set('user_id', '91')
      .set('device_token', 'Web')
      .set('X-Api-Key', environment.X_API_KEY)
      .set('user_type', 'Customer');
    return this.http.get<VehicleDataResponse>(environment.apiBaseUrl + 'home_lite_v1', { params });
  }

  // my_company_create(formData) {
  //   const headers = {
  //     'X-Api-Key': environment.X_API_KEY,
  //   };
  //   return this.http.post<DataEntity>(environment.apiBaseUrl + 'my_company_create', formData, { headers });
  // }

  my_company_create(postData) {
      const headers = {
        'X-Api-Key': environment.X_API_KEY,
      };
    return this.http.post<DataEntity>(environment.apiBaseUrl + 'my_company_create', postData, {
        headers
      })
  }

  my_company_list(formData) {
    const headers = {
      'X-Api-Key': environment.X_API_KEY,
    };
    return this.http.post<CompanyResponse>(environment.apiBaseUrl +
      'my_company_list', formData, { headers });
  }

  // my_company_edit(formData) {
  //   const headers = {
  //     'X-Api-Key': environment.X_API_KEY,
  //   };
  //   return this.http.post<DataEntity>(environment.apiBaseUrl + 'my_company_edit', formData, { headers });
  // }
}


