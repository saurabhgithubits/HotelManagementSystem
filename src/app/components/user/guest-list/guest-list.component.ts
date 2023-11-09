import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/entity/guest';
import { GuestService } from 'src/app/service/guest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  guests: Guest[] = [];
  constructor(private guestService: GuestService,private router:Router) { }

  ngOnInit(): void {
    this.getGuest();
  }

  private getGuest(){
    this.guestService.getGuestList().subscribe((data: Guest[]) => {
      this.guests = data;
    });
  }

  updateGuest(id: number){
    this.router.navigate(['user/update', id]);
  }

  deleteGuest(id: number){
    this.guestService.deleteGuest(id).subscribe( (data: any) => {
      console.log(data);
      this.getGuest();
      alert('Guest Successful Deleted!!');
      this.router.navigate(['user/viewList']);
    })
}
guestDetails(id: any){
  this.router.navigate(['user/viewGuestDetails', id]);
}
}
