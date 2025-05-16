import { AttendanceStat, AttendanceStatus, Holidays } from './types';

export const defaultAttendanceStats: AttendanceStat[] = [
  {
    color: "#00DAA7",
    name: "presents",
    total: 14,
  },
  {
    color: "#FF6969",
    name: "absents",
    total: 3,
  },
  {
    color: "#FF9F68",
    name: "leaves",
    total: 1,
  },
  {
    color: "#667797",
    name: "Public Holidays",
    total: 1,
  },
  {
    color: "#9B9B9B",
    name: "Day Off",
    total: 4,
  },
];

export const defaultAttendanceData: AttendanceStatus[] = [
  { date: "2024-05-10", status: "absent" },
  { date: "2024-05-15", status: "leave" },
  { date: "2024-05-22", status: "absent" },
  { date: "2024-06-05", status: "absent" },
  { date: "2024-06-12", status: "leave" },
  { date: "2024-06-19", status: "absent" },
  { date: "2024-07-03", status: "absent" },
  { date: "2024-07-10", status: "leave" },
  { date: "2024-07-17", status: "absent" },
];

export const defaultHolidays: Holidays = {
  "2024-05-01": "Labor Day",
  "2024-07-04": "Independence Day",
  "2024-12-25": "Christmas",
  "2025-01-01": "New Year",
};
