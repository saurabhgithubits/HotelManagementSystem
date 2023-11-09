import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guest } from 'src/app/entity/guest';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-view-guest',
  templateUrl: './view-guest.component.html',
  styleUrls: ['./view-guest.component.css']
})
export class ViewGuestComponent implements OnInit {

  id!: number
  guest!: Guest
  constructor(private route: ActivatedRoute, private guestService: GuestService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.guest = new Guest();
    this.guestService.getGuestById(this.id).subscribe( data => {
      this.guest = data;
    });
  }

}
