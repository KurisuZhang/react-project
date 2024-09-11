import PropTypes from 'prop-types';

const Date = ({ label, name, value, handleChange }) => {
  return (
    <div className="relative sm:col-span-3">
      <label
        htmlFor={name}
        className="block text-base font-semibold leading-6 text-gray-500"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <input
          type={value ? 'date' : 'text'}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => !value && (e.target.type = 'text')}
          placeholder={`Select ${label.toLowerCase()}`}
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
          required
        />
      </div>
    </div>
  );
};

Date.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Date;
