import { useState, useEffect } from 'react';

function useDateFormat(inputDateStr) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const inputDate = new Date(inputDateStr);

    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];

    const day = inputDate.getDate();
    const month = monthNames[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    const formattedDateStr = `${day} ${month} ${year}`;

    setFormattedDate(formattedDateStr);
  }, [inputDateStr]); 

  return formattedDate;
}

export default useDateFormat;
