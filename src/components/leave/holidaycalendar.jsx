import { useEffect, useState } from 'react';
import ComponentNav from '../componentNav.jsx';

const abbreviatedMonths = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const getWeekday = (dateString) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(dateString);
  return days[date.getDay()];
};

const uniqueHolidaysFilter = (holiday, index, self) =>
  index ===
  self.findIndex(
    (h) => h.date === holiday.date && h.localName === holiday.localName,
  );

const HolidayCalendar = () => {
  const [holidays, setHolidays] = useState({});
  const [selectedYear, setSelectedYear] = useState(2024);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/US`,
        );
        const data = await response.json();

        const holidaysByMonth = data
          .filter(uniqueHolidaysFilter)
          .reduce((acc, holiday) => {
            const month = new Date(holiday.date).getMonth();
            acc[month] = acc[month] ? [...acc[month], holiday] : [holiday];
            return acc;
          }, {});

        setHolidays(holidaysByMonth);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, [selectedYear]);

  const handleYearChange = (e) => setSelectedYear(parseInt(e.target.value));

  if (loading) return <div>Loading...</div>;

  const MyArrowComponent = () => (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full">
        {' '}
        {/* Centering block with a max width */}
        <div className="mb-4 flex items-center justify-between">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="w-35 rounded border border-gray-300 p-2"
          >
            {Array.from({ length: 11 }, (_, i) => 2024 - 5 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        {/* Holiday Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {abbreviatedMonths.map((month, index) => (
            <div
              key={index}
              className="min-h-[250px] rounded-lg bg-white p-6 shadow-md"
            >
              <h3 className="mb-4 text-xl font-bold text-gray-700">
                {month} {selectedYear}
              </h3>
              {holidays[index]?.length ? (
                holidays[index].map((holiday, i) => (
                  <div key={i} className="mb-1 text-xl text-gray-700">
                    <strong>{new Date(holiday.date).getDate()}</strong>{' '}
                    <span className="text-base">{holiday.localName}</span>
                    <br />
                    <span className="text-sm text-gray-400">
                      {getWeekday(holiday.date)}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-base text-gray-500">No Holidays</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex-1 bg-gray-100 p-6">
      {/* Header */}
      <ComponentNav title="Leave Balances" navComponent={MyArrowComponent} />
    </main>
  );
};

export default HolidayCalendar;
