// kinde-auth
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// components
import Link from "next/link";
import Image from "next/image";

const Navigation = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

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
                    {user && user.picture ? (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center gap-2"
                        >
                            <Image
                                className="rounded-full"
                                width={24}
                                height={24}
                                src={user.picture}
                                alt={user.given_name}
                                referrerPolicy="no-referrer"
                            />
                            <span>{user.given_name}</span>
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