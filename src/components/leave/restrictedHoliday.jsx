import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaveTabs from './leaveTabs.jsx';

const RestrictedHoliday = () => {
  const [activeTab, setActiveTab] = useState('apply');

  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(true);

  const handleHideMessage = () => setShowMessage(false);

  const ApplyDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      {/* Message Box */}
      {showMessage && (
        <div className="relative flex items-center justify-between rounded-md border border-yellow-100 bg-yellow-50 p-4">
          <p className="text-sm text-gray-700">
            Restricted Holidays (RH) are a set of holidays allocated by the
            company that are optional for the employee to utilize. The company
            sets a limit on the amount of holidays that can be used.
          </p>
          <button
            type="button"
            onClick={handleHideMessage}
            className="text-sm text-blue-600 hover:underline"
          >
            Hide
          </button>
        </div>
      )}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-10">
        <h3 className="col-span-full text-lg font-medium leading-7 text-gray-600">
          Applying for Restricted Holiday
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/leave_calendar.jpg"
          className="h-96 w-96 rounded-lg object-contain"
          alt="Leave Calendar"
        />
        {/* Text */}
        <p className="text-lg text-gray-500">
          You have no Restricted Holiday balance, as per our record.
        </p>
      </div>
    </div>
  );

  const PendingDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/leave_calendar.jpg"
          className="h-96 w-96 rounded-lg object-contain"
          alt="Leave Calendar"
        />
        {/* Text */}
        <p className="text-lg text-gray-500">
          It's empty here! Your pending leave requests will appear here.
        </p>
      </div>
    </div>
  );

  const HistoryDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/leave_calendar.jpg"
          className="h-96 w-96 rounded-lg object-contain"
          alt="Leave Calendar"
        />
        {/* Text */}
        <p className="text-lg text-gray-500">
          There are no past records of any leave transaction made by you
        </p>
      </div>
    </div>
  );

  return (
    <LeaveTabs
      ApplyDescComp={ApplyDesc}
      PendingDescComp={PendingDesc}
      HistoryDescComp={HistoryDesc}
    ></LeaveTabs>
  );
};

export default RestrictedHoliday;
