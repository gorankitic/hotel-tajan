// components
import Link from "next/link";

const navLinks = [
    {
        name: "Апартмани",
        href: "/cabins"
    },
    {
        name: "О нама",
        href: "/about"
    },
    {
        name: "Гост",
        href: "/account"
    }
];

const Navigation = () => {
    return (
        <nav className="text-xl z-10">
            <ul className="flex gap-10 items-center">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="hover:text-accent-400 transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;