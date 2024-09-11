import PropTypes from 'prop-types';

const Reason = ({ reason, handleChange }) => {
  return (
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
          value={reason}
          onChange={handleChange}
          className="placeholder:text-gray-350 block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
          placeholder="Enter a reason"
          required
        />
      </div>
    </div>
  );
};

Reason.propTypes = {
  reason: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Reason;
