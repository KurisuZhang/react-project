import { useState } from 'react';
import {
  PlusCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  XCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import LeaveTabs from './leaveTabs.jsx';

const CompOffGrant = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    session1: 'Session 1',
    session2: 'Session 2',
    applyingTo: '',
    ccTo: '',
    days: '',
    contactDetails: '',
    reason: '',
    file: null,
  });

  const [ccDropdownOpen, setCcDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [applyingDropdownOpen, setApplyingDropdownOpen] = useState(false);
  const [selectedApplyingTo, setSelectedApplyingTo] = useState(null);

  const staffList = ['Shuai', 'Xi', 'Eileen', 'Jing', 'Zhen', 'Laurene'];
  const leaveTypes = ['Loss Of Pay', 'Comp - Off', 'Casual Leave'];
  const sessions = ['Session 1', 'Session 2'];

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

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleStaffSelect = (staff) => {
    if (selectedStaff.includes(staff)) {
      setSelectedStaff(selectedStaff.filter((item) => item !== staff));
    } else {
      setSelectedStaff([...selectedStaff, staff]);
    }
  };

  const filteredStaff = staffList.filter((staff) =>
    staff.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleApplyingToSelect = (staff) => {
    setSelectedApplyingTo(staff);
    setApplyingDropdownOpen(false);
  };

  const ApplyDesc = () => (
    <div className="bg-gray-20 relative left-[-20px] mx-auto w-full max-w-4xl justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full justify-center rounded-md bg-white p-6 shadow-lg"
      >
        {/* Message Box */}

        <div className="relative flex items-center justify-between rounded-md border border-yellow-100 bg-yellow-50 p-4">
          <p className="text-sm text-gray-700">
            Compensatory Off is additional leave granted as a compensation for
            working overtime or on an off day.
          </p>
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
          >
            Hide
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-10">
          <h3 className="col-span-full text-lg font-medium leading-7 text-gray-600">
            Applying for Comp. Off Grant
          </h3>
        </div>

        <div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Leave Type */}
            <div className="sm:col-span-7">
              <label
                htmlFor="leaveType"
                className="block text-base font-semibold leading-6 text-gray-500"
              >
                Leave type
              </label>
              <Menu as="div" className="relative mt-2">
                <MenuButton className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-base font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none">
                  {formData.leaveType || 'Select type'}
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
                <MenuItems className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  {leaveTypes.map((type, index) => (
                    <MenuItem key={index}>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => handleSelectChange('leaveType', type)}
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } block w-full px-4 py-2 text-left text-sm`}
                        >
                          {type}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>

            {/* From Date */}
            <div className="sm:col-span-3">
              <label
                htmlFor="fromDate"
                className="block text-base font-semibold leading-6 text-gray-500"
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
                  onBlur={(e) => !formData.fromDate && (e.target.type = 'text')}
                  placeholder="Select date"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Session 1 */}
            <div className="sm:col-span-3">
              <label
                htmlFor="session1"
                className="block text-base font-semibold leading-6 text-gray-500"
              >
                Session
              </label>
              <Menu as="div" className="relative mt-2">
                <MenuButton className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-base font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none">
                  {formData.session1 || 'Select Session'}
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
                <MenuItems className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  {sessions.map((session, index) => (
                    <MenuItem key={index}>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() =>
                            handleSelectChange('session1', session)
                          }
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } block w-full px-4 py-2 text-left text-sm`}
                        >
                          {session}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>

            <div className="relative sm:col-span-3">
              <label
                htmlFor="toDate"
                className="block text-base font-semibold leading-6 text-gray-500"
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
                  onBlur={(e) => !formData.toDate && (e.target.type = 'text')}
                  placeholder="Select date"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  required
                />
              </div>
            </div>

            {/* Session 2 */}
            <div className="sm:col-span-3">
              <label
                htmlFor="session2"
                className="block text-base font-semibold leading-6 text-gray-500"
              >
                Session
              </label>
              <Menu as="div" className="relative mt-2">
                <MenuButton className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-base font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none">
                  {formData.session2 || 'Select Session'}
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
                <MenuItems className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  {sessions.map((session, index) => (
                    <MenuItem key={index}>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() =>
                            handleSelectChange('session2', session)
                          }
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } block w-full px-4 py-2 text-left text-sm`}
                        >
                          {session}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
            {/* Days */}
            <div className="sm:col-span-6">
              <label
                htmlFor="days"
                className="block text-base font-semibold leading-6 text-gray-500"
              >
                Days
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="days"
                  name="days"
                  rows="1"
                  value={formData.days}
                  onChange={handleChange}
                  className="placeholder:text-gray-350 block w-1/4 rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  required
                ></input>
              </div>
            </div>

            {/* Applying to */}
            <div className="relative sm:col-span-6">
              <label
                htmlFor="applyingTo"
                className="block flex items-center gap-x-2 text-base font-medium leading-6 text-gray-500"
              >
                <UserCircleIcon
                  className="h-12 w-12 text-gray-400"
                  aria-hidden="true"
                />
                Applying to
                <ChevronUpIcon
                  className={`ml-2 h-5 w-5 cursor-pointer text-gray-400 ${applyingDropdownOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  onClick={() => setApplyingDropdownOpen(!applyingDropdownOpen)}
                />
              </label>

              <div className="mt-2 flex items-center gap-x-3">
                {selectedApplyingTo ? (
                  <div className="flex items-center px-1">
                    {/* Placeholder for avatar */}
                    <div className="mr-1 h-10 w-10 rounded-full bg-gray-200" />
                    <span className="px-2 text-base text-gray-500">
                      {selectedApplyingTo}
                    </span>
                  </div>
                ) : (
                  <span className="text-base text-gray-500"></span>
                )}
              </div>

              {/* Dropdown menu */}
              {applyingDropdownOpen && (
                <div className="relative mt-2 w-full max-w-sm rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  {/* Search input */}
                  <div className="relative p-2">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* List of staff */}
                  <ul className="max-h-40 overflow-y-auto">
                    {filteredStaff.length > 0 ? (
                      filteredStaff.map((staff, index) => (
                        <li
                          key={index}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleApplyingToSelect(staff)}
                        >
                          <div className="flex items-center">
                            {/* Placeholder for avatar */}
                            <div className="mr-3 h-8 w-8 rounded-full bg-gray-200" />
                            <span className="text-sm text-gray-700">
                              {staff}
                            </span>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-sm text-gray-700">
                        No staff found
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* CC to */}
            <div className="relative sm:col-span-6">
              <label
                htmlFor="ccTo"
                className="block text-base font-semibold leading-6 text-gray-500"
              >
                CC to
              </label>

              <div className="mt-2 flex items-center gap-x-3">
                {/* Toggle icon */}
                {ccDropdownOpen ? (
                  <XCircleIcon
                    className="h-12 w-12 cursor-pointer text-blue-500"
                    aria-hidden="true"
                    onClick={() => setCcDropdownOpen(false)}
                  />
                ) : (
                  <PlusCircleIcon
                    className="h-12 w-12 cursor-pointer text-gray-400 hover:text-blue-500"
                    aria-hidden="true"
                    onClick={() => setCcDropdownOpen(true)}
                  />
                )}

                {/* Display selected staff */}
                <div className="flex flex-wrap items-center gap-3">
                  {selectedStaff.length > 0 ? (
                    selectedStaff.map((staff, index) => (
                      <div key={index} className="flex items-center gap-x-2">
                        {/* Placeholder for avatar */}
                        <div className="h-8 w-8 rounded-full bg-gray-200" />
                        <span className="text-base text-gray-500">{staff}</span>
                      </div>
                    ))
                  ) : (
                    <span className="text-base text-gray-500">
                      {ccDropdownOpen ? 'Adding ...' : 'Add'}
                    </span>
                  )}
                </div>
              </div>

              {/* Dropdown menu */}
              {ccDropdownOpen && (
                <div className="relative mt-2 w-full max-w-sm rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  {/* Search input */}
                  <div className="relative p-2">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* List of staff */}
                  <ul className="max-h-40 overflow-y-auto">
                    {filteredStaff.length > 0 ? (
                      filteredStaff.map((staff, index) => (
                        <li
                          key={index}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleStaffSelect(staff)}
                        >
                          <div className="flex items-center">
                            {/* Placeholder for avatar */}
                            <div className="mr-3 h-8 w-8 rounded-full bg-gray-200" />
                            <span className="text-sm text-gray-700">
                              {staff}
                            </span>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-sm text-gray-700">
                        No staff found
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="sm:col-span-6">
              <label
                htmlFor="contact"
                className="block text-base font-semibold leading-6 text-gray-500"
              >
                Contact details
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="contact"
                  name="contactDetails"
                  rows="1"
                  value={formData.contactDetails}
                  onChange={handleChange}
                  className="placeholder:text-gray-350 block w-1/2 rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  required
                ></input>
              </div>
            </div>

            {/* Reason */}
            <div className="sm:col-span-6">
              <label
                htmlFor="reason"
                className="block text-base font-semibold leading-6 text-gray-500"
              >
                Reason
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  rows="3"
                  value={formData.reason}
                  onChange={handleChange}
                  className="placeholder:text-gray-350 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                  placeholder="Enter a reason"
                  required
                ></input>
              </div>
            </div>

            {/* Attach File */}
            <div className="sm:col-span-6">
              <label
                htmlFor="file"
                className="block text-base font-semibold leading-6 text-gray-500"
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
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Submit
              </button>

              {/* Cancel Button */}
              <button
                type="button"
                className="rounded-md border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
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

export default CompOffGrant;
