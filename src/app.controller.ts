import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { RoomList } from './rooms';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello():  RoomList[] {
    return this.appService.getRoomsList();
  }

  @Post()
  addRooms(@Body() Rooms: RoomList): RoomList[] {
    return this.appService.addRooms(Rooms);
  }

  @Put()
  editRooms(rooms: RoomList): RoomList[] {
    return this.appService.editRooms(rooms);
  }

  @Delete()
  deleteRooms(roomNumber: string): RoomList[] {
    return this.appService.deleteRooms(roomNumber);
  }
}
