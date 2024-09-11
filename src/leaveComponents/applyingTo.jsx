import { UserCircleIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const ApplyingTo = ({
  applyingDropdownOpen,
  setApplyingDropdownOpen,
  selectedApplyingTo,
  searchTerm,
  setSearchTerm,
  filteredStaff,
  handleApplyingToSelect,
}) => {
  return (
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
          className={`ml-2 h-5 w-5 cursor-pointer text-gray-400 ${
            applyingDropdownOpen ? 'rotate-180' : ''
          }`}
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
                    <span className="text-sm text-gray-700">{staff}</span>
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
  );
};

// Define PropTypes for validation
ApplyingTo.propTypes = {
  applyingDropdownOpen: PropTypes.bool.isRequired,
  setApplyingDropdownOpen: PropTypes.func.isRequired,
  selectedApplyingTo: PropTypes.string,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  filteredStaff: PropTypes.array.isRequired,
  handleApplyingToSelect: PropTypes.func.isRequired,
};

export default ApplyingTo;
