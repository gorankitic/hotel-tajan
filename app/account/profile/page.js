// kinde-auth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// components
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import SelectCountry from "@/app/_components/SelectCountry";
// service functions
import { getGuest } from "@/app/_lib/services";

export const metadata = {
    title: "Профил госта"
}

const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const guest = await getGuest(user.id);

    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-4">
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
                    defaultCountry={guest?.nationality}
                />
            </UpdateProfileForm>
        </div>
    )
}

export default Profile;