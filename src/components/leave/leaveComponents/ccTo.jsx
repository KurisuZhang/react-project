import { XCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const CcTo = ({
  ccDropdownOpen,
  setCcDropdownOpen,
  selectedStaff,
  searchTerm,
  setSearchTerm,
  filteredStaff,
  handleStaffSelect,
}) => {
  return (
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

CcTo.propTypes = {
  ccDropdownOpen: PropTypes.bool.isRequired,
  setCcDropdownOpen: PropTypes.func.isRequired,
  selectedStaff: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  filteredStaff: PropTypes.array.isRequired,
  handleStaffSelect: PropTypes.func.isRequired,
};

export default CcTo;
