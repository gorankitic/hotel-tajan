"use client";

// hooks
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children, pendingLabel }) => {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            className="bg-accent-500 px-4 py-4 w-[200px] text-primary-800 font-medium hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-200"
        >
            {pending ? pendingLabel : children}
        </button>
    )
}

export default SubmitButton;