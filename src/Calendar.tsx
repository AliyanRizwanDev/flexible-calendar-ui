import React, { useState, useMemo } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { CalendarProps } from './types';
import { useTheme } from './ThemeContext';
import ViewToggle from './ViewToggle';
import './styles.css';

const Calendar: React.FC<CalendarProps> = ({
  attendance = [],
  holidays = {},
  initialDate,
  onDateClick,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(
    initialDate ? dayjs(initialDate) : dayjs()
  );
  const theme = useTheme();

  const daysInMonth = useMemo(() => {
    const startOfMonth = currentMonth.startOf('month').day(1);
    const endOfMonth = currentMonth.endOf('month').endOf('week');
    const days: Dayjs[] = [];
    let day = startOfMonth;

    while (day.isBefore(endOfMonth) || day.isSame(endOfMonth)) {
      days.push(day);
      day = day.add(1, 'day');
    }

    return days;
  }, [currentMonth]);

  const renderedDays = useMemo(() => {
    const today = dayjs();
    return daysInMonth.map((day) => {
      const formattedDate = day.format('YYYY-MM-DD');
      const isCurrentMonth = day.isSame(currentMonth, 'month');
      const isFutureDate = day.isAfter(today, 'day');
      const isSunday = day.day() === 6;
      const statusObj = attendance.find((s) => s.date === formattedDate);
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

      if (!isCurrentMonth) return <div key={formattedDate} className="invisible" />;

      const handleClick = () => {
        if (onDateClick) {
          onDateClick(formattedDate, status);
        }
      };

      return (
        <div
          key={formattedDate}
          className={`month-calendar-day day-${status}`}
          onClick={handleClick}
          style={{ cursor: onDateClick ? 'pointer' : 'default' }}
        >
          <span className="month-calendar-day-number">{day.format('D')}</span>
          <span
            className={`month-calendar-day-status ${
              status === 'inactive' ? 'hidden' : ''
            }`}
            style={{
              borderLeftColor:
                status === 'holiday'
                  ? theme.holidayColor
                  : status === 'day-off'
                  ? theme.dayOffColor
                  : status === 'present'
                  ? theme.presentColor
                  : status === 'absent'
                  ? theme.absentColor
                  : theme.inactiveColor
            }}
          >
            {status === 'holiday'
              ? holidayName
              : status === 'day-off'
              ? 'Day Off'
              : status !== 'inactive' && status}
          </span>
        </div>
      );
    });
  }, [daysInMonth, currentMonth, attendance, holidays, theme, onDateClick]);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-title-container">
          <button
            className="calendar-control-button"
            onClick={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}
          >
            <SlArrowLeft />
          </button>
          <h2 className="calendar-title">{currentMonth.format('MMMM YYYY')}</h2>
          <button
            className="calendar-control-button"
            onClick={() => setCurrentMonth(currentMonth.add(1, 'month'))}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>

      <div className="month-calendar-container">
        <div className="month-calendar-grid">
          <div className="month-calendar-header">
            {[
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ].map((day) => (
              <div key={day} className="month-calendar-day-name">
                {day}
              </div>
            ))}
          </div>
          <div className="month-calendar-days">{renderedDays}</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
