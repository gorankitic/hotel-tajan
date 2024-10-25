"use client";

// hooks
import { useTransition } from "react";
// server actions
import { deleteReservation } from "@/app/_lib/actions";
// components
import SpinnerMini from "./SpinnerMini";
// assets
import { TrashIcon } from "@heroicons/react/24/solid";

const DeleteReservation = ({ bookingId }) => {
    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
        startTransition(() => deleteReservation(bookingId));
    }

    return (
        <button
            onClick={handleDelete}
            disabled={isPending}
            className="group flex w-full items-center gap-1 text-sm uppercase font-semibold text-primary-300 border-b border-primary-800 flex-grow justify-center hover:bg-accent-600 transition-colors hover:text-primary-900"
        >
            {isPending ? (
                <span className="mx-auto">
                    <SpinnerMini />
                </span>
            ) : (
                <>
                    <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-900 transition-colors" />
                    <span className="mt-1">Обриши</span>
                </>
            )}
        </button>
    )
}

export default DeleteReservation;