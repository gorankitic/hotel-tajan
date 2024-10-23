"use server";

// next
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// kinde-auth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// prisma/db
import prisma from "@/app/_lib/database";

// Path /account/profile is already protected in middleware...
export const updateGuest = async (formData) => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/api/auth/login");
    }

    const nationalId = formData.get("nationalId");
    const [nationality, countryFlag] = formData.get("nationality").split("%");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) {
        throw new Error("Молим Вас унесите исправан број путне испаве.");
    }

    await prisma.guests.update({
        where: {
            kindeId: user.id,
        },
        data: {
            nationalId,
            nationality,
            countryFlag
        }
    });

    revalidatePath("/account/profile");
}