"use client";

// components
import { DayPicker } from "react-day-picker";
// utility functions
import { sr } from "react-day-picker/locale";
// styles
import "react-day-picker/style.css";

const DateSelector = ({ cabin, settings, bookedDates }) => {

    // static data
    const regularPrice = 200;
    const discount = 35;
    const numNights = 4;
    const cabinPrice = 800;

    const minBookingLength = 1;
    const maxBookingLength = 20;

    return (
        <div className="flex flex-col justify-between grow">
            <DayPicker
                className="grow place-content-around place-self-center"
                classNames={{ day: `hover:bg-accent-400 rounded-full transition-colors duration-300` }}
                mode="range"
                locale={sr}
                startMonth={new Date()}
                disabled={{ before: new Date() }}
                endMonth={new Date(new Date().getFullYear() + 2, 11)}
                numberOfMonths={2}
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
            </div>

        </div>
    )
}

export default DateSelector;