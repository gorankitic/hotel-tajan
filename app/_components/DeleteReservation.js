"use client";

// assets
import { TrashIcon } from "@heroicons/react/24/solid";

const DeleteReservation = ({ bookingId }) => {
    return (
        <button
            className="group flex w-full items-center gap-1 text-sm uppercase font-medium text-primary-300 border-b border-primary-800 flex-grow justify-center hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
            <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
            <span className="mt-1">Обриши</span>
        </button>
    )
}

export default DeleteReservation;