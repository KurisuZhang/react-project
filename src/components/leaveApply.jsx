import { useState } from 'react';
import ComponentNav from './ComponentNav';
import { useNavigate } from 'react-router-dom';
import Message from '../leaveComponents/message';
import LeaveType from '../leaveComponents/leaveType';
import Date from '../leaveComponents/date';
import Session from '../leaveComponents/session';
import Contact from '../leaveComponents/contact';
import ApplyingTo from '../leaveComponents/applyingTo';
import CcTo from '../leaveComponents/ccTo';
import Reason from '../leaveComponents/reason';
import File from '../leaveComponents/file';
import SubmitCancel from '../leaveComponents/submitCancel';

const LeaveApply = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    session1: 'Session 1',
    session2: 'Session 2',
    applyingTo: '',
    ccTo: '',
    contactDetails: '',
    reason: '',
    file: null,
  });

  const [activeTab, setActiveTab] = useState('apply');
  const [showMessage, setShowMessage] = useState(true);
  const [ccDropdownOpen, setCcDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [applyingDropdownOpen, setApplyingDropdownOpen] = useState(false);
  const [selectedApplyingTo, setSelectedApplyingTo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Leave');

  const staffList = ['Shuai', 'Xi', 'Eileen', 'Jing', 'Zhen', 'Laurene'];
  const leaveTypes = ['Loss Of Pay', 'Comp - Off', 'Casual Leave'];
  const sessions = ['Session 1', 'Session 2'];

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === 'pending') {
      navigate('/leave/leave-pending');
    } else if (tab === 'history') {
      navigate('/leave/leave-history');
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'Leave') {
      navigate('/leave/leave-apply');
    } else if (category === 'Restricted Holiday') {
      navigate('/leave/restricted-holiday');
    } else if (category === 'Leave Cancel') {
      navigate('/leave/leave-cancel');
    } else if (category === 'Comp Off Grant') {
      navigate('/leave/comp-off-grant');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleHideMessage = () => setShowMessage(false);

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleStaffSelect = (staff) => {
    if (selectedStaff.includes(staff)) {
      setSelectedStaff(selectedStaff.filter((item) => item !== staff));
    } else {
      setSelectedStaff([...selectedStaff, staff]);
    }
  };

  const filteredStaff = staffList.filter((staff) =>
    staff.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleApplyingToSelect = (staff) => {
    setSelectedApplyingTo(staff);
    setApplyingDropdownOpen(false);
  };

  return (
    <div className="bg-gray-20 flex min-h-screen w-full">
      {/* Left Sidebar */}
      <div className="w-1/7 flex flex-col border-r p-6">
        <div className="mt-[calc(20vh)]">
          <ul>
            <li
              onClick={() => handleCategoryChange('Leave')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Leave'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Leave
            </li>
            <li
              onClick={() => handleCategoryChange('Restricted Holiday')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Restricted Holiday'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Restricted Holiday
            </li>
            <li
              onClick={() => handleCategoryChange('Leave Cancel')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Leave Cancel'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Leave Cancel
            </li>
            <li
              onClick={() => handleCategoryChange('Comp Off Grant')}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === 'Comp Off Grant'
                  ? 'text-lg text-blue-500'
                  : 'text-gray-500'
              }`}
            >
              Comp Off Grant
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-20 w-6/7 p-6">
        {/* Header */}
        <ComponentNav />

        {/* Button Group */}
        <div className="mb-6 flex justify-center" role="group">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`rounded-s-lg border border-gray-200 bg-white px-10 py-2 text-xl font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 ${
                activeTab === 'apply' ? 'text-grey bg-blue-200' : ''
              }`}
              onClick={() => handleTabChange('apply')}
            >
              Apply
            </button>
            <button
              type="button"
              className={`border-b border-t border-gray-200 bg-white px-10 py-2 text-xl font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 ${
                activeTab === 'pending' ? 'text-grey bg-blue-200' : ''
              }`}
              onClick={() => handleTabChange('pending')}
            >
              Pending
            </button>
            <button
              type="button"
              className={`rounded-e-lg border border-gray-200 bg-white px-10 py-2 text-xl font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 ${
                activeTab === 'history' ? 'text-grey bg-blue-200' : ''
              }`}
              onClick={() => handleTabChange('history')}
            >
              History
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-20 relative left-[-20px] mx-auto w-full max-w-4xl justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full justify-center rounded-md bg-white p-6 shadow-lg"
          >
            {/* Message Box */}
            <Message
              message="Leave is earned by an employee and granted by the employer to take time off work. The employee is free to avail this leave in accordance with the company policy."
              showMessage={showMessage}
              handleHideMessage={handleHideMessage}
            />

            {activeTab === 'apply' && (
              <div>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* Leave Type */}
                  <LeaveType
                    leaveType={formData.leaveType}
                    leaveTypes={leaveTypes}
                    handleSelectChange={handleSelectChange}
                  />

                  {/* From Date */}
                  <Date
                    label="From Date"
                    name="fromDate"
                    value={formData.fromDate}
                    handleChange={handleChange}
                  />

                  {/* Session 1 */}
                  <Session
                    sessionLabel="session1"
                    sessionValue={formData.session1}
                    sessions={sessions}
                    handleSelectChange={handleSelectChange}
                  />

                  {/* To Date */}
                  <Date
                    label="To Date"
                    name="toDate"
                    value={formData.toDate}
                    handleChange={handleChange}
                  />

                  {/* Session 2 */}
                  <Session
                    sessionLabel="session2"
                    sessionValue={formData.session2}
                    sessions={sessions}
                    handleSelectChange={handleSelectChange}
                  />

                  {/* Applying to */}
                  <ApplyingTo
                    applyingDropdownOpen={applyingDropdownOpen}
                    setApplyingDropdownOpen={setApplyingDropdownOpen}
                    selectedApplyingTo={selectedApplyingTo}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filteredStaff={filteredStaff}
                    handleApplyingToSelect={handleApplyingToSelect}
                  />

                  {/* CC to */}
                  <CcTo
                    ccDropdownOpen={ccDropdownOpen}
                    setCcDropdownOpen={setCcDropdownOpen}
                    selectedStaff={selectedStaff}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filteredStaff={filteredStaff}
                    handleStaffSelect={handleStaffSelect}
                  />

                  {/* Contact */}
                  <Contact
                    contactDetails={formData.contactDetails}
                    handleChange={handleChange}
                  />

                  {/* Reason */}
                  <Reason
                    reason={formData.reason}
                    handleChange={handleChange}
                  />

                  {/* Attach File */}
                  <File handleChange={handleChange} />

                  {/* Submit and Cancel Buttons */}
                  <SubmitCancel
                    onSubmit={handleSubmit}
                    onCancel={() => {
                      // cancel logic, resetting formData
                      setFormData({
                        leaveType: '',
                        fromDate: '',
                        toDate: '',
                        session1: 'Session 1',
                        session2: 'Session 2',
                        applyingTo: '',
                        ccTo: '',
                        contactDetails: '',
                        reason: '',
                        file: null,
                      });
                    }}
                  />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveApply;
