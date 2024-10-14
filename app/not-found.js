// components
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="text-center space-y-6 mt-20">
            <h1 className="text-3xl font-medium tracking-wider">
                Тражена страница не постоји!
            </h1>
            <Link
                href="/"
                className="inline-block bg-accent-500 text-primary-800 px-4 py-2 text-xl"
            >
                Врати се на почетак
            </Link>
        </main>
    )
}

export default NotFound;