"use client";

const Error = ({ error, reset }) => {
    return (
        <main className="flex justify-center items-center flex-col gap-4 mt-20">
            <h1 className="text-3xl font-semibold uppercase tracking-widest">Нешто није у реду!</h1>
            <p className="text-xl">{error.message}</p>
            <button 
                onClick={reset}
                className="inline-block bg-accent-500 text-primary-800 px-4 py-2 text-xl">
                Покушајте поново
            </button>
        </main>
    )
}

export default Error;