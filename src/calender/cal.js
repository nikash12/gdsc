import React from 'react';
import MyCalendar from './MyCalender';
import './calender.css'

const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(2023, 9, 26, 10, 0),
    end: new Date(2023, 9, 26, 12, 0),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date(2023, 9, 28, 14, 0),
    end: new Date(2023, 9, 28, 16, 0),
  },
  // Add more events here
];

function Calendar() {
  return (
    <div className="App">
      <h1>Event Calendar</h1>
      <MyCalendar events={events} />
    </div>
  );
}

export default Calendar;
