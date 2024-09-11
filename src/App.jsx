import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import HomeComponent from './components/home/homeComponent.jsx';
import HolidayCalendar from './components/leave/holidaycalendar.jsx';
import LeaveBalances from './components/leave/leaveBalances.jsx';
import LeaveCalendar from './components/leave/leaveCalendar.jsx';
import LeaveApply from './components/leave/leaveApply.jsx';
import RestrictedHoliday from './components/leave/restrictedHoliday.jsx';
import LeaveCancel from './components/leave/leaveCancel.jsx';
import CompOffGrant from './components/leave/compOffGrant.jsx';
import LeaveHome from './components/leave/leaveHome.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeComponent />} />
            <Route path="leave/leave-apply" element={<LeaveHome />}>
              <Route index element={<LeaveApply />} />
              <Route
                path="restricted-holiday"
                element={<RestrictedHoliday />}
              />
              <Route path="leave-cancel" element={<LeaveCancel />} />
              <Route path="comp-off-grant" element={<CompOffGrant />} />
            </Route>

            <Route path="leave/leave-balances" element={<LeaveBalances />} />
            <Route path="leave/leave-calendar" element={<LeaveCalendar />} />
            <Route path="leave/holidaycalendar" element={<HolidayCalendar />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
