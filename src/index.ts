import Calendar from './Calendar';
import YearCalendar from './YearCalendar';
import CalendarContainer from './CalendarContainer';
import { ThemeProvider, useTheme, ThemeContext } from './ThemeContext';
import { defaultAttendanceData, defaultHolidays, defaultAttendanceStats } from './defaultData';
import './styles.css';

// Export components
export { 
  Calendar, 
  YearCalendar,
  CalendarContainer,
  ThemeProvider,
  useTheme,
  ThemeContext,
  defaultAttendanceData,
  defaultHolidays,
  defaultAttendanceStats,
};
// Export types
export * from './types';

// Default export
export default CalendarContainer;
