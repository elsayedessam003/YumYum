import { useState } from "react";
import PropTypes from "prop-types";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { GiKnifeFork } from "react-icons/gi";

const Sidebar = ({ setActiveSection, userName = "Elsayed" }) => {
  const [activeSection, setActive] = useState("accountInfo");

  const handleSectionChange = (section) => {
    setActive(section);
    setActiveSection(section);
  };

  return (
    <div className="w-1/8 h-full border-r p-6">
      <div className="flex items-center mb-6">
        <div className="bg-gray-300 w-12 h-12 rounded-full flex justify-center items-center mr-4">
          <FaUserCircle className="text-white text-3xl" />
        </div>
        <div>
          <p className="text-gray-500">Welcome,</p>
          <p className="font-bold text-lg">{userName}</p>
        </div>
      </div>

      <hr className="w-[221px] border-t border-gray-300 mb-6" />

      <div className="space-y-4">
        <div
          className={`w-[229px] h-[52px] cursor-pointer text-lg font-semibold flex items-center p-3 rounded-lg ${
            activeSection === "accountInfo"
              ? "text-project-orange"
              : "text-gray-400"
          }`}
          onClick={() => handleSectionChange("accountInfo")}
        >
          <div
            className={`mr-2 w-[54.091px] h-[54.091px] rounded-full flex justify-center items-center text-xl text-white
                ${activeSection === "accountInfo" ? "bg-project-orange" : "bg-slate-300"}
            `}
          >
            <FaUserAlt />
          </div>
          Account Info
        </div>

        <div
          className={`w-[229px] h-[52px] cursor-pointer text-lg font-semibold flex items-center p-3 rounded-lg ${
            activeSection === "myOrders"
              ? "text-project-orange"
              : "text-gray-400"
          }`}
          onClick={() => handleSectionChange("myOrders")}
        >
          <div
            className={`mr-2 w-[54.091px] h-[54.091px] rounded-full flex justify-center items-center text-xl text-white
                ${activeSection === "myOrders" ? "bg-project-orange" : "bg-slate-300"}
            `}
          >
            <CgFileDocument />
          </div>
          My Orders
        </div>

        <div
          className={`w-[229px] h-[52px] cursor-pointer text-lg font-semibold flex items-center p-3 rounded-lg ${
            activeSection === "myRestaurants"
              ? "text-project-orange"
              : "text-gray-400"
          }`}
          onClick={() => handleSectionChange("myRestaurants")}
        >
          <div
            className={`mr-2 w-[54.091px] h-[54.091px] rounded-full flex justify-center items-center text-xl text-white
                ${activeSection === "myRestaurants" ? "bg-project-orange" : "bg-slate-300"}
            `}
          >
            <GiKnifeFork />
          </div>
          My Restaurants
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

export default Sidebar;
