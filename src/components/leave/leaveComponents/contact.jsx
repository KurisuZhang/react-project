import PropTypes from 'prop-types';

const Contact = ({ contactDetails, handleChange }) => {
  return (
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
          value={contactDetails}
          onChange={handleChange}
          className="placeholder:text-gray-350 block w-1/2 rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
          required
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  contactDetails: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Contact;
