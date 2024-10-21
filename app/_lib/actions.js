"use server";

// kinde-auth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const updateGuest = async (formData) => {
    const { getUser, getAccessTokenRaw } = getKindeServerSession();
    const [user, accessToken] = await Promise.all([getUser(), getAccessTokenRaw()]);

    const nationalId = formData.get("nationalId");
    const [nationality, countryFlag] = formData.get("nationality").split("%");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) {
        throw new Error("Молим Вас унесите исправан број путне испаве.");
    }

    const response = await fetch(`http://localhost:3001/api/guests/${user.id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'

        },
        credentials: 'include',
        body: JSON.stringify({ nationality, nationalId, countryFlag })
    });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}