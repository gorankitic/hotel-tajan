"use client";

// hooks
import { useReservation } from "./ReservationContext";
// utility functions
import { format } from "date-fns";
// assets
import { XMarkIcon } from "@heroicons/react/24/solid";

const ReservationReminder = () => {
    const { range, resetRange } = useReservation();

    if (!range?.from || !range?.to) return null;

    return (
        <div
            className="fixed bottom-5 left-1/2 text-center -translate-x-1/2 py-3 px-10 rounded-full bg-accent-500
            text-primary-800 font-semibold shadow-xl shadow-slate-900 flex gap-5 items-center"
        >
            <p>
                <span>👋🏻</span>Не заборавите да резервишете изабране датуме <br />
                од {" "}{format(new Date(range.from), "d.L.yyyy.")}{" "}
                до {" "}{format(new Date(range.to), "d.L.yyyy.")}
            </p>
            <button
                onClick={resetRange}
                className="rounded-full p-1 hover:bg-accent-600 transition-all"
            >
                <XMarkIcon className="h-5 w-5" />
            </button>
        </div>
    )
}

export default ReservationReminder;