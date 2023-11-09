import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/entity/staff';
import { StaffService } from 'src/app/service/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {

  staff: Staff = new Staff();
  constructor(private staffService: StaffService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStaff(){
    this.staffService.createStaff(this.staff).subscribe( data =>{
      console.log(data);
      this.goToStaffList();
      Swal.fire('Staff Successful added!!','staff Id: '+data,'success');
     
    },
    error => console.log(error));
    Swal.fire('Staff Successful added!!','staff Id: ','success');
  }
  

  goToStaffList(){
    this.router.navigate(['/manager/get']);
  }
  
  onSubmit(){
    console.log(this.staff);
    this.saveStaff();
  }
  goBack() {
    window.location.reload(); // Reload the page
  }
}