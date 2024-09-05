import React from 'react';

const leaveBalancesComponent = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex items-center">
          <div className="mr-2 h-6 w-6 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"></div>
          <span className="text-xl font-bold">Leave Balances</span>
        </div>
        <div className="flex items-center">
          <button className="mr-2 rounded bg-blue-500 px-4 py-2 text-white">
            Apply
          </button>
          <select className="rounded border border-gray-300 px-2 py-1">
            <option value="2024">2024</option>
          </select>
        </div>
      </nav>

      {/* Body */}
      <div className="w-full flex-grow bg-gray-100 p-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Loss Of Pay</h3>
            <p className="text-sm">Granted: 0</p>
            <p className="mt-4 text-3xl font-bold">0</p>
            <p className="text-sm">Balance</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Comp - Off</h3>
            <p className="text-sm">Granted: 0</p>
            <p className="mt-4 text-3xl font-bold">0</p>
            <p className="text-sm">Balance</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-md bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Casual Leave</h3>
            <p className="text-sm">Granted: 12</p>
            <p className="mt-4 text-3xl font-bold">12</p>
            <p className="text-sm">Balance</p>
            <a href="#" className="mt-4 block text-sm text-blue-500">
              View Details
            </a>
            <div className="mt-2 h-1 rounded bg-gray-300">
              <div className="h-1 w-0 rounded bg-blue-500"></div>
            </div>
            <p className="mt-1 text-xs">0 of 12 Consumed</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex w-full items-center justify-between bg-white p-4 shadow-inner">
        <span>v6.3.0-prod-566</span>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default leaveBalancesComponent;
