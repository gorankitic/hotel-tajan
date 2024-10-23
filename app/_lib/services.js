// prisma/db
import prisma from "@/app/_lib/database";
// utility functions
import { eachDayOfInterval } from 'date-fns';

export const getBookedDates = async (cabinId) => {
    const today = new Date();
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
}

export const getGuest = async (id) => {
    const response = await fetch(`http://localhost:3001/api/guests/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });
    const json = await response.json();

    if (json.status === "error") {
        // Don't throw an error, if there is no guest create a new one in DB
        return json;
    }

    return json;
}

export const createGuest = async ({ email, name, imageUrl, kindeId }) => {
    const response = await fetch(`http://localhost:3001/api/guests`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, name, imageUrl, kindeId })
    });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
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

