
// components
import Link from "next/link";
import ReservationList from "@/app/_components/ReservationList";
// prisma/db
import prisma from "@/app/_lib/database";

export const metadata = {
    title: "Резервације",
};

// REFACTOR USER AND GUEST
const Reservations = async () => {
    const guest = await prisma.guests.findUnique({ where: { kindeId: user.id } });

    const bookings = await prisma.bookings.findMany({ where: { guestId: guest.id }, include: { cabin: true } });

    return (
        <div>
            <h2 className="font-medium text-2xl text-accent-400 mb-6">
                Ваше резервације
            </h2>

            {bookings.length === 0 ? (
                <p className="text-lg">
                    Немате резервација. Погледајте наше{" "}
                    <Link className="underline text-accent-500" href="/cabins">
                        апартмане &rarr;
                    </Link>
                </p>
            ) : (
                <ReservationList bookings={bookings} />
            )}
        </div>
    )
}

export default Reservations;