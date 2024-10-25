// date-fns
import { formatDistance, isWithinInterval, parseISO } from "date-fns";
import { sr } from "date-fns/locale";

export const formatDistanceFromNow = (dateString) =>
    formatDistance(dateString, new Date(), { addSuffix: true, locale: sr });

export const isAlreadyBooked = (range, datesArray) => {
    return range.from && range.to && datesArray.some((date) => isWithinInterval(date, { start: range.from, end: range.to }));
}