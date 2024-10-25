"use client";

// components
import SubmitButton from "@/app/_components/SubmitButton";
// server actions
import { updateGuest } from "@/app/_lib/actions";

function UpdateProfileForm({ guest, children }) {
    const { name, email, nationalId, countryFlag } = guest;

    return (
        <form
            action={updateGuest}
            className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
        >
            <div className="space-y-2">
                <label htmlFor="name">Име и презиме</label>
                <input
                    id="name"
                    disabled
                    defaultValue={name}
                    name="name"
                    className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email">Адреса е-поште</label>
                <input
                    id="email"
                    disabled
                    defaultValue={email}
                    name="email"
                    className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Из које државе долазите?</label>
                    <img
                        src={countryFlag}
                        alt="Country flag"
                        className="h-5 rounded-sm"
                    />
                </div>
                {children}
            </div>

            <div className="space-y-2">
                <label htmlFor="nationalId">Број путне исправе</label>
                <input
                    id="nationalId"
                    name="nationalId"
                    defaultValue={nationalId}
                    className="px-4 py-2 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton pendingLabel="Caчекајте...">
                    Ажурирајте профил
                </SubmitButton>
            </div>
        </form>
    );
}

export default UpdateProfileForm;
