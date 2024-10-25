
// server action
import { signOutAction } from "@/app/_lib/actions";
// assets
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

const SignOutButton = () => {
    return (
        <form action={signOutAction}>
            <button className="flex items-center justify-center gap-2 font-medium tracking-wide hover:bg-primary-900 hover:text-primary-200 py-3 px-5 w-full transition-colors">
                <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-primary-100" />
                <span>Одјави се</span>
            </button>
        </form>
    )
}

export default SignOutButton;