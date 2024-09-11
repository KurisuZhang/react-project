import { useState } from 'react';
import LeaveTabs from './leaveTabs.jsx';

const LeaveCancel = () => {
  const [showMessage, setShowMessage] = useState(true);

  const handleHideMessage = () => setShowMessage(false);

  const ApplyDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      {/* Message Box */}
      {showMessage && (
        <div className="relative flex items-center justify-between rounded-md border border-yellow-100 bg-yellow-50 p-4">
          <p className="text-sm text-gray-700">
            Leave Cancel enables you to apply for cancellation of approved leave
            applications. Please select a leave type to get started.
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
          Applying for Leave Cancel
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
          You have not applied for any leave yet, as per our record.
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

export default LeaveCancel;
