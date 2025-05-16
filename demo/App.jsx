import React, { useState } from 'react';
import { Calendar, YearCalendar, CalendarContainer } from 'flexible-calendar-ui';
import '../src/styles.css';
import './App.css';

function App() {
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

  // Custom themes
  const blueTheme = {
    primaryColor: '#1976d2',
    secondaryColor: '#90caf9',
    presentColor: '#4caf50',
    absentColor: '#f44336',
    borderRadius: '4px',
  };
  
  const darkTheme = {
    primaryColor: '#333',
    secondaryColor: '#555',
    textColor: '#eee',
    presentColor: '#81c784',
    absentColor: '#e57373',
    headerBgColor: '#222',
    headerTextColor: '#fff',
    borderRadius: '8px',
  };
  
  const pastelTheme = {
    primaryColor: '#9575cd',
    secondaryColor: '#b39ddb',
    presentColor: '#a5d6a7',
    absentColor: '#ef9a9a',
    leaveColor: '#ffe082',
    borderRadius: '12px',
  };

  const [activeTheme, setActiveTheme] = useState(blueTheme);
  const [activeTab, setActiveTab] = useState('default');

  const handleDateClick = (date, status) => {
    console.log(`Clicked date: ${date}, status: ${status}`);
  };

  return (
    <>
      <header className="demo-header">
        <div className="container">
          <h1>Flexible Calendar UI</h1>
          <p>A beautiful, highly customizable React calendar component library</p>
          <div className="demo-buttons">
            <a 
              href="https://github.com/AliyanRizwanDev/flexible-calendar-ui" 
              className="demo-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/flexible-calendar-ui" 
              className="demo-btn demo-btn-npm"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM Package
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <section className="demo-quick-start">
          <div className="row">
            <div className="col">
              <h2>Quick Start</h2>
              <div className="code-block">
                <pre><code>npm install flexible-calendar-ui</code></pre>
              </div>
              <div className="code-block">
                <pre><code>{`import { Calendar, CalendarContainer } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

function App() {
  return (
    <CalendarContainer>
      <Calendar />
    </CalendarContainer>
  );
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>Theme Gallery</h2>
          <div className="theme-tabs">
            <button 
              className={activeTab === 'default' ? 'active' : ''} 
              onClick={() => { setActiveTheme({}); setActiveTab('default'); }}
            >
              Default Theme
            </button>
            <button 
              className={activeTab === 'blue' ? 'active' : ''} 
              onClick={() => { setActiveTheme(blueTheme); setActiveTab('blue'); }}
            >
              Blue Theme
            </button>
            <button 
              className={activeTab === 'dark' ? 'active' : ''} 
              onClick={() => { setActiveTheme(darkTheme); setActiveTab('dark'); }}
            >
              Dark Theme
            </button>
            <button 
              className={activeTab === 'pastel' ? 'active' : ''} 
              onClick={() => { setActiveTheme(pastelTheme); setActiveTab('pastel'); }}
            >
              Pastel Theme
            </button>
          </div>
          <div className="calendar-display">
            <CalendarContainer theme={activeTheme}>
              {view === 'month' ? (
                <Calendar 
                  attendance={attendanceData} 
                  holidays={holidayData}
                  onDateClick={handleDateClick}
                />
              ) : (
                <YearCalendar 
                  attendance={attendanceData} 
                  holidays={holidayData}
                  initialYear={2025}
                  onDateClick={handleDateClick}
                />
              )}
            </CalendarContainer>
            <div className="view-toggle">
              <button 
                onClick={() => setView('month')}
                className={view === 'month' ? 'active' : ''}
              >
                Month View
              </button>
              <button 
                onClick={() => setView('year')}
                className={view === 'year' ? 'active' : ''}
              >
                Year View
              </button>
            </div>
          </div>
        </section>

        <section className="demo-features">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Multiple Views</h3>
              <p>Switch between monthly and yearly calendar views to suit your needs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Customizable Themes</h3>
              <p>Customize colors, borders, and styles to match your application's design.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Works beautifully on all devices from desktops to mobile phones.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Attendance Tracking</h3>
              <p>Built-in support for tracking attendance with different statuses.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏖️</div>
              <h3>Holiday Support</h3>
              <p>Mark holidays and special days with custom labels and styling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightweight</h3>
              <p>Optimized bundle size with minimal dependencies for fast loading.</p>
            </div>
          </div>
        </section>

        <section className="demo-cta">
          <h2>Ready to get started?</h2>
          <p>Try Flexible Calendar UI in your React project today!</p>
          <div className="demo-buttons">
            <a 
              href="https://github.com/AliyanRizwanDev/flexible-calendar-ui" 
              className="demo-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.npmjs.com/package/flexible-calendar-ui" 
              className="demo-btn demo-btn-npm"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM Package
            </a>
          </div>
        </section>
      </div>

      <footer className="demo-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Flexible Calendar UI. MIT Licensed.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
