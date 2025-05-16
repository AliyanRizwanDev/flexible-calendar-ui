import React, { useState } from 'react';
import Calendar from './Calendar';
import YearCalendar from './YearCalendar';
import ViewToggle from './ViewToggle';
import { CalendarProps } from './types';
import { ThemeProvider } from './ThemeContext';
import './styles.css';

interface CalendarContainerProps extends CalendarProps {
  theme?: any;
  children?: React.ReactNode;
}

const CalendarContainer: React.FC<CalendarContainerProps> = ({
  attendance,
  holidays,
  initialDate,
  onDateClick,
  theme,
  children,
}) => {
  const [view, setView] = useState<'month' | 'year'>('month');

  return (
    <ThemeProvider theme={theme}>
      <div className="calendar-container">
        <div className="calendar-header">
          <div></div> {/* Spacer for flex layout */}
          <ViewToggle view={view} setView={setView} />
        </div>
        
        {/* If children are provided, render them; otherwise use the default behavior */}
        {children ? (
          children
        ) : view === 'month' ? (
          <Calendar
            attendance={attendance}
            holidays={holidays}
            initialDate={initialDate}
            onDateClick={onDateClick}
          />
        ) : (
          <YearCalendar
            attendance={attendance}
            holidays={holidays}
            initialYear={initialDate ? new Date(initialDate).getFullYear() : undefined}
            onDateClick={onDateClick}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default CalendarContainer;
