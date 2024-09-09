import { useState } from 'react';
import {
  UserCircleIcon,
  PlusCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';

const LeaveApply = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    session1: 'Session 1',
    session2: 'Session 2',
    applyingTo: '',
    ccTo: '',
    contactDetails: '',
    reason: '',
    file: null,
  });

  const [activeTab, setActiveTab] = useState('apply');
  const [showMessage, setShowMessage] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const staffList = ['Manager', 'HR', 'Team Lead', 'Supervisor'];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleHideMessage = () => {
    setShowMessage(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectStaff = (staff) => {
    setFormData({ ...formData, applyingTo: staff });
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-gray-20 flex min-h-screen w-full items-center justify-center">
      <div className="bg-gray-20 w-full max-w-4xl rounded-lg p-6">
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

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-md bg-white p-6 shadow-lg"
        >
          {/* Message Box */}
          {showMessage && (
            <div className="relative flex items-center justify-between rounded-md border border-yellow-100 bg-yellow-50 p-4">
              <p className="text-sm text-gray-700">
                Leave is earned by an employee and granted by the employer to
                take time off work. The employee is free to avail this leave in
                accordance with the company policy.
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

          {activeTab === 'apply' && (
            <div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-10">
                <h2 className="col-span-full text-xl font-semibold leading-7 text-gray-700">
                  Applying for Leave
                </h2>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-7">
                  <label
                    htmlFor="leaveType"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    Leave type
                  </label>
                  <div className="mt-2">
                    <select
                      id="leaveType"
                      name="leaveType"
                      value={formData.leaveType}
                      onChange={handleChange}
                      className={`block w-full rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6 ${
                        formData.leaveType === ''
                          ? 'text-gray-400'
                          : 'text-gray-900'
                      }`}
                      required
                    >
                      <option value="" disabled hidden>
                        Select type
                      </option>
                      <option value="lossofpay">Loss Of Pay</option>
                      <option value="comp-off">Comp - Off</option>
                      <option value="casualleave">Casual Leave</option>
                    </select>
                  </div>
                </div>

                {/* From Date and Session 1 */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="fromDate"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    From date
                  </label>
                  <div className="relative mt-2">
                    <input
                      type={formData.fromDate ? 'date' : 'text'}
                      id="fromDate"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) =>
                        !formData.fromDate && (e.target.type = 'text')
                      }
                      placeholder="Select date"
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="session1"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    Session
                  </label>
                  <div className="mt-2">
                    <select
                      id="session1"
                      name="session1"
                      value={formData.session1}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                    >
                      <option value="Session 1">Session 1</option>
                      <option value="Half Day">Half Day</option>
                    </select>
                  </div>
                </div>

                {/* To Date and Session 2 */}
                <div className="relative sm:col-span-3">
                  <label
                    htmlFor="toDate"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    To date
                  </label>
                  <div className="relative mt-2">
                    <input
                      type={formData.toDate ? 'date' : 'text'}
                      id="toDate"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) =>
                        !formData.toDate && (e.target.type = 'text')
                      }
                      placeholder="Select date"
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="session2"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    Session
                  </label>
                  <div className="mt-2">
                    <select
                      id="session2"
                      name="session2"
                      value={formData.session2}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                    >
                      <option value="Session 2">Session 2</option>
                      <option value="Half Day">Half Day</option>
                    </select>
                  </div>
                </div>

                {/* Applying To */}
                <div className="relative sm:col-span-6">
                  <label
                    htmlFor="applyingTo"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    <div className="flex items-center gap-x-3">
                      <UserCircleIcon
                        className="h-12 w-12 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="flex items-center">
                        <span>Applying to</span>
                        {/* Dropdown Menu */}
                        <button
                          type="button"
                          onClick={handleDropdownToggle}
                          className="ml-auto flex items-center px-2 focus:outline-none"
                        >
                          {isDropdownOpen ? (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>
                  </label>

                  {isDropdownOpen && (
                    <ul className="absolute left-0 z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      {staffList.map((staff, index) => (
                        <li
                          key={index}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => handleSelectStaff(staff)}
                        >
                          {staff}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Display Selected Staff */}
                  <div className="mt-2">
                    <input
                      type="text"
                      id="applyingTo"
                      name="applyingTo"
                      value={formData.applyingTo}
                      readOnly
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                      placeholder="Select staff"
                    />
                  </div>
                </div>

                {/* CC To */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="ccTo"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    CC to
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <PlusCircleIcon
                      className="h-12 w-12 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="text-base text-gray-500">Add</span>
                  </div>
                </div>

                {/* Contact */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="contact"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    Contact details
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="contact"
                      name="contactDetails"
                      rows="1"
                      value={formData.contactDetails}
                      onChange={handleChange}
                      className="placeholder:text-gray-350 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Reason */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="reason"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    Reason
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="reason"
                      name="reason"
                      rows="3"
                      value={formData.reason}
                      onChange={handleChange}
                      className="placeholder:text-gray-350 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                      placeholder="Enter a reason"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Attach File */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="file"
                    className="block text-base font-medium leading-6 text-gray-500"
                  >
                    Attach File
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file"
                            name="file"
                            type="file"
                            onChange={handleChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="mt-6 flex justify-center gap-x-6 sm:col-span-6">
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Submit
                  </button>

                  {/* Cancel Button */}
                  <button
                    type="button"
                    className="rounded-md border border-blue-600 bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LeaveApply;
