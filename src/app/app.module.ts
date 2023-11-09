import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { NewhomeComponent } from './components/newhome/newhome.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { authInterceptorProviders } from './service/auth.interceptor';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { AddGuestComponent } from './components/user/add-guest/add-guest.component';

import { StaffCreateComponent } from './components/manager/staff-create/staff-create.component';

import { ProfileComponent } from './components/manager/profile/profile.component';
import { DashboardComponent } from './components/manager/dashboard/dashboard.component';
import { SidebarComponent } from './components/manager/sidebar/sidebar.component';
import { StaffListComponent } from './components/manager/staff-list/staff-list.component';
import { StaffUpdateComponent } from './components/manager/staff-update/staff-update.component';

import { UpdateGuestComponent } from './components/user/update-guest/update-guest.component';

import { GuestListComponent } from './components/user/guest-list/guest-list.component';
import { MakeReservationComponent } from './components/user/make-reservation/make-reservation.component';
import { ReservationListComponent } from './components/user/reservation-list/reservation-list.component';
import { MatMenuModule } from '@angular/material/menu';

import { AddRoomComponent } from './components/manager/add-room/add-room.component';
import { UpdateRoomComponent } from './components/manager/update-room/update-room.component';

//import { PaymentComponent } from './components/payments/paymentapp/payment.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { ViewRoomComponent } from './components/manager/view-room/view-room.component';
import { UpdateReservationComponent } from './components/user/update-reservation/update-reservation.component';
import { PaymentDetailsComponent } from './components/payments/payment-details/payment-details.component';
import { ViewReserveComponent } from './components/user/view-reserve/view-reserve.component';
import { ViewGuestComponent } from './components/user/view-guest/view-guest.component';
import { ViewStaffComponent } from './components/manager/view-staff/view-staff.component';
import { ViewRoomDetailsComponent } from './components/manager/view-room-details/view-room-details.component';
import { PaymentappComponent } from './components/payments/paymentapp/paymentapp.component';
import { SearchRoomComponent } from './components/search-room/search-room.component';
import { SearchByTypeComponent } from './components/search-by-type/search-by-type.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    SidebarComponent,
    UserProfileComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    NewhomeComponent,
    AddGuestComponent,
    GuestListComponent,
    UpdateGuestComponent,
    StaffListComponent,
    StaffUpdateComponent,
    StaffCreateComponent,
    MakeReservationComponent,
    ReservationListComponent,
    UpdateReservationComponent,
    AddRoomComponent,
    UpdateRoomComponent,
    UpdateUserComponent,
    ViewRoomComponent,
    PaymentDetailsComponent,
    ViewReserveComponent,
    ViewGuestComponent,
    ViewStaffComponent,
    ViewRoomDetailsComponent,
    PaymentappComponent,
    SearchRoomComponent,
    SearchByTypeComponent,  
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule
  

  
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
