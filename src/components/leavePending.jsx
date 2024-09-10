import { useState } from 'react';
import ComponentNav from './ComponentNav';
import { useNavigate } from 'react-router-dom';

const PendingPage = () => {
  const [activeTab, setActiveTab] = useState('history');

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === 'pending') {
      navigate('/leave/leave-pending');
    } else if (tab === 'history') {
      navigate('/leave/leave-history');
    } else if (tab === 'apply') {
      navigate('/leave/leave-apply');
    }
  };

  return (
    <div className="bg-gray-20 flex min-h-screen w-full items-center justify-center">
      <div className="bg-gray-20 w-full h-full rounded-lg p-6">
        {/* Header */}
        <ComponentNav />

        {/* Button Group */}
        <div className="mb-6 flex justify-center" role="group">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`rounded-s-lg border border-gray-200 bg-white px-10 py-2 text-xl font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 ${
                activeTab === 'apply' ? 'text-grey bg-blue-200' : ''
              }`}
              onClick={() => handleTabChange('apply')}
            >
              Apply
            </button>
            <button
              type="button"
              className={`border-b border-t border-gray-200 bg-white px-10 py-2 text-xl font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 ${
                activeTab === 'pending' ? 'text-grey bg-blue-200' : ''
              }`}
              onClick={() => handleTabChange('pending')}
            >
              Pending
            </button>
            <button
              type="button"
              className={`rounded-e-lg border border-gray-200 bg-white px-10 py-2 text-xl font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 ${
                activeTab === 'history' ? 'text-grey bg-blue-200' : ''
              }`}
              onClick={() => handleTabChange('history')}
            >
              History
            </button>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-white mx-auto w-full max-w-5xl rounded-md justify-center p-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/leave_calendar.jpg"
              className="w-96 h-96 rounded-lg object-contain" 
              alt="Leave Calendar" 
            />
            {/* Text */}
            <p className="text-lg text-gray-500">
              It's empty here! Your pending leave requests will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingPage;
