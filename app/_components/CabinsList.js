// components
import CabinCard from "@/app/_components/CabinCard";
// service functions
import { getCabins } from "@/app/_lib/services";

const CabinsList = async ({ filter }) => {
    const { cabins } = await getCabins();

    if (!cabins.length) return null;

    let filteredCabins;
    if (filter === "all") filteredCabins = cabins;
    if (filter === "small") filteredCabins = cabins.filter(cabin => cabin.maxCapacity < 4);
    if (filter === "medium") filteredCabins = cabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 6);
    if (filter === "large") filteredCabins = cabins.filter(cabin => cabin.maxCapacity >= 8);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lag:gap-10 xl:gap-12">
            {filteredCabins.map(cabin => (
                <CabinCard key={cabin._id} cabin={cabin} />
            ))}
        </div>
    );
}

export default CabinsList;