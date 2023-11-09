import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Reserve } from '../../../entity/reserve';
import { ReserveService } from '../../../service/reserve.service';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {

  reserve: Reserve = new Reserve();
  constructor(private reserveService: ReserveService,private router:Router) { }

  ngOnInit(): void {
  }

  saveReserve(){
    this.reserveService.createReserve(this.reserve).subscribe( data =>{
      console.log(data);
      this.goToReserveList();
      Swal.fire('Reservation Successful added!!','Reservation Id: '
      ,'success');
    },
    error => console.log(error));
    Swal.fire('Reserved!!','success');
  }
  goToReserveList() {
    this.router.navigate(['user/viewReserve']);
  }

  onSubmit()
  {
console.log(this.reserve);
this.saveReserve();

  }
  goBack() {
    window.location.reload(); // Reload the page
  }
}
