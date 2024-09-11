import PropTypes from 'prop-types';

const Message = ({ message, showMessage, handleHideMessage }) => {
  if (!showMessage) return null;

  return (
    <div className="relative flex items-center justify-between rounded-md border border-yellow-100 bg-yellow-50 p-4">
      <p className="text-sm text-gray-700">{message}</p>
      <button
        type="button"
        onClick={handleHideMessage}
        className="text-sm text-blue-600 hover:underline"
      >
        Hide
      </button>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  showMessage: PropTypes.bool.isRequired,
  handleHideMessage: PropTypes.func.isRequired,
};

export default Message;
