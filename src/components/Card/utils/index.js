function convertToEST(dateString) {
  // Create a Date object from the UTC date string
  const date = new Date(dateString);

  // Options to format the date in Eastern Time, considering daylight saving
  const options = {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // Convert and format the date to Eastern Time
  const estDate = date.toLocaleString("en-US", options);

  console.log("EST Date:", estDate); // Log the EST date

  return estDate;
}

export { convertToEST };
