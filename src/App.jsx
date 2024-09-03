import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/*<Route index element={<DefaultDashboard />} />*/}
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
