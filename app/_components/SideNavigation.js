// components
import Link from "next/link";
// assets
import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid";

const navLinks = [
    {
      name: "Почетна",
      href: "/account",
      icon: <HomeIcon className="h-5 w-5 text-primary-100" />,
    },
    {
      name: "Резервације",
      href: "/account/reservations",
      icon: <CalendarDaysIcon className="h-5 w-5 text-primary-100" />,
    },
    {
      name: "Профил",
      href: "/account/profile",
      icon: <UserIcon className="h-5 w-5 text-primary-100" />,
    },
];

const SideNavigation = () => {
    return (
        <nav className="border-r border-primary-900">
            <ul className="flex flex-col gap-2 h-full text-lg">
                {navLinks.map(link => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className="flex items-center justify-center gap-2 font-medium tracking-wide hover:bg-primary-900 hover:text-primary-200 py-3 px-5 transition-colors"
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SideNavigation;
