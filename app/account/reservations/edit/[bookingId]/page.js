// components
import SubmitButton from "@/app/_components/SubmitButton";
// server actions
import { updateReservation } from "@/app/_lib/actions";
// prisma/db
import prisma from "@/app/_lib/database";

const EditReservation = async ({ params }) => {
    const { bookingId } = params;

    const { numGuests, observations, cabin: { maxCapacity } } = await prisma.bookings.findUnique({ where: { id: bookingId }, include: { cabin: true } });

    return (
        <div>
            <h2 className="font-medium text-2xl text-accent-400 mb-6">Измјени резервацију</h2>

            <form
                action={updateReservation}
                className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
            >
                <input type="hidden" value={bookingId} name="bookingId" />
                <div className="space-y-2">
                    <label htmlFor="numGuests">Колико гостију?</label>
                    <select
                        name="numGuests"
                        id="numGuests"
                        required
                        defaultValue={numGuests}
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    >
                        <option value="" key="">Изаберите број гостију</option>
                        {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(x => (
                            <option value={x} key={x}>
                                {`${x}${x === 1 ? ". гост" : ". гостију"}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="observations">Напомене:</label>
                    <textarea
                        name="observations"
                        id="observations"
                        defaultValue={observations}
                        placeholder="Да ли доводите кућног љубимца или имате неке посебне захтјеве?"
                        className="px-5 py-3 bg-primary-200 text-primary-800 placeholder:text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>
                <div className="flex justify-end items-center gap-6">
                    <SubmitButton pendingLabel="Сачекајте...">
                        Ажурирај резервацију
                    </SubmitButton>
                </div>
            </form>
        </div>
    )
}

export default EditReservation;