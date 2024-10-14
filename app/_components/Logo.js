// components
import Image from "next/image";
import Link from "next/link";
// assets
import logo from "@/public/logo.png";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <Image src={logo} height="50" width="50" quality={100} alt="Hotel Tajan logo" />
            <span className="text-2xl font-medium tracking-wide text-primary-100">
                Хотел Тајан
            </span>
        </Link>
    )
}

export default Logo;