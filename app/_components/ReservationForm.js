"use client";

const ReservationForm = ({ cabin }) => {

    return (
        <div>
            <div className="flex justify-between items-center bg-primary-800 text-primary-300 px-12 py-2">
                <p>Пријављен</p>
                <p>Горан Китић</p>
            </div>
            <p>Од 12.12.2024. до 16.12.2024.</p>
            <form className="bg-primary-900 py-6 px-10 text-lg flex flex-col gap-5">
                <div className="space-y-1">
                    <label htmlFor="numGuests">Колико гостију?</label>
                    <select
                        name="numGuests"
                        id="numGuests"
                        required
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    >
                        <option value="" key="">Изаберите број гостију</option>
                        {Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map(x => (
                            <option value={x} key={x}>
                                {`${x}${x === 1 ? ". гост" : ". гостију"}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-1">
                    <label htmlFor="observations">Напомене:</label>
                    <textarea
                        name="observations"
                        id="observations"
                        placeholder="Да ли доводите кућног љубимца или имате неке посебне захтјеве?"
                        className="px-5 py-3 bg-primary-200 text-primary-800 placeholder:text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>
                <div className="flex justify-end items-center gap-6">
                    <p className="text-primary-300 text-base">Да би резервисали изаберите датуме</p>
                    <button className="bg-accent-500 px-5 py-2 uppercase tracking-wider text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
                        Резервишите
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReservationForm;