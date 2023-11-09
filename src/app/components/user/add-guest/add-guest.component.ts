import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guest } from 'src/app/entity/guest';
import { GuestService } from 'src/app/service/guest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  guest: Guest = new Guest();
  constructor(private guestService: GuestService,private router:Router) { }

  ngOnInit(): void {
  }

  saveGuest(){
    this.guestService.createGuest(this.guest).subscribe( data =>{
      console.log(data);
      this.goToGuestList();
      Swal.fire('guest Successful added!!','guest Id: ','success');
    },
    error => console.log(error));
    
  }
  goToGuestList() {
    this.router.navigate(['/user/viewList']);
  }

  onSubmit()
  {
console.log(this.guest);
this.saveGuest();

  }
  goBack() {
    window.location.reload(); // Reload the page
  }
}
