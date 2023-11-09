import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserve } from '../entity/reserve';


@Injectable({
  providedIn: 'root'
})
export class ReserveService {


  private baseURL = "http://localhost:9094";
  

  constructor(private httpClient: HttpClient, private http: HttpClient) { }
  
  getReserveList(): Observable<Reserve[]>{
    return this.httpClient.get<Reserve[]>(`${this.baseURL}/reserve/get`);
  }

  createReserve(reserve: Reserve): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/reserve/add`, reserve);
  }

  getReserveById(id: number): Observable<Reserve>{
    return this.httpClient.get<Reserve>(`${this.baseURL}/reserve/getById/${id}`);
  }

  updateReserve(id : any, reserve: Reserve): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/reserve/${id}`, reserve);
  }

  deleteReserve(id: any): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/reserve/deletedById/${id}`);
  }

  // getGuestById(id: number): Observable<Guest>{
  //   return this.httpClient.get<Guest>(`${this.baseURL1}/getById/${id}`);
  // }

  getReservationsByName(firstName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/name/?firstName=${firstName}`);
  }
  
}
