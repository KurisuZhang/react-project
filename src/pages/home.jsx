import Sidebar from "../components/sidebar.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Main content */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
