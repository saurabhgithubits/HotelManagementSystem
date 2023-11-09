import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from 'src/app/entity/guest';
import { GuestService } from 'src/app/service/guest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css']
})
export class UpdateGuestComponent implements OnInit {
  id!: number;
  guest: Guest = new Guest();
  constructor(private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.guestService.getGuestById(this.id).subscribe((data: any) => {
      this.guest = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.guestService.updateGuest(this.id, this.guest).subscribe( data =>{
      this.goToGuestList();
      Swal.fire('guest Successful updated!!','guest Id: ','success');
    }
    , (error) => console.log(error));
    Swal.fire('guest Successful updated!!','guest Id: ','success');
  }

  goToGuestList(){
    this.router.navigate(['/guests']);
  }

}

