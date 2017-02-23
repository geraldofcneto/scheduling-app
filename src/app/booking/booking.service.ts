import { Injectable } from '@angular/core';

import { Booking } from './booking';

import { BOOKINGS } from '../shared/mocks';


@Injectable()
export class BookingService {
    getBookings(): Booking[] {
        return BOOKINGS;
    }
    getBooking(id: number): Booking {
        return BOOKINGS.find(r => r.id == id);
    }
}