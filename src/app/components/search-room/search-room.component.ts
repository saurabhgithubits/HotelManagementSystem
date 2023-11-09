import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {
 
  search!: FormGroup;
  noRoomFoundMessage: string = ''; 

 
  datasource: any[]=[];
  constructor(private roomService:RoomService,
          private router:Router,
          private formbuilder:FormBuilder
    ) { }
 
    ngOnInit():void{
      this.search=this.formbuilder.group({
        checkInDate: [
          '',
          [
            Validators.required,
          ],
        ],
        checkOutDate: [
          '',
          [
            Validators.required,
          ],
        ]
      });}

      searchRooms()
      {
        this.roomService.findByDate(this.search.value.checkInDate,this.search.value.checkOutDate).subscribe
          ({
            next:(val:any)=>{
              this.datasource=val;
              if(this.datasource.length===0)
              {
                  this.noRoomFoundMessage="No Room were found";
              }
            },
            
            error:console.error,
          });
      }


}
