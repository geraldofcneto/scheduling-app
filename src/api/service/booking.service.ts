import {Router, Request, Response} from 'express';
import {Booking} from '../model/booking';
import {BookingApplication} from '../application/booking.application';

export const bookingRouter: Router = Router();

bookingRouter.get('/list', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    bookingApplication.getBookings()
        .then((resultado: Booking[]) => {
            response.json(resultado);
        });
});

bookingRouter.get('/:id', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    let id: number = +request.params.id;

    bookingApplication.getBooking(id)
        .then((result: Booking) => {
            response.json(result);
        });
});