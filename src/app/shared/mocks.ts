import { Booking } from '../booking/booking';

export const BOOKINGS: Booking[] = [
    {
        id: 1,
        projectId: 1,
        professionalId: 1,
        startDate: new Date(),
        endDate: new Date(),
        bookingPercentual: 100,
        professional: {
            name: 'Dogra'
        },
        project: null
    },
    {
        id: 2,
        projectId: 2,
        professionalId: 2,
        startDate: new Date(),
        endDate: new Date(),
        bookingPercentual: 90,
        professional: {
            name: 'Salata'
        },
        project: null
    },
    {
        id: 3,
        projectId: 3,
        professionalId: 3,
        startDate: new Date(),
        endDate: new Date(),
        bookingPercentual: 95,
        professional: {
            name: 'Talarida'
        },
        project: null
    }
];