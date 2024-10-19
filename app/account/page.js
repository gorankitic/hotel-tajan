// next-auth
import { auth } from "@/app/_lib/auth";

const Account = async () => {
    const session = await auth();
    const firstName = session?.user.name.split(" ").at(0);

    return (
        <h2 className="font-medium text-2xl text-accent-400 mb-6">
            Добро дошао, {firstName}
        </h2>
    )
}

export default Account;