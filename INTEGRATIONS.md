# Integrations

This document showcases how to integrate Flexible Calendar UI with popular frameworks and libraries.

## React Router Integration

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';

// Calendar with routing
const RoutedCalendar = () => {
  const { year, month } = useParams();
  const navigate = useNavigate();
  
  const initialDate = year && month ? `${year}-${month}-01` : undefined;
  
  const handleDateClick = (date) => {
    const [clickedYear, clickedMonth, day] = date.split('-');
    navigate(`/calendar/day/${clickedYear}/${clickedMonth}/${day}`);
  };
  
  return (
    <CalendarContainer>
      <Calendar 
        initialDate={initialDate}
        onDateClick={handleDateClick}
      />
    </CalendarContainer>
  );
};

// Day details view
const DayView = () => {
  const { year, month, day } = useParams();
  return (
    <div>
      <h2>Day Details: {`${year}-${month}-${day}`}</h2>
      {/* Day details component here */}
    </div>
  );
};

// App with routing
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutedCalendar />} />
        <Route path="/calendar/:year/:month" element={<RoutedCalendar />} />
        <Route path="/calendar/day/:year/:month/:day" element={<DayView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

## Redux Integration

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';

// Redux actions
const selectDate = (date) => ({
  type: 'calendar/selectDate',
  payload: date,
});

const updateAttendance = (date, status) => ({
  type: 'calendar/updateAttendance',
  payload: { date, status },
});

// Calendar component with Redux
const ReduxCalendar = () => {
  const dispatch = useDispatch();
  const { attendance, holidays, selectedDate } = useSelector(state => state.calendar);
  
  const handleDateClick = (date, status) => {
    dispatch(selectDate(date));
    // Open modal or perform other actions
  };
  
  const handleStatusChange = (date, newStatus) => {
    dispatch(updateAttendance(date, newStatus));
  };
  
  return (
    <CalendarContainer>
      <Calendar 
        attendance={attendance}
        holidays={holidays}
        initialDate={selectedDate}
        onDateClick={handleDateClick}
      />
      
      {selectedDate && (
        <div className="status-selector">
          <h3>Update Status for {selectedDate}</h3>
          <button onClick={() => handleStatusChange(selectedDate, 'present')}>
            Present
          </button>
          <button onClick={() => handleStatusChange(selectedDate, 'absent')}>
            Absent
          </button>
          <button onClick={() => handleStatusChange(selectedDate, 'leave')}>
            Leave
          </button>
        </div>
      )}
    </CalendarContainer>
  );
};

export default ReduxCalendar;
```

## Next.js Integration

```jsx
// pages/calendar/[[...date]].js

import { useRouter } from 'next/router';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';

export default function CalendarPage() {
  const router = useRouter();
  const { date } = router.query;
  
  // Handle optional catch-all routes: /calendar, /calendar/2024, /calendar/2024/05
  let initialDate;
  if (date) {
    if (date.length === 1) {
      // /calendar/2024
      initialDate = `${date[0]}-01-01`;
    } else if (date.length >= 2) {
      // /calendar/2024/05
      initialDate = `${date[0]}-${date[1]}-01`;
    }
  }
  
  const handleDateClick = (clickedDate) => {
    const [year, month, day] = clickedDate.split('-');
    router.push(`/calendar/day/${year}/${month}/${day}`);
  };
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      <CalendarContainer>
        <Calendar initialDate={initialDate} onDateClick={handleDateClick} />
      </CalendarContainer>
    </div>
  );
}
```

## TypeScript Example with Custom Themes

```tsx
import React, { useState } from 'react';
import { CalendarContainer, Calendar, YearCalendar, ThemeContextType } from 'flexible-calendar-ui';

// Define theme presets
const themePresets: Record<string, Partial<ThemeContextType>> = {
  blue: {
    primaryColor: '#1976d2',
    secondaryColor: '#90caf9',
    presentColor: '#4caf50',
    absentColor: '#f44336',
    borderRadius: '4px',
  },
  dark: {
    primaryColor: '#333',
    secondaryColor: '#555',
    textColor: '#eee',
    presentColor: '#81c784',
    absentColor: '#e57373',
    headerBgColor: '#222',
    headerTextColor: '#fff',
    borderRadius: '8px',
  },
  pastel: {
    primaryColor: '#9575cd',
    secondaryColor: '#b39ddb',
    presentColor: '#a5d6a7',
    absentColor: '#ef9a9a',
    leaveColor: '#ffe082',
    borderRadius: '12px',
  },
};

interface ThemeSelectorProps {
  onSelectTheme: (theme: Partial<ThemeContextType>) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelectTheme }) => {
  return (
    <div className="theme-selector">
      <h3>Select Theme:</h3>
      <div className="button-group">
        {Object.entries(themePresets).map(([name, theme]) => (
          <button 
            key={name}
            onClick={() => onSelectTheme(theme)}
            style={{ 
              backgroundColor: theme.primaryColor,
              color: theme.headerTextColor || '#fff',
              padding: '8px 16px',
              margin: '0 8px',
              border: 'none',
              borderRadius: theme.borderRadius || '4px'
            }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

const ThemedCalendarApp: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Partial<ThemeContextType>>(themePresets.blue);
  const [view, setView] = useState<'month' | 'year'>('month');
  
  return (
    <div className="themed-calendar-app">
      <h1>Themed Calendar App</h1>
      
      <ThemeSelector onSelectTheme={setCurrentTheme} />
      
      <div className="view-toggle" style={{ margin: '1rem 0' }}>
        <button onClick={() => setView('month')} disabled={view === 'month'}>
          Month View
        </button>
        <button onClick={() => setView('year')} disabled={view === 'year'}>
          Year View
        </button>
      </div>
      
      <CalendarContainer theme={currentTheme}>
        {view === 'month' ? (
          <Calendar />
        ) : (
          <YearCalendar />
        )}
      </CalendarContainer>
    </div>
  );
};

export default ThemedCalendarApp;
```
