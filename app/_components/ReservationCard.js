// components
import Image from "next/image";
import Link from "next/link";
import DeleteReservation from "@/app/_components/DeleteReservation";
// utility functions
import { format, isPast, isToday } from "date-fns";
import { formatDistanceFromNow } from "@/app/_lib/utils";
// assets
import { PencilSquareIcon } from "@heroicons/react/24/solid";


const ReservationCard = ({ booking }) => {
    const { id, startDate, endDate, numNights, totalPrice, numGuests, createdAt, cabin: { name, imageUrl } } = booking;


    return (
        <div className="flex border border-primary-800">

            <div className="relative h-32 aspect-square">
                <Image
                    src={imageUrl}
                    alt={`Apartman ${name}`}
                    fill
                    className="object-cover border-r border-primary-800"
                />
            </div>

            <div className="flex-grow px-6 py-3 flex flex-col">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium">{numNights} ноћења у апартману {name}</h3>
                    {isPast(new Date(startDate)) ? (
                        <span className="bg-yellow-600 text-yellow-100 px-3 py-1 uppercase text-xs tracking-wider rounded-sm">
                            Прошло
                        </span>
                    ) : (
                        <span className="bg-green-800 text-green-100 px-3 py-1 uppercase text-xs tracking-wider rounded-sm">
                            Ускоро
                        </span>
                    )}
                </div>

                <p>
                    {format(new Date(startDate), "d.L.yyyy.")}{" "}
                    ({isToday(new Date(startDate)) ? "Данас" : formatDistanceFromNow(startDate)})
                    &mdash; {format(new Date(endDate), "d.L.yyyy.")}
                </p>

                <div className="flex gap-5 mt-auto items-baseline">
                    <p className="text-xl font-medium text-accent-400">{totalPrice}КМ</p>
                    <p className="text-primary-300">&bull;</p>
                    <p className="text-lg text-primary-300">{numGuests}{numGuests > 1 ? ". гостију" : ". гост"}</p>
                    <p className="ml-auto text-sm text-primary-400">
                        Резервисано {format(new Date(createdAt), "dd.L.yyyy.")}
                    </p>
                </div>
            </div>
            <div className="flex flex-col border-l border-primary-800 w-[100px]">
                <Link
                    href={`/account/reservations/edit/${id}`}
                    className="group flex items-center gap-1 uppercase font-medium text-sm text-primary-300 border-b border-primary-800 flex-grow justify-center hover:bg-accent-600 transition-colors hover:text-primary-900"
                >
                    <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                    <span className="mt-1">Уреди</span>
                </Link>
                <DeleteReservation bookingId={id} />
            </div>
        </div>
    )
}

export default ReservationCard;