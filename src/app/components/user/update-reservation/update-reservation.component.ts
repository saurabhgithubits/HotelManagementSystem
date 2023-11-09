import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserve } from 'src/app/entity/reserve';
import { ReserveService } from 'src/app/service/reserve.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  id!: number;
  reserve: Reserve = new Reserve();
  constructor(private reserveService: ReserveService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.reserveService.getReserveById(this.id).subscribe((data: any) => {
      this.reserve = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.reserveService.updateReserve(this.id, this.reserve).subscribe( data =>{
      this.goToReserveList();
      Swal.fire('Reserve Successful added!!','Reserve Id: ','success');
    }
    , (error) => console.log(error));
    Swal.fire('Reserve Successful updated!!','Reserve Id: ','success');
  }
  goToReserveList(){
    this.router.navigate(['/user/viewReserve']);
  }

}

