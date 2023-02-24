import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDTO } from './dto/create-room.dto';
import { UpdateRoomDTO } from './dto/update-room.dto';

@Controller('api/Rooms')
export class RoomsController {

    constructor(private readonly roomsService: RoomsService) {
    }

    @Post()
    create(@Body() createRoomDto: CreateRoomDTO) {
        return this.roomsService.create(createRoomDto);
    }

    @Get()
    findAll() {
        return this.roomsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.roomsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDTO) {
        return this.roomsService.update(id, updateRoomDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.roomsService.remove(id);
    }
}