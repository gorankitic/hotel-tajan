// kinde-auth
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const LoginMessage = () => {
    return (
        <div className="grid bg-primary-800 grow">
            <p className="text-center text-xl py-10 self-center">
                Молимо Вас да се{" "}
                <LoginLink className="underline text-accent-500">
                    пријавите
                </LoginLink>
                {" "}да би сте <br />резервисали овај апартман.
            </p>
        </div>
    )
}

export default LoginMessage;