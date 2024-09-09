import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import HomeComponent from './components/home/homeComponent.jsx';
import EngageComponent from './components/home/engageComponent.jsx';
import HolidayCalendar from './components/home/holidaycalendar.jsx';
import LeaveBalances from './components/leaveBalances.jsx';
import LeaveCalendar from './components/leaveCalendar.jsx';
import LeaveApply from './components/leaveApply.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeComponent />} />
            <Route path="engage" element={<EngageComponent />} />
            <Route path="/leave/leave-apply" element={<LeaveApply />} />
            <Route path="holidaycalendar" element={<HolidayCalendar />} />
            <Route path="leave/leave-balances" element={<LeaveBalances />} />
            <Route
              path="/leave/leave-calendar"
              element={<LeaveCalendar />}
            />{' '}
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
