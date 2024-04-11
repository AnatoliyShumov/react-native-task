type DateTimePart = 'time' | 'period' | 'date' | 'hourMinute';

export const extractDateTimePart = (
  timeString: string,
  part: DateTimePart,
): string => {
  const parts: Record<DateTimePart, string> = {
    time: timeString.split(',')[0].trim(), // "03:45 AM"
    hourMinute: timeString.split(',')[0].split(' ')[0].trim(), // "03:45"
    period: timeString.split(' ')[1].trim(), // "AM"
    date: timeString.split(',').slice(2).join(',').trim(), // "Jan 6, 2024"
  };

  return parts[part];
};

const time = '03:45 AM, Sat, Jan 6, 2024';
console.log(extractDateTimePart(time, 'time')); // Outputs: "03:45 AM"
console.log(extractDateTimePart(time, 'period')); // Outputs: "AM"
console.log(extractDateTimePart(time, 'date')); // Outputs: "Jan 6, 2024"
