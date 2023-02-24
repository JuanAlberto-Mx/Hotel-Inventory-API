import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [BookingModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
