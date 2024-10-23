// kinde-auth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// service functions
import { getGuestReservations, getGuest } from "@/app/_lib/services";
// components
import Link from "next/link";
import ReservationList from "@/app/_components/ReservationList";

export const metadata = {
    title: "Резервације",
};

const Reservations = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const guest = await getGuest(user.id);
    const reservations = await getGuestReservations(guest._id);

    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">
                Ваше резервације
            </h2>

            {reservations.length === 0 ? (
                <p className="text-lg">
                    Немате резервација. Погледајте наше{" "}
                    <Link className="underline text-accent-500" href="/cabins">
                        апартмане &rarr;
                    </Link>
                </p>
            ) : (
                <ReservationList reservations={reservations} />
            )}
        </div>
    )
}

export default Reservations;