// next-auth
import { auth } from "@/app/_lib/auth";
// components
import Link from "next/link";
import Image from "next/image";

const Navigation = async () => {
    const session = await auth();
    const firstName = session?.user.name.split(" ").at(0);

    return (
        <nav className="text-xl z-10">
            <ul className="flex gap-10 items-center">
                <li>
                    <Link
                        href="/cabins"
                        className="hover:text-accent-400 transition-colors"
                    >
                        Апартмани
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="hover:text-accent-400 transition-colors"
                    >
                        О нама
                    </Link>
                </li>
                <li>
                    {session?.user.image ? (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center gap-2"
                        >
                            <Image
                                className="rounded-full"
                                width={24}
                                height={24}
                                src={session.user.image}
                                alt={session.user.name}
                                referrerPolicy="no-referrer"
                            />
                            <span>{firstName}</span>
                        </Link>
                    ) : (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors"
                        >
                            Гост
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;