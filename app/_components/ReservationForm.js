"use client";

// hooks
import { useReservation } from "@/app/_components/ReservationContext";
// components
import Image from "next/image";
import SubmitButton from "@/app/_components/SubmitButton";
// server actions
import { createReservation } from "@/app/_lib/actions";
// utility functions
import { differenceInDays, format } from "date-fns";

const ReservationForm = ({ cabin, user }) => {
    const { range, resetRange } = useReservation();
    const { regularPrice, discount, id } = cabin;

    const startDate = range.from;
    const endDate = range.to;

    const numNights = differenceInDays(endDate, startDate);
    const cabinPrice = numNights * (regularPrice - discount);

    const reservationData = {
        startDate,
        endDate,
        numNights,
        cabinPrice,
        cabinId: id,
    }

    // How to pass reservationData object to createReservation function
    // Call bind method on createReservation function
    // 1. bind method set "this" keyword of createReservation function / don't need it in this case
    // 2. Pass additional arguments(reservationData) to createReservation function
    // reservationData object will become a first argument of function that we are binding 
    const createReservationWithData = createReservation.bind(null, reservationData);

    return (
        <div className="grow flex flex-col text-lg min-w-[550px]">
            <div className="flex justify-between items-center bg-primary-800 text-primary-300 px-10 py-2">
                <p>Пријављен:</p>
                <div className="flex items-center gap-2">
                    <Image
                        className="rounded-full"
                        width={20}
                        height={20}
                        src={user.image}
                        alt={user.name}
                        referrerPolicy="no-referrer"
                    />
                    <span>{user.name}</span>
                </div>
            </div>
            {range?.from || range?.to ? (
                <p className="ml-10 my-2 text-base">Изабрани су дани од {format(new Date(range.from), "d.L.yyyy.")} до {format(new Date(range.to), "d.L.yyyy.")}</p>
            ) : (
                <p className="text-primary-300 ml-10 my-2 text-base">Да би сте резервисали апартман изаберите датуме из календара</p>
            )}
            <form
                action={async (formData) => {
                    await createReservationWithData(formData);
                    resetRange();
                }}
                className="bg-primary-900 py-8 px-10 flex flex-col flex-1 justify-between"
            >
                <div className="space-y-1">
                    <label htmlFor="numGuests">Колико гостију?</label>
                    <select
                        name="numGuests"
                        id="numGuests"
                        required
                        className="px-5 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    >
                        <option value="" key="">Изаберите број гостију</option>
                        {Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map(x => (
                            <option value={x} key={x}>
                                {`${x}${x === 1 ? ". гост" : ". гостију"}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-1">
                    <label htmlFor="observations">Напомене:</label>
                    <textarea
                        name="observations"
                        id="observations"
                        placeholder="Да ли доводите кућног љубимца или имате неке посебне захтјеве?"
                        className="px-5 py-2 h-20 bg-primary-200 text-primary-800 placeholder:text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>
                <div className="flex justify-end">
                    {(startDate && endDate) ?
                        <SubmitButton pendingLabel="Сачекајте...">
                            Резервишите
                        </SubmitButton>
                        : null}
                </div>
            </form>
        </div>
    )
}

export default ReservationForm;