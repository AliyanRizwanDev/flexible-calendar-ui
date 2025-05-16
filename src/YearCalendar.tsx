import React, { useMemo, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { YearCalendarProps, MonthDays } from './types';
import { useTheme } from './ThemeContext';
import ViewToggle from './ViewToggle';
import './styles.css';

const YearCalendar: React.FC<YearCalendarProps> = ({
  attendance = [],
  holidays = {},
  initialYear,
  onDateClick,
}) => {
  const [currentYear, setCurrentYear] = useState<Dayjs>(
    initialYear ? dayjs().year(initialYear) : dayjs()
  );
  const today = dayjs();
  const theme = useTheme();

  const getMonthDays = (month: number) => {
    const daysInMonth = dayjs(
      `${currentYear.year()}-${month + 1}-01`
    ).daysInMonth();
    return Array.from({ length: daysInMonth }, (_, i) =>
      dayjs(`${currentYear.year()}-${month + 1}-${i + 1}`)
    );
  };

  const calendarData = useMemo(() => {
    return Array.from({ length: 12 }, (_, month) => {
      const days = getMonthDays(month);
      return {
        month,
        days,
      };
    });
  }, [currentYear]);

  const renderCalendar = () => {
    return calendarData.map(({ month, days }: MonthDays) => {
      const totalDays = days.length;

      return (
        <tr key={month}>
          <td className="border">{month + 1}</td>
          <td className="year-calendar-month-cell">
            {dayjs(`${currentYear.year()}-${month + 1}-01`).format('MMM-YYYY')}
          </td>
          {Array.from({ length: 31 }, (_, index) => {
            if (index >= totalDays) {
              return (
                <td
                  key={`empty-${month}-${index}`}
                  className="year-day-inactive"
                >
                  -
                </td>
              );
            }
            const day = days[index];
            const formattedDate = day.format('YYYY-MM-DD');
            const statusObj = attendance.find((s) => s.date === formattedDate);
            const isSunday = day.day() === 0;
            const isFutureDate = day.isAfter(today, 'day');
            const holidayName = holidays[formattedDate];

            const status = holidayName
              ? 'holiday'
              : statusObj
              ? statusObj.status
              : isSunday
              ? 'day-off'
              : !isFutureDate
              ? 'present'
              : 'inactive';

            const handleClick = () => {
              if (onDateClick) {
                onDateClick(formattedDate, status);
              }
            };

            return (
              <td
                key={formattedDate}
                className={`year-day-${status}`}
                onClick={handleClick}
                style={{ cursor: onDateClick ? 'pointer' : 'default' }}
              >
                {status === 'day-off'
                  ? 'D'
                  : status === 'holiday'
                  ? 'H'
                  : status !== 'inactive'
                  ? status.charAt(0).toUpperCase()
                  : '-'}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-title-container">
          <button
            className="calendar-control-button"
            onClick={() => setCurrentYear(currentYear.subtract(1, 'year'))}
          >
            <SlArrowLeft />
          </button>
          <h2 className="calendar-title">{currentYear.format('YYYY')}</h2>
          <button
            className="calendar-control-button"
            onClick={() => setCurrentYear(currentYear.add(1, 'year'))}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
      <div className="year-calendar-container">
        <table className="year-calendar-table">
          <thead className="year-calendar-header">
            <tr>
              <th rowSpan={2}>No#</th>
              <th rowSpan={2}>Month-Year</th>
              <th colSpan={31}>Date</th>
            </tr>
            <tr>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i}>{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody className="year-calendar-body">{renderCalendar()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default YearCalendar;
