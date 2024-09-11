import PropTypes from 'prop-types';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const LeaveType = ({ leaveType, leaveTypes, handleSelectChange }) => {
  return (
    <div className="sm:col-span-7">
      <label
        htmlFor="leaveType"
        className="block text-base font-semibold leading-6 text-gray-500"
      >
        Leave type
      </label>
      <Menu as="div" className="relative mt-2">
        <MenuButton className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-base font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none">
          {leaveType || 'Select type'}
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
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
  );
};

LeaveType.propTypes = {
  leaveType: PropTypes.string.isRequired,
  leaveTypes: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default LeaveType;
