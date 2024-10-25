"use server";

// next
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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

export const updateReservation = async (formData) => {
    const session = await auth();
    if (!session) {
        throw new Error("Молимо да се пријавите!");
    }
    const bookingId = formData.get("bookingId");
    const numGuests = Number(formData.get("numGuests"));
    const observations = formData.get("observations").slice(0, 500);
    try {
        await prisma.bookings.update({
            where: {
                id: bookingId,
                AND: [
                    { guestId: session.user.guestId }
                ],
            },
            data: {
                numGuests,
                observations
            }
        });
    } catch (error) {
        console.error(error);
        throw new Error("Резервацију није могуће ажурирати. Покушајте касније.");
    }
    revalidatePath("/account/reservations");
    revalidatePath(`/account/reservations/edit/${bookingId}`);
    redirect("/account/reservations");
}

export const deleteReservation = async (bookingId) => {
    const session = await auth();
    if (!session) {
        throw new Error("Молимо да се пријавите!");
    }
    try {
        await prisma.bookings.delete({
            where: {
                id: bookingId,
                AND: [
                    { guestId: session.user.guestId }
                ],
            }
        });
    } catch (error) {
        console.error("❌❌❌ ERROR: ", error?.meta?.cause);
        if (error.code === "P2025") {
            throw new Error("Немате дозволу да обришете ову резервацију.");
        }
        throw new Error("Не можете обрисати ову резервацију. Покушајте касније.");
    }
    revalidatePath("/account/reservations");
}