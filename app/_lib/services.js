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
