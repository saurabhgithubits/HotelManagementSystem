import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/entity/room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-view-room-details',
  templateUrl: './view-room-details.component.html',
  styleUrls: ['./view-room-details.component.css']
})
export class ViewRoomDetailsComponent implements OnInit {
  id!: number
  room!: Room
  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.room = new Room();
    this.roomService.getRoomById(this.id).subscribe( data => {
      this.room = data;
    });
  }

}
