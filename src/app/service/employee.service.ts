import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://localhost:3000/api/employees');
  }


  insertData(data: any){
    return this.httpClient.post('http://localhost:3000/api/employee/add', data);
  }
}
