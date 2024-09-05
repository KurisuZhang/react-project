import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import HomeComponent from './components/home/homeComponent.jsx';
import EngageComponent from './components/home/engageComponent.jsx';
import HolidayCalendar from './components/home/holidaycalendar.jsx';
import LeaveBalancesComponent from './components/home/leaveBalancesComponent.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeComponent />} />
            <Route path="engage" element={<EngageComponent />} />
            <Route path="holidaycalendar" element={<HolidayCalendar />} />
            <Route path="leave-balances" element={<LeaveBalancesComponent />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
