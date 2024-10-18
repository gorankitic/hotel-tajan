"use client";

// hooks
import { createContext, useContext, useState } from "react"

export const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

const ReservationProvider = ({ children }) => {
    const [range, setRange] = useState(initialState);

    const resetRange = () => setRange(initialState);

    return (
        <ReservationContext.Provider value={{ range, setRange, resetRange }}>
            {children}
        </ReservationContext.Provider>
    )
}

export const useReservation = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error("Context was used outside of provider.");
    }
    return context;
}

export default ReservationProvider;