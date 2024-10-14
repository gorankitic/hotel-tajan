// components
import Image from "next/image";
import Link from "next/link";
// assets
import { UsersIcon } from "@heroicons/react/24/solid";

const CabinCard = ({ cabin }) => {
    const { _id, name, maxCapacity, regularPrice, discount, imageUrl } = cabin;
    
    return (
        <div className="flex border-primary-800 border">
            <div className="relative w-1/3">
                <Image 
                    src={imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`Apartman ${name}`}
                    className="object-cover border-r border-primary-800"
                />
            </div>
            <div className="flex-grow">
                <div className="pt-5 pb-4 px-7 bg-primary-950">
                    <h3 className="text-accent-500 font-medium tracking-wide text-2xl mb-2">Апартман {name}</h3>
                    <div className="flex gap-2 items-center mb-2">
                        <UsersIcon className="h-5 w-5 text-primary-200" />
                        <p className="text-lg text-primary-200">
                            До <span className="font-semibold">{maxCapacity}.</span> {maxCapacity > 4 ? "особа" : "особе"}
                        </p>
                    </div>
                    <p className="flex gap-3 justify-end items-baseline">
                        {discount > 0 ? (
                            <>
                                <span className="text-2xl">{regularPrice - discount}КМ</span>
                                <span className="line-through font-semibold text-primary-600">{regularPrice}КМ</span>
                            </>
                        ) : (
                            <span className="text-2xl">{regularPrice}КМ</span>
                        )}
                        <span className="text-primary-200">/ ноћењу</span>
                    </p>
                </div>

                <div className="text-right">
                    <Link
                        href={`/cabins/${_id}`}
                        className="inline-block bg-accent-500 px-4 py-3 text-primary-50 text-lg tracking-wide font-medium hover:bg-accent-600 transition-all"
                        >
                        Детаљи и резервација &rarr;
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CabinCard;