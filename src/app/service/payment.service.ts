import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../entity/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {



  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:9092/payment/getAllPayment";

  getPaymentList():Observable<any>{

    // console.log("******");
    return this.http.get(`${this.baseUrl}`);

 

  }


  // private baseURL = "http://localhost:9092/hms/v3";

  // constructor(private httpClient: HttpClient) { }
  
  // getPaymentList(): Observable<Payment[]>{
  //   return this.httpClient.get<Payment[]>(`${this.baseURL}/payment`);
  // }
  // createPayment(payment: Payment): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}/payment`,payment);
  // }
  // getPaymentById(id: number): Observable<Payment>{
  //   return this.httpClient.get<Payment>(`${this.baseURL}/${id}`);
  // }

  // updatePayment(id: number, payment: Payment): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, payment);
  // }

  // deletePayment(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }
}
