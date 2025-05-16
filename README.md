<div align="center">
  <h1>✨ Flexible Calendar UI ✨</h1>
  <p>A beautiful, highly customizable React calendar component library</p>
  
  [![npm version](https://img.shields.io/npm/v/flexible-calendar-ui.svg?style=flat-square)](https://www.npmjs.com/package/flexible-calendar-ui)
  [![npm downloads](https://img.shields.io/npm/dm/flexible-calendar-ui.svg?style=flat-square)](https://www.npmjs.com/package/flexible-calendar-ui)
  [![license](https://img.shields.io/npm/l/flexible-calendar-ui.svg?style=flat-square)](https://github.com/yourusername/flexible-calendar-ui/blob/main/LICENSE)
  
  <img src="https://i.ibb.co/K7NbTq2/Calendar-Demo.png" alt="Calendar Demo" width="600" />
</div>

## ✅ Features

- 📅 Monthly and yearly calendar views
- 🎨 Fully customizable themes and styles
- 🚀 Lightweight with minimal dependencies
- 📱 Responsive design works on all devices
- 📊 Support for attendance tracking and status indicators
- 🏖️ Holiday support built-in
- 📦 Easy to install and use

## Installation

```bash
npm install flexible-calendar-ui
# or
yarn add flexible-calendar-ui
```

## Usage

```jsx
import { Calendar, YearCalendar, CalendarContainer } from 'flexible-calendar-ui';
import 'flexible-calendar-ui/dist/styles.css';

// Use with default theme
const MyCalendar = () => {
  return (
    <CalendarContainer>
      <Calendar />
    </CalendarContainer>
  );
};

// Use with custom theme
const MyCustomCalendar = () => {
  const customTheme = {
    primaryColor: '#ff5722',
    secondaryColor: '#e91e63',
    textColor: '#333',
    presentColor: '#4caf50',
    absentColor: '#f44336',
    leaveColor: '#ff9800',
    holidayColor: '#9c27b0',
    dayOffColor: '#607d8b',
    inactiveColor: '#f5f5f5',
  };

  return (
    <CalendarContainer theme={customTheme}>
      <Calendar />
    </CalendarContainer>
  );
};
```

## Features

- Monthly and yearly calendar views
- Customizable styles and themes
- Support for marking attendance status (present, absent, leave, etc.)
- Holiday indicators
- Responsive design

## Customization

You can customize the calendar by providing a theme object to the `ThemeProvider` component.

```jsx
const customTheme = {
  primaryColor: '#3f51b5',      // Main accent color
  secondaryColor: '#2196f3',    // Secondary accent color
  textColor: '#212121',         // Default text color
  presentColor: '#4caf50',      // Color for present status
  absentColor: '#f44336',       // Color for absent status
  leaveColor: '#ff9800',        // Color for leave status
  holidayColor: '#9c27b0',      // Color for holidays
  dayOffColor: '#607d8b',       // Color for days off
  inactiveColor: '#f5f5f5',     // Color for inactive or future dates
  headerBgColor: '#0070bf',     // Header background color
  borderRadius: '8px',          // Border radius for UI elements
  headerTextColor: '#ffffff',   // Header text color
};
```

## Data Configuration

You can provide custom attendance data, holidays, and status information:

```jsx
import { Calendar, CalendarContainer } from 'flexible-calendar-ui';

const MyCalendar = () => {
  const attendanceData = [
    { date: "2024-05-25", status: "absent" },
    { date: "2024-05-15", status: "leave" },
    // Add more data as needed
  ];

  const holidayData = {
    "2024-05-01": "Labor Day",
    "2024-12-25": "Christmas",
    // Add more holidays as needed
  };

  return (
    <CalendarContainer>
      <Calendar attendance={attendanceData} holidays={holidayData} />
    </CalendarContainer>
  );
};
```

## API Reference

### CalendarContainer Props

| Prop | Type | Description |
|------|------|-------------|
| theme | Object | Custom theme object |
| children | ReactNode | Child components |

### Calendar Props

| Prop | Type | Description |
|------|------|-------------|
| attendance | Array | Array of attendance records |
| holidays | Object | Object mapping dates to holiday names |
| initialDate | Date/String | Initial date to display |
| onDateClick | Function | Callback when a date is clicked |

### YearCalendar Props

| Prop | Type | Description |
|------|------|-------------|
| attendance | Array | Array of attendance records |
| holidays | Object | Object mapping dates to holiday names |
| initialYear | Number | Initial year to display |
| onDateClick | Function | Callback when a date is clicked |

## For Contributors

### Local Development

1. Clone the repository
2. Install dependencies
   ```bash
   cd flexible-calendar-ui
   npm install
   ```
3. Start the development build
   ```bash
   npm run dev
   ```

### Building the Package

```bash
npm run build
```

This will create a `dist` folder with the compiled package.

### Publishing to NPM

1. Update the version in package.json
2. Make sure you're logged in to npm
   ```bash
   npm login
   ```
3. Build and publish
   ```bash
   npm publish
   ```

## License

MIT
