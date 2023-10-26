import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
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
  ]);

  const [newEventName, setNewEventName] = useState('');
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  const handleAddEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: newEventName,
      start: new Date(),
      end: new Date(),
    };

    setEvents([...events, newEvent]);
    setNewEventName('');
    setShowAddEventForm(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md text-white">
      {showAddEventForm ? (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Event Name"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
            className="bg-gray-900 text-white px-4 py-2 rounded-md"
          />
          <button
            onClick={handleAddEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add Event
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowAddEventForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Event
        </button>
      )}

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => console.log('Selected event:', event)}
        className="mt-4"
      />
    </div>
  );
};

export default MyCalendar;
