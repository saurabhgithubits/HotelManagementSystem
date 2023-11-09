import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User(0,'','','','','','','','',true,[]);

  constructor(
          private userService:UserService,
          private router:Router,
          private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.addUser(this.user).subscribe(
      (data:any) => { 
          console.log(data);
          Swal.fire('Registration Successful!!','User Id: '+data.firstName,'success');
          this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Registration Failed','','error');
      }
    );
  }
  goBack() {
    window.location.reload(); // Reload the page
  }
}
