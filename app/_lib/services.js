// prisma/db
import prisma from "@/app/_lib/database";
// utility functions
import { eachDayOfInterval } from 'date-fns';

export const getBookedDates = async (cabinId) => {
    const today = new Date();
    try {
        const bookings = await prisma.bookings.findMany({
            where: {
                cabinId,
                endDate: {
                    gte: today,
                },
            },
            select: {
                startDate: true,
                endDate: true,
            },
        });
        const bookedDates = bookings
            .map((booking) => {
                return eachDayOfInterval({
                    start: new Date(booking.startDate),
                    end: new Date(booking.endDate),
                });
            })
            .flat(); // Flatten the array of arrays into a single array

        return bookedDates;
    } catch (error) {
        console.error("❌ERROR: ", error);
        throw new Error(error.message);
    }
}

export const getGuest = async (email) => {
    try {
        const guest = await prisma.guests.findUnique({ where: { email } });
        // If there is no guest Prisma will return null
        // Return null to signIn callback to create a new guest
        return guest;
    } catch (error) {
        console.error("❌ERROR: ", error);
        throw new Error(error.message);
    }
}

export const createGuest = async ({ email, name, imageUrl }) => {
    try {
        const guest = await prisma.guests.create({ data: { email, name, imageUrl } })
        return guest;
    } catch (error) {
        console.error("❌ERROR: ", error);
        throw new Error(error.message);
    }
}

export const getGuestReservations = async (guestId) => {
    const response = await fetch(`http://localhost:3001/api/guests/${guestId}/bookings`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });
    const json = await response.json();

    if (!response.ok) {
        if (!response.ok) {
            throw new Error(json.message);
        }
    }

    return json;
}

export const getCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v2/all?fields=name,flag");
        const countries = await response.json();
        return countries;
    } catch (error) {
        throw new Error("Could not fetch countries");
    }
}

