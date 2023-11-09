import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reserve } from '../../../entity/reserve';
import { ReserveService } from '../../../service/reserve.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  // search!: FormGroup;
  // noRoomFoundMessage: string = ''; 

 


  reserves: Reserve[] = [];
  constructor(private reserveService: ReserveService, private router:Router, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getReserve();
    
  }

  private getReserve(){
    this.reserveService.getReserveList().subscribe((data: Reserve[]) => {
      this.reserves = data;
    });
  }

  updateReserve(id: number){
    this.router.navigate(['user/updateReserve', id]);
  }

  deleteReserve(id: number){
    this.reserveService.deleteReserve(id).subscribe( (data: any) => {
      console.log(data);
      this.getReserve();
      alert('Reserve Successful Deleted!!');
    })
}
ReserveDetails(id: number){
  this.router.navigate(['user/viewByDetails', id]);
}

}
