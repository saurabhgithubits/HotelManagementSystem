import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserve } from 'src/app/entity/reserve';
import { ReserveService } from 'src/app/service/reserve.service';

@Component({
  selector: 'app-view-reserve',
  templateUrl: './view-reserve.component.html',
  styleUrls: ['./view-reserve.component.css']
})
export class ViewReserveComponent implements OnInit {
  id!: number
  reserve!: Reserve
  constructor(private route: ActivatedRoute, private reserveService: ReserveService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.reserve = new Reserve();
    this.reserveService.getReserveById(this.id).subscribe( data => {
      this.reserve = data;
    });
  }

}
