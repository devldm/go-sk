import { DateTime } from "luxon";

export function getTimeSincePosting(dateTime: string) {
  var end = DateTime.now();
  var start = DateTime.fromISO(dateTime);

  var diffInMonths = end.diff(start, "months").toObject().months;
  var diffInDays = end.diff(start, "days").toObject().days;

  var diffMonths = Math.floor(diffInMonths!);
  var diffDays = Math.ceil(diffInDays!);

  if (diffDays < 2) {
    return "Posted today";
  } else if (diffDays >= 2 && diffMonths < 1) {
    return `Posted ${diffDays} day's ago`;
  } else if (diffMonths < 2 && diffMonths >= 1) {
    return `Posted ${diffMonths} month ago`;
  } else if (diffMonths > 1 && diffMonths <= 12) {
    return `Posted ${diffMonths} month's ago`;
  } else {
    return `Posted over a year ago`;
  }
}
