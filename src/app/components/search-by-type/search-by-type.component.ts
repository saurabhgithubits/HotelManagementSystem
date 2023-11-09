import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-search-by-type',
  templateUrl: './search-by-type.component.html',
  styleUrls: ['./search-by-type.component.css']
})
export class SearchByTypeComponent implements OnInit {

  search!: FormGroup;
  noRoomFoundMessage: string = ''; 

 
  datasource: any[]=[];
  constructor(private roomService:RoomService,
          private router:Router,
          private formbuilder:FormBuilder
    ) { }
 
    ngOnInit():void{
      this.search=this.formbuilder.group({
        roomType: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        ],
     
      });}

      searchRooms()
      {
        this.roomService.getRoomsByType(this.search.value.roomType).subscribe
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
