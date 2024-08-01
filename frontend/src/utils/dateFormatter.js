export const formattedDate = (isoString) => {
    const inputDate = new Date(isoString);
    
    // Construct the date string in the format: Day Month Year
    const date = inputDate.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // Get the time string in the format: Hour:Minute AM/PM
    const time = inputDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    // Return an object containing the formatted date and time
    return { date, time };
}
