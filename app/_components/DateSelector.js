"use client";

// hooks
import { useReservation } from "@/app/_components/ReservationContext";
// components
import { DayPicker } from "react-day-picker";
// utility functions
import { isAlreadyBooked } from "@/app/_lib/utils";
import { differenceInDays, isPast, isSameDay } from "date-fns";
import { sr } from "react-day-picker/locale";
// styles
import "react-day-picker/style.css";

const DateSelector = ({ cabin, settings, bookedDates }) => {
    const { range, setRange, resetRange } = useReservation();
    const { discount, regularPrice } = cabin;

    const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

    const numNights = differenceInDays(displayRange.to, displayRange.from);
    const cabinPrice = numNights * (regularPrice - discount);

    return (
        <div className="flex flex-col grow">
            <DayPicker
                className="grow place-content-around place-self-center"
                classNames={{ day: `hover:bg-accent-400 rounded-full transition-colors duration-300` }}
                mode="range"
                selected={displayRange}
                onSelect={(range) => setRange(range)}
                locale={sr}
                startMonth={new Date()}
                endMonth={new Date(new Date().getFullYear() + 2, 11)}
                numberOfMonths={2}
                disabled={(currentDate) => isPast(currentDate) || bookedDates.some(date => isSameDay(date, currentDate))}
            />
            <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[60px]">
                <div className="flex items-baseline gap-6">
                    <p>
                        {discount > 0 ? (
                            <>
                                <span className="text-2xl">{regularPrice - discount}КМ</span>{" "}
                                <span className="line-through font-semibold text-primary-700">{regularPrice}КМ</span>
                            </>
                        ) : (
                            <span className="text-2xl">{regularPrice}КМ</span>
                        )}
                        <span>{" "}/ ноћењу</span>
                    </p>
                    {numNights ? (
                        <>
                            <p className="bg-accent-600 px-3 py-2 text-2xl">
                                <span>&times;</span> <span>{numNights}</span>
                            </p>
                            <p>
                                <span className="text-lg font-bold uppercase">Укупно = </span>{" "}
                                <span className="text-2xl font-semibold">{cabinPrice}KM</span>
                            </p>
                        </>
                    ) : (null)}
                </div>
                {range?.from || range?.to ? (
                    <button
                        onClick={resetRange}
                        className="border border-primary-800 py-2 px-3 text-sm font-semibold"
                    >
                        Обриши
                    </button>
                ) : null}
            </div>
        </div>
    )
}

export default DateSelector;