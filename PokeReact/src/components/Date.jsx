import React, { useState, useEffect } from 'react';

export default function Dates() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
    setMonth(monthNames[date.getMonth()]);
    setDay(date.getDate());
  }, []);

  return (
    <div>
      <div className="clock-div">
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
    </div>
  )
}
