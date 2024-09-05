import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarItem = ({
  icon,
  text,
  onClick,
  isLink = false,
  to,
  suffixIcon,
  className = '',
}) => {
  if (isLink) {
    return (
      <Link
        to={to}
        className="mt-2 flex cursor-pointer items-center space-x-3 rounded-md p-2 hover:bg-gray-200"
      >
        {icon && <div className="h-5 w-5">{icon}</div>}
        <span className={className}>{text}</span>
        {suffixIcon && <div className="h-5 w-5">{suffixIcon}</div>}
      </Link>
    );
  }

  return (
    <div
      className="mt-2 flex cursor-pointer items-center justify-between space-x-3 rounded-md p-2 hover:bg-gray-200"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {icon && <div className="h-5 w-5">{icon}</div>}
        <span className={className}>{text}</span>
      </div>
      {suffixIcon && <div className="h-5 w-5">{suffixIcon}</div>}
    </div>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  to: PropTypes.string,
  suffixIcon: PropTypes.node,
  className: PropTypes.string,
};

export default SidebarItem;
