import { Injectable } from '@nestjs/common';
import { BookingDTO } from "./dto/create-booking.dto";
import { v4 } from 'uuid';

@Injectable()
export class BookingService {

    bookings: BookingDTO[] = [];

    create(booking: BookingDTO) {
        console.log(BookingDTO);

        booking.bookingId = v4();

        this.bookings = [...this.bookings, booking];

        return this.bookings;
    }

    getAll() {
        return this.bookings;
    }
}
