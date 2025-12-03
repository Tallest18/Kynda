export const generateTimeSlots = (startHour = 9, endHour = 16) => {
  const slots = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    const ampm = hour < 12 ? "AM" : "PM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    slots.push(`${displayHour}:00 ${ampm}`);
  }
  return slots;
};

// ["9:00 AM", "10:00 AM", ..., "4:00 PM"]