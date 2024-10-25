"use client";

// hooks
import { useOptimistic } from "react";
// components
import ReservationCard from "@/app/_components/ReservationCard";
// server actions
import { deleteReservation } from "@/app/_lib/actions";

const ReservationList = ({ bookings }) => {
    const [optimisticBookings, optimisticDelete] = useOptimistic(bookings,
        (currentBookings, bookingId) => { return currentBookings.filter(booking => booking.id !== bookingId) });

    const handleDelete = async (bookingId) => {
        optimisticDelete(bookingId);
        await deleteReservation(bookingId);
    }

    return (
        <ul className='space-y-4'>
            {optimisticBookings.map(booking => (
                <ReservationCard
                    key={booking.id}
                    booking={booking}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ReservationList;