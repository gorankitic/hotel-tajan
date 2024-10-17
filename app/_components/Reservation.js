// components
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
// server actions
import { getBookedDates, getSettings } from "@/app/_lib/services";

const Reservation = async ({ cabin }) => {
    const [settingsData, bookedDates] = await Promise.all([getSettings(), getBookedDates(cabin._id)]);

    return (
        <div className="flex justify-between border border-primary-800">
            <DateSelector
                settings={settingsData.settings}
                bookedDates={bookedDates}
                cabin={cabin}
            />
            <ReservationForm cabin={cabin} />
        </div>
    )
}

export default Reservation;