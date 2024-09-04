import { Link } from "react-router-dom";

const LoginBody = () => {
  return (
    <div className="m-20 flex flex-col items-center justify-center md:flex-row">
      {/* Left Section */}
      <div className="w-full px-4 md:w-1/2">
        <form className="mt-6 rounded-lg bg-gray-100 p-8 shadow-md">
          <img src="/greytip.svg" alt="Logo" className={"mx-auto"} />
          <h2 className="my-5 text-center text-3xl font-bold text-gray-700">
            Hello there! 👋
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700">Login ID</label>
            <input
              type="text"
              placeholder="Employee No"
              className="mt-3 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="mt-3 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-right text-blue-600 hover:underline">
              Forgot password?
            </a>
            <button className="mt-5 rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
              <Link to={"/"}>Log in</Link>
            </button>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full p-4 text-center md:w-1/2">
        <p className="text-2lg font-semibold text-gray-900">Just Launched!</p>
        <p className="mt-2 text-4xl font-bold text-gray-900">
          <span className="text-purple-600">greytHR</span> Performance
          <br />
          Management Software (PMS)
        </p>
        <img
          src="https://readymadeui.com/login-image.webp"
          className="mx-auto mt-4 h-72"
          alt="Dining Experience"
        />

        <p className="mt-4 text-gray-700">
          Align, Assess & Appraise employee performance. Available as an add-on
          with all greytHR plans.
        </p>
      </div>
    </div>
  );
};

export default LoginBody;
