// Move forward/backward by months
export function changeMonth(currentDate, direction) {
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + direction,
    1
  );
}

// function to get the first day of any particular month(e.g monday, tuesday...)
export function getFirstWeekdayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

// Get number of days in a a particular month based on the date
export function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function canGoToPreviousMonth(currentDate, baseDate = new Date()) {
  return (
    currentDate.getFullYear() > baseDate.getFullYear() ||
    currentDate.getMonth() > baseDate.getMonth()
  );
}