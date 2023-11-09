import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/entity/staff';
import { StaffService } from 'src/app/service/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  Staffs: Staff[] = [];

  constructor(private StaffService: StaffService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStaffs();
  }

  private getStaffs(){
    this.StaffService.getStaffsList().subscribe(data => {
      this.Staffs = data;
    });
  }

  StaffDetails(id: any){
    this.router.navigate(['manager/viewStaffDetails', id]);
  }

  updateStaff(id: any){
    this.router.navigate(['manager/update', id]);
  }

  deleteStaff(id: number){
    this.StaffService.deleteStaff(id).subscribe( (data :any)=>{
      console.log(data);
      alert("Deleted Successfully")
      this.getStaffs();
    })
  }

}