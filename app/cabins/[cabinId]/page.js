// components
import { Suspense } from "react";
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
// prisma/db
import prisma from "@/app/_lib/database";

// Generate dynamic metadata
export const generateMetadata = async ({ params }) => {
  const { name } = await prisma.cabins.findUnique({ where: { id: params.cabinId } });;
  return { title: `Апартман ${name}` };
};

// Make dynamic pages static with generateStaticParams
export const generateStaticParams = async () => {
  const cabins = await prisma.cabins.findMany();
  const ids = cabins.map((cabin) => ({ cabinId: cabin.id }));
  return ids;
};

const CabinPage = async ({ params }) => {
  const cabin = await prisma.cabins.findUnique({ where: { id: params.cabinId } });

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
