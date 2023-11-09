import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/entity/staff';
import { StaffService } from 'src/app/service/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-update',
  templateUrl: './staff-update.component.html',
  styleUrls: ['./staff-update.component.css']
})
export class StaffUpdateComponent implements OnInit {

  id!: number;
  staff: Staff = new Staff();
  constructor(private staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.staffService.getStaffById(this.id).subscribe((data: any) => {
      this.staff = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.staffService.updateStaff(this.id, this.staff).subscribe( data =>{
      this.goToStaffList();
      Swal.fire('staff Successful added!!','success');
    }
    , (error) => console.log(error));
    Swal.fire('staff Successful updated!!','success');
  }

  goToStaffList(){
    this.router.navigate(['/manager/get']);
  }

}
