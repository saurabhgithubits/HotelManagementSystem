import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { NewhomeComponent } from './components/newhome/newhome.component';
import { RegisterComponent } from './components/register/register.component';
import { StaffCreateComponent } from './components/manager/staff-create/staff-create.component';

import { ProfileComponent } from './components/manager/profile/profile.component';
import { DashboardComponent } from './components/manager/dashboard/dashboard.component';
import { SidebarComponent } from './components/manager/sidebar/sidebar.component';
import { StaffListComponent } from './components/manager/staff-list/staff-list.component';
import { StaffUpdateComponent } from './components/manager/staff-update/staff-update.component';

import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AddGuestComponent } from './components/user/add-guest/add-guest.component';
import { GuestListComponent } from './components/user/guest-list/guest-list.component';
import { UpdateGuestComponent } from './components/user/update-guest/update-guest.component';
import { MakeReservationComponent } from './components/user/make-reservation/make-reservation.component';
import { ReservationListComponent } from './components/user/reservation-list/reservation-list.component';
import { AddRoomComponent } from './components/manager/add-room/add-room.component';

import { UpdateRoomComponent } from './components/manager/update-room/update-room.component';
import { ViewRoomComponent } from './components/manager/view-room/view-room.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
//import { PaymentComponent } from './components/payments/paymentapp/payment.component';
import { ViewReserveComponent } from './components/user/view-reserve/view-reserve.component';
import { ViewGuestComponent } from './components/user/view-guest/view-guest.component';
import { ViewRoomDetailsComponent } from './components/manager/view-room-details/view-room-details.component';
import { ViewStaffComponent } from './components/manager/view-staff/view-staff.component';
import { PaymentDetailsComponent } from './components/payments/payment-details/payment-details.component';
import { PaymentappComponent } from './components/payments/paymentapp/paymentapp.component';
import { SearchRoomComponent } from './components/search-room/search-room.component';
import { SearchByTypeComponent } from './components/search-by-type/search-by-type.component';
import { UpdateReservationComponent } from './components/user/update-reservation/update-reservation.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },

 
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full'
  },

    {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
    },
  
   
      {
        path:'manager',
        component:DashboardComponent,
        // canActivate: [AdminGuard],
        children:[
          {
            path:'profile',
            component:ProfileComponent
          },
          {
            path:'newHome',
            component:NewhomeComponent,
          
            },
          {
            path:'contact',
            component:ContactComponent,
            pathMatch:'full'
          },         
          {
            path:'about',
            component:AboutComponent,
            pathMatch:'full'
          },
          {
            path:'updateProfile/:userId',
            component:UpdateUserComponent
          },
          {
            path:'add',
            component:StaffCreateComponent,
           
          },
          {
            path:'get',
            component:StaffListComponent,
            pathMatch:'full'
          },
          {
            path:'update/:id',
            component:StaffUpdateComponent,
            pathMatch:'full'
          },
          {
            path:'addRoom',
            component:AddRoomComponent,
            pathMatch:'full'
          },
          {
            path:'viewRoomDetails/:id',
            component:ViewRoomDetailsComponent,
            pathMatch:'full'
          },
          {
            path:'getRoom',
            component:ViewRoomComponent,
            pathMatch:'full'
          },
          {
            path:'viewStaffDetails/:id',
            component:ViewStaffComponent,
            pathMatch:'full'
          },
          {
            path:'paymentList',
            component:PaymentDetailsComponent,
            pathMatch:'full'
          },
          {
            path:'updateRoom/:id',
            component:UpdateRoomComponent,
            pathMatch:'full'
          },
               ]
      },
       {
        path:'user',
        component:UserDashboardComponent,
       //  canActivate: [NormalGuard],
        children:[
          {
           path:'profile',
           component :UserProfileComponent
          },
          {
            path:'newHome',
            component:NewhomeComponent,
          
            },
          {
            path:'contact',
            component:ContactComponent,
            pathMatch:'full'
          },         
          {
            path:'about',
            component:AboutComponent,
            pathMatch:'full'
          },
          {
            path:'updateProfile/:userId',
            component:UpdateUserComponent
          },
          {
            path:'addGuest',
            component:AddGuestComponent,
           },
           {
            path:'viewGuestDetails/:id',
            component:ViewGuestComponent,
           },
           {
            path:'searchByType',
            component:SearchByTypeComponent
           },
           {
             path:'searchByName',
             component:ReservationListComponent
           },
           {
             path:'viewList',
             component:GuestListComponent,
            },
            {
             path:'update/:id',
             component:UpdateGuestComponent,
            },
            {
              path:'pay',
              component:PaymentappComponent,
            },
            {
              path:'search',
              component:SearchRoomComponent,
            },
            {
              path:'addReserve',
              component:MakeReservationComponent,
            },
           
            {
               path:'viewReserve',
               component:ReservationListComponent,
            },
            {
              path:'viewByDetails/:id',
              component:ViewReserveComponent,
            },
            {
               path:'updateReserve/:id',
               component:UpdateReservationComponent,
            },
         ]
       },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
