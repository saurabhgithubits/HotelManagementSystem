import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  isLoggedIn = false;
  user = new User(0,'','','','','','','','',true,[]);
  role:string = '';

  constructor(public login: LoginService,
              private router: Router
               ) {}

  ngOnInit(): void {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
      this.login.loginStatusSubject.asObservable().subscribe((data:any) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
      this.role = this.user.role;
    });
  }

  public logout() {
    this.login.logout();
    Swal.fire('Logout Successful','','success')
    this.isLoggedIn = false;
    this.router.navigate(['login']);
    this.login.loginStatusSubject.next(false);
  }
}
