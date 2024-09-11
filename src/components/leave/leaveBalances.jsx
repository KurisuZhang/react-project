import ComponentNav from '../componentNav.jsx';

function LeaveBalances() {
  const MyArrowComponent = () => (
    <div className="flex h-full">
      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Button Row */}
        <div className="mb-6 flex items-center justify-end space-x-2">
          <button className="rounded bg-blue-600 px-6 py-2 text-white">
            Apply
          </button>
          <button className="rounded bg-blue-100 px-6 py-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8"
              viewBox="0 0 384 512"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>
          <select className="rounded border border-gray-300 px-4 py-2">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        {/* Leave Balance Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative rounded-lg bg-white p-6 shadow">
            <h2 className="absolute top-2 text-xl font-semibold text-gray-700">
              Loss Of Pay
            </h2>
            <p className="absolute right-2 top-2 text-gray-500">Granted: 0</p>
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-5xl font-bold text-gray-800">0</p>
              <p className="text-gray-600">Balance</p>
            </div>
          </div>
          <div className="relative rounded-lg bg-white p-6 shadow">
            <h2 className="absolute top-2 text-xl font-semibold text-gray-700">
              Comp-Off
            </h2>
            <p className="absolute right-2 top-2 text-gray-500">Granted: 0</p>
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-5xl font-bold text-gray-800">0</p>
              <p className="text-gray-600">Balance</p>
            </div>
          </div>
          <div className="relative rounded-lg bg-white p-6 shadow">
            <h2 className="absolute top-2 text-xl font-semibold text-gray-700">
              Casual Leave
            </h2>
            <p className="absolute right-2 top-2 text-gray-500">Granted: 12</p>
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-5xl font-bold text-gray-800">12</p>
              <p className="text-gray-600">Balance</p>
              <a href="#" className="mt-4 inline-block text-blue-600">
                View Details
              </a>
              <p className="mt-2 text-sm text-gray-500">0 of 12 Consumed</p>
            </div>
          </div>
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
}

export default LeaveBalances;
