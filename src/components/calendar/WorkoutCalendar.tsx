import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Workout } from '../../types';

interface WorkoutCalendarProps {
  workouts: Workout[];
}

export function WorkoutCalendar({ workouts }: WorkoutCalendarProps) {
  const events = workouts.map(workout => ({
    title: workout.name,
    date: workout.date,
    extendedProps: {
      calories: workout.calories,
      exercises: workout.exercises.length
    }
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={(eventInfo) => (
          <div className="p-1">
            <div className="font-semibold">{eventInfo.event.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {eventInfo.event.extendedProps.exercises} exercises
            </div>
          </div>
        )}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        height="auto"
      />
    </div>
  );
}