import { Component, HostListener, OnInit } from '@angular/core';

import { Router } from '@angular/router';
declare var Razorpay: any;

// import Razorpay from 'razorpay';

@Component({

  selector: 'app-root',

  templateUrl: './paymentapp.component.html',

  styleUrls: ['./paymentapp.component.css'],

})

export class PaymentappComponent implements OnInit{

cost = sessionStorage.getItem('totalCost');
username=sessionStorage.getItem('username');
email=sessionStorage.getItem('email');

constructor(private router: Router) {}
ngOnInit(): void {

}
payNow() {

  const RozarpayOptions = {

    description: 'Sample Razorpay demo',

    currency: 'INR',

    amount: ((50) * 100),

    name: this.username,

    key: 'rzp_test_aBRFdn25Ii6q6f',

    image: 'https://i.imgur.com/FApqk3D.jpeg',

    prefill: {

      name: this.username,
      email:this.email,
      
     
    },

    theme: {

      color: '#6466e3'

    },

    modal: {

      ondismiss:  () => {

        console.log('dismissed')

      }

    }

  }

 

  const successCallback = (paymentid: any) => {

    console.log(paymentid);
    //this.router.navigate(['/bookingList']);
    //window.location.href = '/bookinglist';
  }

 

  const failureCallback = (e: any) => {

    console.log(e);

  }

 

  Razorpay.open(RozarpayOptions,successCallback, failureCallback)

}

}