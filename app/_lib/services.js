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

export const getGuest = async (email) => {
    const response = await fetch(`http://localhost:3001/api/guests/fetch`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email })
    })
    const json = await response.json();

    if (!response.ok) {
        // Instead of throwing an error return null,
        // I need null in auth.js so i can automatically create a new guest
        return null;
    }

    return json;
}

export const createGuest = async ({ email, name }) => {
    const response = await fetch(`http://localhost:3001/api/guests`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, name })
    });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}