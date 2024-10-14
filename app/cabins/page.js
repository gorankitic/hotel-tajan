// components
import { Suspense } from "react";
import CabinList from "@/app/_components/CabinList";
import Spinner from "@/app/_components/Spinner";

export const metadata = {
    title: "Апартмани"
}

const Cabins = async () => {

    return (
        <div>
            <h1 className="text-4xl mb-2 text-accent-500 font-medium">Наши апартмани</h1>
            <p className="text-primary-200 text-lg mb-10">
                Уживајте у угодним и луксузним апартманима, смјештеним у самом срцу планине Борје. Замислите буђење уз прелијепе планинске погледе, истраживање мрачних шума током дана или опуштање у вашем приватном џакузију под звијезданим небом. Уживајте у љепотама природе у вашем малом дому далеко од куће. Ово је идеално мјесто за миран и опуштајући одмор. Добро дошли у рај.
            </p>

            <Suspense fallback={<Spinner />}>
                <CabinList />
            </Suspense>
        </div>
    )
}

export default Cabins;