import React from 'react';
import SidebarItem from './sidebarItem.jsx';
import { Card, List, Accordion, AccordionBody } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faClipboardList,
  faBorderAll,
  faTasks,
  faDollarSign,
  faCalendar,
  faFileAlt,
  faUserGroup,
  faQuestionCircle,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

export function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-auto w-64 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <img src="/centillionz.jpg" alt="Company Logo" />
      </div>

      <div className="flex items-center border-b p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
          <UserIcon className="h-6 w-6" />
        </div>
        <div className="ml-4">
          <h4 className="font-medium">Hi User</h4>
          <a href="#" className="text-sm text-blue-500">
            View My Info
          </a>
        </div>
        <div className="ml-6 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
          <Cog6ToothIcon className="h-6 w-6" />
        </div>
      </div>

      <List>
        <SidebarItem
          icon={<FontAwesomeIcon icon={faHome} className="h-5 w-5" />}
          text="Home"
          isLink={true}
          to="/"
        />

        <SidebarItem
          icon={<FontAwesomeIcon icon={faClipboardList} className="h-5 w-5" />}
          text="Engage"
          isLink={true}
          to="/engage"
        />

        <Accordion open={open === 2}>
          <SidebarItem
            icon={<FontAwesomeIcon icon={faBorderAll} className="h-5 w-5" />}
            text="My Worklife"
            onClick={() => handleOpen(2)}
            suffixIcon={
              open === 2 ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )
            }
            className={open === 2 ? 'text-gray-700' : ''}
          />

          {open === 2 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <div className="ml-4">
                  <SidebarItem text="Kudos" isLink={true} to="/" />
                </div>
                <div className="ml-4">
                  <SidebarItem text="Feedback" isLink={true} to="/" />
                </div>
              </List>
            </AccordionBody>
          )}
        </Accordion>

        <Accordion open={open === 3}>
          <SidebarItem
            icon={<FontAwesomeIcon icon={faTasks} className="h-5 w-5" />}
            text="To do"
            onClick={() => handleOpen(3)}
            suffixIcon={
              open === 3 ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )
            }
            className={open === 3 ? 'text-gray-700' : ''}
          />
          {open === 3 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <div className="ml-4">
                  <SidebarItem text="xxx" isLink={true} to="/" />
                </div>
                <div className="ml-4">
                  <SidebarItem text="xxx" isLink={true} to="/" />
                </div>
              </List>
            </AccordionBody>
          )}
        </Accordion>

        <Accordion open={open === 4}>
          <SidebarItem
            icon={<FontAwesomeIcon icon={faDollarSign} className="h-5 w-5" />}
            text="Salary"
            onClick={() => handleOpen(4)}
            suffixIcon={
              open === 4 ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )
            }
            className={open === 4 ? 'text-gray-700' : ''}
          />
          {open === 4 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <div className="ml-4">
                  <SidebarItem text="xxx" isLink={true} to="/" />
                </div>
                <div className="ml-4">
                  <SidebarItem text="xxx" isLink={true} to="/" />
                </div>
              </List>
            </AccordionBody>
          )}
        </Accordion>

        <Accordion open={open === 5}>
          <SidebarItem
            icon={<FontAwesomeIcon icon={faCalendar} className="h-5 w-5" />}
            text="Leave"
            onClick={() => handleOpen(5)}
            suffixIcon={
              open === 5 ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )
            }
            className={open === 5 ? 'text-gray-700' : ''}
          />

          {open === 5 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <div className="ml-4">
                  <SidebarItem
                    text="Leave Apply"
                    isLink={true}
                    to="/leave/leave-Apply"
                  />
                </div>
                <div className="ml-4">
                  <SidebarItem
                    text="Leave Balances"
                    isLink={true}
                    to="/leave/leave-balances"
                  />
                </div>
                <div className="ml-4">
                  <SidebarItem
                    text="Leave Calendar"
                    isLink={true}
                    to="/leave/leave-calendar"
                  />
                </div>
                <div className="ml-4">
                  <SidebarItem
                    text="Holiday Calendar"
                    isLink={true}
                    to="/leave/holidaycalendar"
                  />
                </div>
              </List>
            </AccordionBody>
          )}
        </Accordion>

        <Accordion open={open === 6}>
          <SidebarItem
            icon={<FontAwesomeIcon icon={faSquareCheck} className="h-5 w-5" />}
            text="Attendance"
            onClick={() => handleOpen(6)}
            suffixIcon={
              open === 6 ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )
            }
            className={open === 6 ? 'text-gray-700' : ''}
          />
          {open === 6 && (
            <AccordionBody className="py-1">
              <List className="p-0">
                <div className="ml-4">
                  <SidebarItem text="xxx" isLink={true} to="/" />
                </div>
                <div className="ml-4">
                  <SidebarItem text="xxx" isLink={true} to="/" />
                </div>
              </List>
            </AccordionBody>
          )}
        </Accordion>

        <SidebarItem
          icon={<FontAwesomeIcon icon={faFileAlt} className="h-5 w-5" />}
          text="Document Center"
          isLink={true}
          to="/"
        />

        <SidebarItem
          icon={<FontAwesomeIcon icon={faUserGroup} className="h-5 w-5" />}
          text="People"
          isLink={true}
          to="/"
        />

        <SidebarItem
          icon={<FontAwesomeIcon icon={faQuestionCircle} className="h-5 w-5" />}
          text="Helpdesk"
          isLink={true}
          to="/"
        />
      </List>
    </Card>
  );
}

export default Sidebar;
