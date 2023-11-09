import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Room } from '../../../entity/room';
import { RoomService } from '../../../service/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room: Room = new Room();
  constructor(private roomService: RoomService,private router:Router) { }

  ngOnInit(): void {
  }

  saveRoom(){
    this.roomService.createRoom(this.room).subscribe( data =>{
      console.log(data);
      this.goToRoomList();
      Swal.fire('Room added Successful!!','Room Id: '+this.room.id,'success');
    },
    error => console.log(error));
    Swal.fire('Adding room Failed','','error');
  }
  goToRoomList() {
    this.router.navigate(['manager/getRoom']);
  }

  onSubmit()
  {
console.log(this.room);
this.saveRoom();

  }
  goBack() {
    window.location.reload(); // Reload the page
  }
}
