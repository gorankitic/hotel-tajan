// components
import Image from "next/image";
import Link from "next/link";
// assets
import bg from "@/public/bg.png";

const Home = () => {
  return (
    <div className="mt-72">
      <Image
        src={bg}
        quality={80}
        alt="Hotel in mountain and forest"
        fill
        className="object-cover object-top"
        placeholder="blur"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl mb-12 text-primary-50 tracking-tight">
          Добро дошли на Борје
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4 text-primary-50 text-xl tracking-wide font-medium hover:bg-accent-600 transition-all"
        >
          Погледајте апартмане
        </Link>
      </div>
    </div>
  );
};

export default Home;
