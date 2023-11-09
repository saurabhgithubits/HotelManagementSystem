import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../entity/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private baseURL = "http://localhost:9096/guest";

  constructor(private httpClient: HttpClient) { }
  
  getGuestList(): Observable<Guest[]>{
    return this.httpClient.get<Guest[]>(`${this.baseURL}/`);
  }
  createGuest(guest: Guest): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`,guest);
  }
  getGuestById(id: number): Observable<Guest>{
    return this.httpClient.get<Guest>(`${this.baseURL}/getById/${id}`);
  }

  updateGuest(id: number, guest: Guest): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, guest);
  }

  deleteGuest(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletedById/${id}`);
  }
}

