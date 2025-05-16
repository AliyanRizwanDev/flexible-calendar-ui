# Step-by-Step Guide to Using Flexible Calendar UI

This guide will walk you through how to use the Flexible Calendar UI package in your React application and how to customize it to suit your needs.

## 1. Installation

First, install the package via npm or yarn:

```bash
npm install flexible-calendar-ui
# or
yarn add flexible-calendar-ui
```

## 2. Basic Usage

Here's how to add a simple calendar to your React application:

```jsx
import React from 'react';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css'; // Don't forget to import the styles!

function App() {
  return (
    <div className="App">
      <h1>My Calendar</h1>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 3. Adding Custom Attendance Data

You can specify attendance records by providing an array of attendance objects:

```jsx
import React from 'react';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  // Your attendance data
  const attendanceData = [
    { date: "2025-05-01", status: "present" },
    { date: "2025-05-02", status: "present" },
    { date: "2025-05-03", status: "absent" },
    { date: "2025-05-04", status: "leave" },
    { date: "2025-05-10", status: "absent" },
  ];

  return (
    <div className="App">
      <h1>Attendance Calendar</h1>
      <CalendarContainer>
        <Calendar attendance={attendanceData} />
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 4. Adding Holidays

Holidays can be specified as an object mapping dates to holiday names:

```jsx
import React from 'react';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  // Your holiday data
  const holidayData = {
    "2025-05-01": "Labor Day",
    "2025-12-25": "Christmas",
    "2025-01-01": "New Year's Day",
  };

  return (
    <div className="App">
      <h1>Holiday Calendar</h1>
      <CalendarContainer>
        <Calendar holidays={holidayData} />
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 5. Customizing the Theme

You can customize the look and feel of the calendar by providing a theme object:

```jsx
import React from 'react';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  // Custom theme
  const customTheme = {
    primaryColor: '#3f51b5',      // Main accent color
    secondaryColor: '#2196f3',    // Secondary accent color
    textColor: '#212121',         // Default text color
    presentColor: '#4caf50',      // Color for present status
    absentColor: '#f44336',       // Color for absent status
    leaveColor: '#ff9800',        // Color for leave status
    holidayColor: '#9c27b0',      // Color for holidays
    dayOffColor: '#607d8b',       // Color for days off
    inactiveColor: '#f5f5f5',     // Color for inactive dates
    headerBgColor: '#0070bf',     // Header background color
    borderRadius: '8px',          // Border radius for UI elements
    headerTextColor: '#ffffff',   // Header text color
  };

  return (
    <div className="App">
      <h1>Custom Theme Calendar</h1>
      <CalendarContainer theme={customTheme}>
        <Calendar />
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 6. Using Year View

To display a year calendar instead of a month view:

```jsx
import React from 'react';
import { CalendarContainer, YearCalendar } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Year Calendar</h1>
      <CalendarContainer>
        <YearCalendar initialYear={2025} />
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 7. Handling Date Clicks

You can add click handlers to respond when a user clicks on a date:

```jsx
import React from 'react';
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  const handleDateClick = (date, status) => {
    console.log(`Clicked on ${date} with status: ${status}`);
    // You can update state, open a modal, etc.
  };

  return (
    <div className="App">
      <h1>Interactive Calendar</h1>
      <CalendarContainer>
        <Calendar onDateClick={handleDateClick} />
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 8. Creating a Toggle Between Month and Year Views

You can implement a toggle to switch between month and year views:

```jsx
import React, { useState } from 'react';
import { CalendarContainer, Calendar, YearCalendar } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  const [view, setView] = useState('month');

  return (
    <div className="App">
      <h1>Calendar with View Toggle</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setView(view === 'month' ? 'year' : 'month')}>
          Switch to {view === 'month' ? 'Year' : 'Month'} View
        </button>
      </div>
      
      <CalendarContainer>
        {view === 'month' ? (
          <Calendar />
        ) : (
          <YearCalendar />
        )}
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 9. Advanced: Using Default Data with Your Own Data

You can combine the default data with your own custom data:

```jsx
import React from 'react';
import { 
  CalendarContainer, 
  Calendar, 
  defaultAttendanceData, 
  defaultHolidays 
} from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  // Your custom data
  const myAttendanceData = [
    { date: "2025-05-20", status: "absent" },
    { date: "2025-05-21", status: "leave" },
  ];
  
  const myHolidays = {
    "2025-05-15": "Company Anniversary",
  };
  
  // Combine default and custom data
  const combinedAttendance = [...defaultAttendanceData, ...myAttendanceData];
  const combinedHolidays = { ...defaultHolidays, ...myHolidays };

  return (
    <div className="App">
      <h1>Combined Calendar</h1>
      <CalendarContainer>
        <Calendar 
          attendance={combinedAttendance}
          holidays={combinedHolidays}
        />
      </CalendarContainer>
    </div>
  );
}

export default App;
```

## 10. Troubleshooting

### Common Issues:

1. **Styles not loading** - Make sure you've imported the CSS file:
   ```jsx
   import 'flexible-calendar-ui/dist/styles.css';
   ```

2. **Dates not displaying correctly** - Ensure your date formats are in "YYYY-MM-DD" format

3. **Theme not applying** - Verify you're passing the theme object to the `CalendarContainer` component, not directly to the `Calendar`

## Need More Help?

Refer to the [GitHub repository](https://github.com/yourusername/flexible-calendar-ui) or open an issue if you encounter any problems.
