import { Dayjs } from 'dayjs';

export interface AttendanceStat {
  color: string;
  name: string;
  total: number;
}

export interface AttendanceStatus {
  date: string;
  status: 'present' | 'absent' | 'leave' | 'holiday' | 'day-off' | 'inactive';
}

export type Holidays = Record<string, string>;

export interface CalendarProps {
  attendance?: AttendanceStatus[];
  holidays?: Holidays;
  initialDate?: Date | string;
  onDateClick?: (date: string, status: string) => void;
}

export interface YearCalendarProps {
  attendance?: AttendanceStatus[];
  holidays?: Holidays;
  initialYear?: number;
  onDateClick?: (date: string, status: string) => void;
}

export interface ViewToggleProps {
  view: 'month' | 'year';
  setView: (view: 'month' | 'year') => void;
}

export interface MonthDays {
  month: number;
  days: Dayjs[];
}
