import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { ViewToggleProps } from './types';

const ViewToggle: React.FC<ViewToggleProps> = ({ view, setView }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="calendar-view-toggle" onClick={() => setDropdown(!dropdown)}>
      <div className="flex items-center gap-2">
        <span className="capitalize">{view}</span>
        <IoIosArrowDown className="text-2xl" />
      </div>
      <div
        className={`calendar-view-toggle-dropdown ${dropdown ? 'block' : 'hidden'}`}
      >
        {view === 'month' && (
          <p
            className="calendar-view-toggle-option"
            onClick={() => setView('year')}
          >
            Year
          </p>
        )}
        {view === 'year' && (
          <p
            className="calendar-view-toggle-option"
            onClick={() => setView('month')}
          >
            Month
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewToggle;
