// components
import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
    title: "Пријављивање"
}

const LoginPage = () => {
    return (
        <div className="flex flex-col gap-12 mt-20 items-center">
            <h1 className="text-3xl font-medium tracking-wider">Пријавите се да добијете приступ свом профилу</h1>
            <SignInButton />
        </div>
    )
}

export default LoginPage;