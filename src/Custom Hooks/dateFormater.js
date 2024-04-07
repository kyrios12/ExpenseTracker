import { useState, useEffect } from 'react';

function useDateFormat(inputDateStr) {
  // State to hold the formatted date string
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // Parse the input date string into a Date object
    const inputDate = new Date(inputDateStr);

    // Define an array to map month numbers to month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];

    // Extract day, month, and year components from the Date object
    const day = inputDate.getDate();
    const month = monthNames[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    // Assemble the formatted date string
    const formattedDateStr = `${day} ${month} ${year}`;

    // Set the formatted date string to state
    setFormattedDate(formattedDateStr);
  }, [inputDateStr]); // Trigger effect when inputDateStr changes

  // Return the formatted date string
  return formattedDate;
}

export default useDateFormat;
