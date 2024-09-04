import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import HomeComponent from "./components/homeComponent.jsx";
import EngageComponent from "./components/engageComponent.jsx";
import ProfileCompoent from "./components/profileCompoent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeComponent />} />
            <Route path="engage" element={<EngageComponent />} />
            <Route path="profile" element={<ProfileCompoent />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
