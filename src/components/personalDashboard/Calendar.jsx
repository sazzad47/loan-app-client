import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
  return (
    <div className='w-full'>
        <h3 className='calendar-heading mb-2'> Calendar </h3>
        <div className='bg-white rounded-[1.875rem] p-3'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
        </LocalizationProvider>
        </div>
    </div>
  );
}