import PropTypes from 'prop-types';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Session = ({
  sessionLabel,
  sessionValue,
  sessions,
  handleSelectChange,
}) => {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={sessionLabel}
        className="block text-base font-semibold leading-6 text-gray-500"
      >
        {sessionLabel === 'session1' ? 'Session 1' : 'Session 2'}
      </label>
      <Menu as="div" className="relative mt-2">
        <MenuButton className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-base font-medium text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none">
          {sessionValue || 'Select Session'}
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
                  onClick={() => handleSelectChange(sessionLabel, session)}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
  );
};

Session.propTypes = {
  sessionLabel: PropTypes.string.isRequired,
  sessionValue: PropTypes.string.isRequired,
  sessions: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default Session;
