import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="mx-10 flex items-center justify-between">
        <div className="flex items-center">
          <Link to={"/"}>
            <img src="/centillionz.jpg" alt="Company Logo" className="h-8" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LoginNav;
