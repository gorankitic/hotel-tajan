export const getCabins = async () => {
    const response = await fetch(`http://localhost:3001/api/cabins`, { credentials: "include" });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

export const getCabin = async (cabinId) => {
    const response = await fetch(`http://localhost:3001/api/cabins/${cabinId}`, { credentials: "include" });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

export const getSettings = async () => {
    const response = await fetch(`http://localhost:3001/api/settings`, { credentials: "include" });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

export const getBookedDates = async (cabinId) => {
    const response = await fetch(`http://localhost:3001/api/bookings/cabin/${cabinId}`, { credentials: "include" });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

export const getGuest = async (id) => {
    const response = await fetch(`http://localhost:3001/api/guests/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });
    const json = await response.json();

    if (json.status === "error") {
        // Don't throw an error, if there is no guest create a new one in DB
        return json;
    }

    return json;
}

export const createGuest = async ({ email, name, imageUrl, kindeId }) => {
    const response = await fetch(`http://localhost:3001/api/guests`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, name, imageUrl, kindeId })
    });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}

export const getCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v2/all?fields=name,flag");
        const countries = await response.json();
        return countries;
    } catch (error) {
        throw new Error("Could not fetch countries");
    }
}