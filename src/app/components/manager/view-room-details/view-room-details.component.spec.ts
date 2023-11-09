import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomDetailsComponent } from './view-room-details.component';

describe('ViewRoomDetailsComponent', () => {
  let component: ViewRoomDetailsComponent;
  let fixture: ComponentFixture<ViewRoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRoomDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
