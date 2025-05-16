import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Calendar, YearCalendar, CalendarContainer } from './src';
import './src/styles.css';

const DemoApp = () => {
  const [view, setView] = useState('month');
  
  // Sample data
  const attendanceData = [
    { date: "2025-05-10", status: "absent" },
    { date: "2025-05-15", status: "leave" },
    { date: "2025-05-22", status: "absent" },
    { date: "2025-06-05", status: "absent" },
  ];

  const holidayData = {
    "2025-05-01": "Labor Day",
    "2025-12-25": "Christmas",
  };

  // Custom theme
  const customTheme = {
    primaryColor: '#3f51b5',
    secondaryColor: '#2196f3',
    presentColor: '#4caf50',
    absentColor: '#f44336',
    leaveColor: '#ff9800',
    borderRadius: '4px',
  };

  const handleDateClick = (date, status) => {
    console.log(`Clicked date: ${date}, status: ${status}`);
  };

  return (
    <div className="demo-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1>Flexible Calendar UI Demo</h1>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Default Theme - Month View</h2>
        <CalendarContainer>
          <Calendar 
            attendance={attendanceData} 
            holidays={holidayData}
            onDateClick={handleDateClick}
          />
        </CalendarContainer>
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h2>Custom Theme - Year View</h2>
        <CalendarContainer theme={customTheme}>
          <YearCalendar 
            attendance={attendanceData} 
            holidays={holidayData}
            initialYear={2025}
            onDateClick={handleDateClick}
          />
        </CalendarContainer>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2>Custom View Toggle</h2>
        <CalendarContainer>
          {view === 'month' ? (
            <Calendar 
              attendance={attendanceData} 
              holidays={holidayData}
            />
          ) : (
            <YearCalendar 
              attendance={attendanceData} 
              holidays={holidayData}
            />
          )}
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={() => setView(view === 'month' ? 'year' : 'month')}
              style={{ padding: '8px 16px', borderRadius: '4px', background: '#0070bf', color: 'white', border: 'none' }}
            >
              Switch to {view === 'month' ? 'Year' : 'Month'} View
            </button>
          </div>
        </CalendarContainer>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<DemoApp />);
