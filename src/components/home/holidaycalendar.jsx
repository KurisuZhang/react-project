import { useEffect, useState } from 'react';

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

const HolidayCalendar = () => {
  const [holidays, setHolidays] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(2024);

  useEffect(() => {
    const fetchHolidays = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/US`,
        );
        const data = await response.json();

        const uniqueHolidays = data.filter(
          (holiday, index, self) =>
            index ===
            self.findIndex(
              (h) =>
                h.date === holiday.date && h.localName === holiday.localName,
            ),
        );

        const holidaysByMonth = uniqueHolidays.reduce((acc, holiday) => {
          const month = new Date(holiday.date).getMonth();
          if (!acc[month]) {
            acc[month] = [];
          }
          acc[month].push(holiday);
          return acc;
        }, {});

        setHolidays(holidaysByMonth);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching holidays:', error);
        setLoading(false);
      }
    };

    fetchHolidays();
  }, [selectedYear]);

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const getWeekday = (dateString) => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Holiday Calendar</h1>
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
            {holidays[index] && holidays[index].length > 0 ? (
              holidays[index].map((holiday, i) => (
                <div key={i} className="mb-1 text-xl text-gray-700">
                  <strong>{new Date(holiday.date).getDate()}</strong>
                  {'  '}
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
  );
};

export default HolidayCalendar;
