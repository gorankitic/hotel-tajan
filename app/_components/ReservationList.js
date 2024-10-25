// components
import ReservationCard from "@/app/_components/ReservationCard";

const ReservationList = ({ bookings }) => {
    return (
        <ul className='space-y-4'>
            {bookings.map(booking => (
                <ReservationCard
                    key={booking.id}
                    booking={booking}
                />
            ))}
        </ul>
    )
}

export default ReservationList;