import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../entity/guest';
import { Room } from '../entity/room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {




  private baseURL = "http://localhost:9999/room";

  constructor(private httpClient: HttpClient,private http: HttpClient) { }
  
  getRoomList(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL}/get`);
  }
  createRoom(room: Room): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`,room);
  }
  getRoomById(id: number): Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL}/getById/${id}`);
  }


  updateRoom(id: number, room: Room): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, room);
  }

  deleteRoom(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletedById/${id}`);
  }

  findByDate(checkInDate: string, checkOutDate: string): Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseURL}/search/?checkInDate=${checkInDate}&&checkOutDate=${checkOutDate}`);
  }

  getRoomsByType(roomType: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/type/?roomType=${roomType}`);
  }
}

