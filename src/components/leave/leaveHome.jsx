import ComponentNav from '../componentNav.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LeaveHome = () => {
  const [activeCategory, setActiveCategory] = useState('Leave');
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'Leave') {
      navigate('/leave/leave-apply');
    } else if (category === 'Restricted Holiday') {
      navigate('/leave/leave-apply/restricted-holiday');
    } else if (category === 'Leave Cancel') {
      navigate('/leave/leave-apply/leave-cancel');
    } else if (category === 'Comp Off Grant') {
      navigate('/leave/leave-apply/comp-off-grant');
    }
  };

  const MyArrowComponent = () => (
    <div className="bg-gray-20 flex min-h-screen w-full">
      {/* Left Sidebar */}
      <div className="flex w-72 flex-col border-r p-6">
        <div className="mt-[calc(20vh)]">
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
      <Outlet></Outlet>
    </div>
  );

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <ComponentNav title="Leave Apply" navComponent={MyArrowComponent} />
    </main>
  );
};

export default LeaveHome;
