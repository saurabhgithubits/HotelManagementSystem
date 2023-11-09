import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../entity/staff';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private baseURL = "http://localhost:9095/staff";

  constructor(private httpClient: HttpClient) { }
  
  getStaffsList(): Observable<Staff[]>{
    return this.httpClient.get<Staff[]>(`${this.baseURL}/get`);
  }

  createStaff(Staff: Staff): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, Staff);
  }

  getStaffById(id: number): Observable<Staff>{
    return this.httpClient.get<Staff>(`${this.baseURL}/getById/${id}`);
  }

  updateStaff(id: number, Staff: Staff): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, Staff);
  }

  deleteStaff(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}