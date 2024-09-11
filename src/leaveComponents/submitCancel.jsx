import PropTypes from 'prop-types';

const SubmitCancel = ({ onSubmit, onCancel }) => {
  return (
    <div className="mt-6 flex justify-center gap-x-6 sm:col-span-6">
      {/* Submit Button */}
      <button
        type="submit"
        onClick={onSubmit}
        className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Submit
      </button>
      {/* Cancel Button */}
      <button
        type="button"
        onClick={onCancel}
        className="rounded-md border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Cancel
      </button>
    </div>
  );
};

SubmitCancel.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default SubmitCancel;
