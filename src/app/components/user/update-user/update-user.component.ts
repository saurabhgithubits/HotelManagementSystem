import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user = new User(0,'','','','','','','','',true,[]);

  constructor(
          private userService:UserService,
          private loginService:LoginService,
          private router:Router,
          private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    this.userService.getUserById(this.user.userId).subscribe(
      data => {
      this.user = data;
      this.user.password = ''; 
      console.log(this.user)
      })
  }

  update(){
    Swal.fire({  
      title: 'Do you want to update the details ?',  
      showDenyButton: true,  showCancelButton: false,  
      confirmButtonText: `Yes`,  
      denyButtonText: `No`,
    }).then((result) => {  
        if (result.isConfirmed) {    
          console.log(this.user)
          this.userService.updateUser(this.user).subscribe(
            (data:any) => { 
                console.log(data);
                Swal.fire('Profile Updated!!','User Id: '+data.userId,'success');
                if(this.loginService.getUserRole()=='MANAGER'){
                  this.router.navigate(['manager/profile']);
                }
                else if(this.loginService.getUserRole()=='RECEPTIONIST'){
                  this.router.navigate(['user/userProfile']);
                }
                   
            },
            (error) => {
              console.log(error);
              Swal.fire('Updation Failed','','error');
            }
          );
        } else if (result.isDenied) {    
          Swal.fire('Not Updated','' ,'info' );if(this.loginService.getUserRole()=='MANAGER'){
            this.router.navigate(['manager/profile']);
          }
          else if(this.loginService.getUserRole()=='DEVELOPER'){
            this.router.navigate(['user/profile']);
          }
       }
    });
  }
}
