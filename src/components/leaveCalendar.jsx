import { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ComponentNav from './ComponentNav';

const LeaveCalendar = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <ComponentNav title="Leave Calendar" />
      <div className="container mx-2 flex space-x-2 p-2">
        {/* Left Side: Calendar */}
        <div className="w-2/3 rounded-lg bg-white p-4 shadow-md">
          <Calendar
            locale="en-GB"
            style={{ width: '200%', maxWidth: '1000px', margin: '0 auto' }}
          />
        </div>

        {/* Right Side: Search and Leave Transactions */}
        <div className="w-1/3 space-y-4">
          {/* Filter and Search */}
          <div className="flex flex-col space-y-4 rounded-lg bg-white p-4 shadow-md">
            <div className="flex items-center space-x-2">
              <select
                className="rounded border border-gray-300 p-2"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">Select Filter</option>
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
              </select>
              <input
                type="text"
                placeholder="Search Employee"
                className="flex-grow rounded border border-gray-300 p-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="rounded bg-blue-500 p-2 text-white">
                sort
              </button>
            </div>

            {/* Leave Transactions Card */}
            <div className="rounded-lg bg-white p-4 shadow-md">
              <h2 className="mb-2 text-lg font-semibold">
                Leave Transactions (0)
              </h2>
              <table className="min-w-full border border-gray-300 bg-white">
                <thead>
                  <tr>
                    <th className="border-b px-4 py-2 text-left">Employees</th>
                    <th className="border-b px-4 py-2 text-left">
                      Number of Days
                    </th>
                    <th className="border-b px-4 py-2 text-left">From-To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="3" className="py-4 text-center">
                      <img
                        src="/leaveCalendar.png"
                        alt="No Employees"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-gray-600">
                        No Employees are on leave
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaveCalendar;
