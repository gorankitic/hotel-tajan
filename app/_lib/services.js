
export const getCabins = async () => {
    const response = await fetch(`http://localhost:3001/api/cabins`, { credentials: "include" });
    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json;
}