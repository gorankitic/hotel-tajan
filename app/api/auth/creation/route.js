import { getGuest, createGuest } from "@/app/_lib/services";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    try {
        const response = await getGuest(user.id);
        // console.log("Guest is in DB: ", response);
        if (response.status === "error") {
            await createGuest({
                name: `${user.given_name} ${user.family_name}`,
                email: user.email,
                imageUrl: user.picture,
                kindeId: user.id
            });
            // console.log("Guest after creation", guest);
        }
    } catch (error) {
        console.log(error.message);
    }

    return NextResponse.redirect("http://localhost:3000/");
}