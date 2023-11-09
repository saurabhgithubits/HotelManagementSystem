import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Room } from '../../../entity/room';
import { RoomService } from '../../../service/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id!: number;
  room: Room = new Room();
  constructor(private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoomById(this.id).subscribe((data: any) => {
      this.room = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.roomService.updateRoom(this.id, this.room).subscribe( data =>{
      console.log(data);
      
      Swal.fire('room Successful updated!!','room Id: ','success');
      this.goToRoomList();
    }
    , (error) => console.log(error));
    Swal.fire('room Successful updated!!','room Id: ','success');
  }

  goToRoomList() {
    this.router.navigate(['manager/getRoom']);
  }

  

}

