// components
import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
// assets
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

const Cabin = ({ cabin }) => {
    const { name, maxCapacity, imageUrl, description } = cabin;

    return (
        <div className="grid grid-cols-[3fr_4fr] gap-14 border border-primary-800 py-3 px-10 mb-12">
            <div className="relative scale-[1.15] -translate-x-3">
                <Image
                    src={imageUrl}
                    fill
                    className="object-cover"
                    alt={`Апартман ${name}`}
                />
            </div>
            <div>
                <h3 className="text-accent-400 text-6xl tracking-wide font-medium mb-5 translate-x-[-150px] bg-primary-950 p-6 w-[120%]">
                    Апартман {name}
                </h3>
                <p className="text-lg text-primary-100 mb-10">
                    <TextExpander>{description}</TextExpander>
                </p>
                <ul className="flex flex-col gap-1 mb-7 text-lg">
                    <li className="flex gap-3 items-center">
                        <UsersIcon className="h-5 w-5 text-primary-100" />
                        <span>
                            Капацитет до{" "}
                            <span className="font-semibold">{maxCapacity}.</span>{" "}
                            {maxCapacity > 4 ? "особа" : "особе"}
                        </span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-100" />
                        <span>
                            На падинама планине <span className="font-semibold">Борје</span>
                        </span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <EyeSlashIcon className="h-5 w-5 text-primary-100" />
                        <span>
                            Приватност <span className="font-semibold">100% </span>
                            загарантована
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Cabin;