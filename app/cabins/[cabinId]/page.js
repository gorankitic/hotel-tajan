// components
import Image from "next/image";
// server actions
import { getCabin } from "@/app/_lib/services";
// assets
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

const CabinPage = async ({ params }) => {
    const cabin = await getCabin(params.cabinId);
    const { name, maxCapacity, imageUrl, description } = cabin;
    
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
                <div className="relative scale-[1.15] -translate-x-3">
                    <Image 
                        src={imageUrl}
                        fill
                        className="object-cover"
                        alt={`Апартман ${name}`}
                    />
                </div>
                <div>
                    <h3 className="text-primary-100 text-6xl tracking-wide font-medium mb-5 translate-x-[-200px] bg-primary-950 p-6 w-[120%]">
                        Апартман {name}
                    </h3>
                    <p className="text-lg text-primary-100 mb-10">{description}</p>
                    <ul className="flex flex-col gap-3 mb-7 text-lg">
                        <li className="flex gap-3 items-center">
                            <UsersIcon className="h-5 w-5 text-primary-100" />
                            <span>Капацитет до <span className="font-semibold">{maxCapacity}.</span> {maxCapacity > 4 ? "особа" : "особе"}</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <MapPinIcon className="h-5 w-5 text-primary-100" />
                            <span>На падинама планине <span className="font-semibold">Борје</span></span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <EyeSlashIcon className="h-5 w-5 text-primary-100" />
                            <span>Приватност <span className="font-semibold">100% </span>загарантована</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="text-5xl font-medium text-center">Резервишите данас, платите по доласку</h2>
            </div>
        </div>
    )
}

export default CabinPage;