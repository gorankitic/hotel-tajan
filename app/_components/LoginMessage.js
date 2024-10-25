// components
import Link from "next/link";

const LoginMessage = () => {
    return (
        <div className="grid bg-primary-800 grow">
            <p className="text-center text-xl py-10 self-center">
                Молимо Вас да се{" "}
                <Link
                    href="/login"
                    className="underline text-accent-500"
                >
                    пријавите
                </Link>
                {" "}да би сте <br />резервисали овај апартман.
            </p>
        </div>
    )
}

export default LoginMessage;