// date-fns
import { formatDistance, parseISO } from "date-fns";
import { sr } from "date-fns/locale";

export const formatDistanceFromNow = (dateString) =>
    formatDistance(dateString, new Date(), { addSuffix: true, locale: sr });