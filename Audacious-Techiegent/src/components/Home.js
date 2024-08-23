import React, { useState } from "react";
import { FaUser, FaSearch, FaRegCalendarAlt, FaTasks } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaThLarge } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { GoCrossReference } from "react-icons/go";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { LuUserCheck } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png";
import user from "../Images/user.jpg";
import { LuSchool } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";

const Home = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItem = [
    {
      path: "/adminDashboard",
      icon: <FaThLarge />,
    },
    {
      path: "/feedback",
      icon: <LuSchool />,
    },
    {
      path: "/leaves",
      icon: <BsPeople />,
    },
    {
      path: "/attendance",
      icon: <FaTasks />,
    },
    {
      path: "/daily",
      icon: <MdOutlineInsertPageBreak />,
    },
    {
      path: "/work",
      name: "Work Log",
      icon: <LuUserCheck />,
    },
    {
      path: "/Reimbursements",
      name: "Reimbursements",
      icon: <PiCalendarCheckDuotone />,
    },
  ];

  return (
    <>
      <div>
        <div>
          <Row
            style={{ alignItems: "center", display: "flex", width: "330px" }}
          >
            <img
              src={logo}
              alt="Toggle"
              className="logo"
              onClick={toggle}
             
            />
            {isOpen && (
              <div className="search">
                <input
                  type="text"
                  placeholder=" Search..."
                  style={{
                    padding: "5px",
                    borderRadius: "4px",
                    border: "1px solid lightgrey",
                    marginRight: "5px",
                    width: "100%",
                  }}
                />
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  <FaSearch />
                </button>
              </div>
            )}
          </Row>
        </div>
        <Row>
          <Col lg={4}>
            <div
              style={{ width: isOpen ? "200px" : "45px" }}
              className="sidebar"
            >
              {menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className="link">
                  <div className="icon">{item.icon}</div>
                </NavLink>
              ))}
            </div>
          </Col>
          {isOpen && (
            <Col lg={8} className="nav-box">
              <h5 className="list">My Options</h5>
              <div className="list">
                <FaComputer style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Dashboard</h6>
              </div>
              <div className="list">
                <VscFeedback style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Feedback</h6>
              </div>
              <div className="list">
                <GoCrossReference style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Leaves</h6>
              </div>
              <div className="list">
                <GoCrossReference style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Attendance</h6>
              </div>
              <div className="list">
                <FaRegCalendarAlt style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Daily Timesheet</h6>
              </div>
              <div className="list">
                <LiaLaptopCodeSolid style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Work Log</h6>
              </div>
              <div className="list">
                <GiTakeMyMoney style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Reimbursements</h6>
              </div>
              <hr className="line" />
              <div className="list">
                <TbReportSearch style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Reports</h6>
              </div>
              <div className="list">
                <GoCrossReference style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>My expenses</h6>
              </div>
              <div className="list">
                <GiTakeMyMoney style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Income</h6>
              </div>
              <div className="list">
                <BiCategory style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Categories</h6>
              </div>
              <div className="list">
                <IoSettingsOutline style={{ marginRight: "8px" }} />
                <h6 style={{ margin: 0 }}>Setting</h6>
              </div>
            </Col>
          )}
        </Row>

        <main>{children}</main>
      </div>

      <div className="profile-container">
        <img className="profile" src={user} alt="Profile" />
        <MdKeyboardArrowDown onClick={toggleDropdown} className="arrow-icon" />
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Name</div>
            <div className="dropdown-item">Settings</div>
            <div className="dropdown-item">Logout</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
