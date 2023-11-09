import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/entity/payment';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  isLoggedIn:boolean=false;
  isRole: string | null = null;
  dataSource:any[]=[];

  constructor(

    private paymentService: PaymentService,

    private router: Router,

  ) {}

  ngOnInit(): void {
 
  const loggedInValue = sessionStorage.getItem('loggedIn');
  this.isLoggedIn = loggedInValue === 'true';
  this.isRole = sessionStorage.getItem('role');
    this.getAllPayments();

  }

  getAllPayments()

  {
    if(this.isLoggedIn){
      if(this.isRole === 'MANAGER'){
    
    this.paymentService.getPaymentList().subscribe({

      next:(res)=>{

        this.dataSource=res;

      },
      error:console.error,

    });
  }
}

  }

}