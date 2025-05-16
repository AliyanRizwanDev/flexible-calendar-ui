# API Documentation

This document provides detailed information about the components and APIs available in the Flexible Calendar UI library.

## Components

### `CalendarContainer`

A container component that provides theming and layout for calendar components.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `object` | `defaultTheme` | Custom theme object for styling the calendar |
| `children` | `ReactNode` | - | Child components to render inside the container |

#### Example

```jsx
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';

const App = () => (
  <CalendarContainer
    theme={{
      primaryColor: '#3f51b5',
      textColor: '#212121',
      // ...other theme properties
    }}
  >
    <Calendar />
  </CalendarContainer>
);
```

### `Calendar`

Monthly calendar view component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `attendance` | `Array<AttendanceStatus>` | `[]` | Array of attendance records |
| `holidays` | `Record<string, string>` | `{}` | Object mapping dates to holiday names |
| `initialDate` | `Date \| string` | `new Date()` | Initial date to display |
| `onDateClick` | `(date: string, status: string) => void` | `undefined` | Callback when a date is clicked |

#### Example

```jsx
import { CalendarContainer, Calendar } from 'flexible-calendar-ui';

const App = () => {
  const handleDateClick = (date, status) => {
    console.log(`Clicked ${date} with status ${status}`);
  };
  
  return (
    <CalendarContainer>
      <Calendar
        attendance={[
          { date: "2024-05-01", status: "absent" },
          { date: "2024-05-15", status: "leave" }
        ]}
        holidays={{ "2024-05-25": "Memorial Day" }}
        onDateClick={handleDateClick}
      />
    </CalendarContainer>
  );
};
```

### `YearCalendar`

Yearly calendar view component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `attendance` | `Array<AttendanceStatus>` | `[]` | Array of attendance records |
| `holidays` | `Record<string, string>` | `{}` | Object mapping dates to holiday names |
| `initialYear` | `number` | `current year` | Initial year to display |
| `onDateClick` | `(date: string, status: string) => void` | `undefined` | Callback when a date is clicked |

#### Example

```jsx
import { CalendarContainer, YearCalendar } from 'flexible-calendar-ui';

const App = () => (
  <CalendarContainer>
    <YearCalendar
      initialYear={2024}
      attendance={[
        { date: "2024-05-01", status: "absent" },
        { date: "2024-06-15", status: "leave" }
      ]}
      holidays={{ "2024-12-25": "Christmas" }}
    />
  </CalendarContainer>
);
```

## Types

### `AttendanceStatus`

```typescript
interface AttendanceStatus {
  date: string;  // Format: "YYYY-MM-DD"
  status: 'present' | 'absent' | 'leave' | 'holiday' | 'day-off' | 'inactive';
}
```

### `Holidays`

```typescript
type Holidays = Record<string, string>;

// Example:
const holidays: Holidays = {
  "2024-01-01": "New Year's Day",
  "2024-12-25": "Christmas"
};
```

### `ThemeContextType`

```typescript
interface ThemeContextType {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  presentColor: string;
  absentColor: string;
  leaveColor: string;
  holidayColor: string;
  dayOffColor: string;
  inactiveColor: string;
  headerBgColor: string;
  borderRadius: string;
  headerTextColor: string;
}
```

## Hooks

### `useTheme`

A hook to access the current theme context.

#### Example

```jsx
import { useTheme } from 'flexible-calendar-ui';

const MyComponent = () => {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.textColor }}>
      Styled using theme
    </div>
  );
};
```

## Default Data

The library provides some default data structures that can be imported and used:

### `defaultAttendanceData`

A sample array of attendance records.

### `defaultHolidays`

A sample object of holiday dates and names.

### Example

```jsx
import { 
  CalendarContainer, 
  Calendar, 
  defaultAttendanceData, 
  defaultHolidays 
} from 'flexible-calendar-ui';

const App = () => (
  <CalendarContainer>
    <Calendar
      attendance={defaultAttendanceData}
      holidays={defaultHolidays}
    />
  </CalendarContainer>
);
```
