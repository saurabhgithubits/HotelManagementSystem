import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/entity/room';
import { RoomService } from 'src/app/service/room.service';


@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {
  rooms: Room[] = [];
  constructor(private roomService: RoomService,private router:Router) { }

  ngOnInit(): void {
    this.getRoom();
  }

  private getRoom(){
    this.roomService.getRoomList().subscribe((data: Room[]) => {
      this.rooms = data;
    });
  }

  updateRoom(id: number){
    this.router.navigate(['manager/updateRoom',id]);
  }

//   deleteRoom(id: number){
//     this.guestService.deleteRoom(id).subscribe( (data: any) => {
//       console.log(data);
//       this.getRoom();
//       alert('Rooms Successful Deleted!!');
//       this.router.navigate(['manager/viewRoom']);
//     })
// }
guestDetails(id: any){
  this.router.navigate(['manager/viewRoomDetails', id]);
}
}
