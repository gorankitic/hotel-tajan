// next auth
import { auth } from "@/app/_lib/auth";
// components
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
// prisma/db
import prisma from "@/app/_lib/database";

export const metadata = {
    title: "Профил госта"
}

const Profile = async () => {
    const session = await auth();
    const guest = await prisma.guests.findUnique({ where: { id: session.user.guestId } });

    return (
        <div>
            <h2 className="font-medium text-2xl text-accent-400 mb-6">
                Ажурирајте свој профил
            </h2>

            <p className="text-lg mb-8 text-primary-200">
                Овим информацијама убрзавате своју пријаву у хотелу! Видимо се ускоро!
            </p>

            <UpdateProfileForm guest={guest}>
                <SelectCountry
                    name="nationality"
                    id="nationality"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    defaultCountry={guest.nationality}
                />
            </UpdateProfileForm>
        </div>
    )
}

export default Profile;