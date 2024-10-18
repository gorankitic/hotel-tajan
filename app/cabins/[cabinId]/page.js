// components
import { Suspense } from "react";
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
// server actions
import { getCabin, getCabins } from "@/app/_lib/services";

// Generate dynamic metadata
export const generateMetadata = async ({ params }) => {
  const { name } = await getCabin(params.cabinId);
  return { title: `Апартман ${name}` };
};

// Make dynamic pages static with generateStaticParams
export const generateStaticParams = async () => {
  const data = await getCabins();
  const ids = data.cabins.map((cabin) => ({ cabinId: cabin._id }));
  return ids;
};

const CabinPage = async ({ params }) => {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-accent-400 text-4xl font-medium text-center tracking-wide mb-10">
          Резервишите апартман {cabin.name} данас, платите по доласку
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
};

export default CabinPage;
