// components
import { Suspense } from "react";
import CabinsList from "@/app/_components/CabinsList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const metadata = {
    title: "Апартмани"
}

const Cabins = async ({ searchParams }) => {
    const filter = searchParams?.capacity ?? "all";

    return (
        <div>
            <h1 className="text-3xl mb-2 text-accent-500 font-medium">Наши апартмани</h1>
            <p className="text-primary-200 text-lg mb-2">
                Уживајте у угодним и луксузним апартманима, смјештеним у самом срцу планине Борје. Замислите буђење уз прелијепе планинске погледе, истраживање мрачних шума током дана или опуштање у вашем приватном џакузију под звијезданим небом. Уживајте у љепотама природе у вашем малом дому далеко од куће. Ово је идеално мјесто за миран и опуштајући одмор. Добро дошли у рај.
            </p>

            <div className="flex justify-end mb-4">
                <Filter />
            </div>

            <Suspense fallback={<Spinner />} key={filter}>
                <CabinsList filter={filter} />
                <ReservationReminder />
            </Suspense>
        </div>
    )
}

export default Cabins;