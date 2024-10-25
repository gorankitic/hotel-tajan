"use server";

// next
import { revalidatePath } from "next/cache";
// next-auth
import { auth, signIn, signOut } from "@/app/_lib/auth";
// prisma/db
import prisma from "@/app/_lib/database";

export const signInAction = async () => {
    await signIn("google", { redirectTo: "/account" });
}

export const signOutAction = async () => {
    await signOut({ redirectTo: "/" });
}

export const updateGuest = async (formData) => {
    const session = await auth();

    if (!session) {
        throw new Error("Молимо да се пријавите!");
    }

    const nationalId = formData.get("nationalId");
    const [nationality, countryFlag] = formData.get("nationality").split("%");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) {
        throw new Error("Молим Вас унесите исправан број путне испаве.");
    }

    try {
        await prisma.guests.update({
            where: {
                id: session.user.guestId,
            },
            data: {
                nationalId,
                nationality,
                countryFlag
            }
        });
    } catch (error) {
        throw new Error("Профил није могуће ажурирати. Покушајте касније.");
    }

    revalidatePath("/account/profile");
}

export const deleteReservation = async (bookingId) => {

    await prisma.bookings.delete({ where: { id: bookingId } });

    revalidatePath("/account/reservations");
}