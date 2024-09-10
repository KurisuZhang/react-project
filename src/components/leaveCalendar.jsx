import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; 
import ComponentNav from './ComponentNav';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

const LeaveCalendar = () => {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const localizer = momentLocalizer(moment);

    return (
        <main className="flex-1 bg-gray-100 p-6">
            <ComponentNav title="Leave Calendar" />
            <div className="mx-auto p-4 flex space-x-4">
                {/* Left Side: Large Calendar with Filter */}
                <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">
                    {/* Filter - Dropdown placed above the label */}
                    <div className="flex flex-col items-start space-y-2 mb-4">
                        <select
                            className="border border-gray-300 rounded p-2"
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
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Search Employee"
                                className="border border-gray-300 rounded p-2 flex-grow"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="p-2 bg-blue-500 text-white rounded">
                                <FontAwesomeIcon icon={faSortAmountDown} />
                            </button>
                        </div>
                    </div>

                    {/* Leave Transactions Card */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Leave Transactions (0)</h2>
                        {/* Table */}
                            <table className="w-full text-left border-collapse mt-4">
                                <thead>
                                    <tr  className="bg-blue-50 border-t">
                                        <th className="border-b-2 p-2">Employee</th>
                                        <th className="border-b-2 p-2">Number of days</th>
                                        <th className="border-b-2 p-2">From-To</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
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
        </main>
    );
};

export default LeaveCalendar;
