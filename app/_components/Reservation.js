// next-auth
import { auth } from "@/app/_lib/auth";
// components
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
// prisma/db
import prisma from "@/app/_lib/database";
// service functions
import { getBookedDates } from "@/app/_lib/services";

const Reservation = async ({ cabin }) => {
    const session = await auth();
    const [settingsData, bookedDates] = await Promise.all([prisma.settings.findMany(), getBookedDates(cabin.id)]);

    return (
        <div className="flex justify-between border border-primary-800 min-h-[450px]">
            <DateSelector
                settings={settingsData.settings}
                bookedDates={bookedDates}
                cabin={cabin}
            />
            {session?.user ? <ReservationForm cabin={cabin} user={session.user} /> : <LoginMessage />}
        </div>
    )
}

export default Reservation;