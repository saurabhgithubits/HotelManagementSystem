import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;
  user = null;

  constructor(public login: LoginService) {}

  ngOnInit(): void {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
      this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  public logout() {
    this.login.logout();
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }
}
