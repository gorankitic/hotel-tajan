// components
import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

const Header = () => {
    return (
        <header className="border-b border-primary-900 py-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}

export default Header;