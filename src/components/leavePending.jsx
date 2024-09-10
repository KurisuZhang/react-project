import { useState } from 'react';
import ComponentNav from './ComponentNav';
import { useNavigate } from 'react-router-dom';

const PendingPage = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [activeCategory, setActiveCategory] = useState('Leave');

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

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'Leave') {
      navigate('/leave/leave-apply');
    } else if (category === 'Restricted Holiday') {
      navigate('/leave/restricted-holiday');
    } else if (category === 'Leave Cancel') {
      navigate('/leave/leave-cancel');
    } else if (category === 'Comp Off Grant') {
      navigate('/leave/comp-off-grant');
    }
  };

  return (
    <div className="bg-gray-20 flex min-h-screen w-full items-center justify-center">
      {/* Left Sidebar */}
      <div className="w-1/7 flex flex-col border-r p-6">
        <div className="mt-5">
          <ul>
            <li
              onClick={() => handleCategoryChange('Leave')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Leave'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Leave
            </li>
            <li
              onClick={() => handleCategoryChange('Restricted Holiday')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Restricted Holiday'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Restricted Holiday
            </li>
            <li
              onClick={() => handleCategoryChange('Leave Cancel')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Leave Cancel'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Leave Cancel
            </li>
            <li
              onClick={() => handleCategoryChange('Comp Off Grant')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Comp Off Grant'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Comp Off Grant
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-20 h-full w-full rounded-lg p-6">
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
      </div>
    </div>
  );
};

export default PendingPage;
