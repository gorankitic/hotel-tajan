// server actions
import { signInAction } from "@/app/_lib/actions";

const SignInButton = () => {
    return (
        <form action={signInAction}>
            <button className="flex items-center gap-5 text-lg border border-primary-300 px-10 py-4 font-medium">
                <img
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="Google logo"
                    height="24"
                    width="24"
                />
                <span>Пријавите се уз Google</span>
            </button>
        </form>
    )
}

export default SignInButton;