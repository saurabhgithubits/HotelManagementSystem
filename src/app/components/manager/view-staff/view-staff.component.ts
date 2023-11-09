import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/entity/staff';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {

  id!: number
  staff!: Staff
  constructor(private route: ActivatedRoute, private staffService: StaffService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.staff = new Staff();
    this.staffService.getStaffById(this.id).subscribe( data => {
      this.staff = data;
    });
  }
   goBack() {
    this.router.navigate(['/manager/get']);
  }
}