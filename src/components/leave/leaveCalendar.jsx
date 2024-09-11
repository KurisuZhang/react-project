import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import ComponentNav from '../componentNav.jsx';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

const LeaveCalendar = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const localizer = momentLocalizer(moment);

  const MyArrowComponent = () => (
    <div className="mx-auto flex space-x-4 p-4">
      {/* Left Side: Large Calendar with Filter */}
      <div className="w-3/4 rounded-lg bg-white p-4 shadow-md">
        {/* Filter - Dropdown placed above the label */}
        <div className="mb-4 flex flex-col items-start space-y-2">
          <select
            className="rounded border border-gray-300 p-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Me</option>
            <option value="all">All Employees</option>
          </select>
          <label className="text-gray-600">Filter Type</label>

          {/* Large Calendar */}
          <Calendar
            localizer={localizer}
            style={{ height: 800, width: '100%' }}
          />
        </div>
      </div>

      {/* Right Side: Search and Leave Transactions */}
      <div className="w-1/3 space-y-4">
        {/* Search */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search Employee"
              className="flex-grow rounded border border-gray-300 p-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="rounded bg-blue-500 p-2 text-white">
              <FontAwesomeIcon icon={faSortAmountDown} />
            </button>
          </div>
        </div>

        {/* Leave Transactions Card */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-2 text-lg font-semibold">Leave Transactions (0)</h2>
          {/* Table */}
          <table className="mt-4 w-full border-collapse text-left">
            <thead>
              <tr className="border-t bg-blue-50">
                <th className="border-b-2 p-2">Employee</th>
                <th className="border-b-2 p-2">Number of days</th>
                <th className="border-b-2 p-2">From-To</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="flex items-center justify-center py-10">
            <img
              src="/leave_calendar.png"
              alt="No Employees"
              className="w-30 h-30"
            />
          </div>
          <p className="text-center text-gray-600">No Employees are on leave</p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <ComponentNav title="Leave Calendar" navComponent={MyArrowComponent} />
    </main>
  );
};

export default LeaveCalendar;
