// components
import CabinCard from "@/app/_components/CabinCard";
// server actions
import { getCabins } from "@/app/_lib/services";

const CabinList = async () => {
    const data = await getCabins();

    if(!data.cabins.length) return null;
    
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lag:gap-10 xl:gap-12">
            {data?.cabins.map(cabin => (
                <CabinCard key={cabin._id} cabin={cabin} />
            ))}
        </div>
    )
}

export default CabinList;