export function formatDateTime(date) {
    // Convert to GMT+1
    const offset = 1; // GMT+1
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000; // Offset in milliseconds
    const utc = localTime + localOffset;
    const gmt1Time = new Date(utc + 3600000 * offset); // Convert to GMT+1
    // Get the year, month, day, hour, and minute components of the date
    const year = gmt1Time.getFullYear();
    const month = (gmt1Time.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = gmt1Time.getDate().toString().padStart(2, "0");
    const hours = gmt1Time.getHours().toString().padStart(2, "0");
    const minutes = gmt1Time.getMinutes().toString().padStart(2, "0");
    // Concatenate the components to form the formatted date-time string
    const formattedDateTime = `${year}${month}${day}${hours}${minutes}`;
    return formattedDateTime;
}
