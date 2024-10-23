// kinde-auth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// components
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
// prisma/db
import prisma from "@/app/_lib/database";
// service functions
import { getBookedDates } from "@/app/_lib/services";

const Reservation = async ({ cabin }) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const [settingsData, bookedDates] = await Promise.all([prisma.settings.findMany(), getBookedDates(cabin.id)]);

    return (
        <div className="flex justify-between border border-primary-800 min-h-[450px]">
            <DateSelector
                settings={settingsData.settings}
                bookedDates={bookedDates}
                cabin={cabin}
            />
            {user ? <ReservationForm cabin={cabin} user={user} /> : <LoginMessage />}
        </div>
    )
}

export default Reservation;