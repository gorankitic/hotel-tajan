"use client";

// hooks
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";

    const handleFilter = (filter) => {
        const params = new URLSearchParams(searchParams);
        params.set("capacity", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="flex border border-primary-800">
            <Button
                filter="all"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                Сви апартмани
            </Button>
            <Button
                filter="small"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                До 2. особе
            </Button>
            <Button
                filter="medium"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                Од 4. до 6. особа
            </Button>
            <Button
                filter="large"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                Преко 8. особа
            </Button>
        </div>
    );
}

const Button = ({ filter, handleFilter, activeFilter, children }) => {
    return (
        <button
            onClick={() => handleFilter(filter)}
            className={`uppercase tracking-wide px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-800 text-primary-100" : ""}`}
        >
            {children}
        </button>
    );
}

export default Filter;