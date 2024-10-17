import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { GiKnifeFork } from "react-icons/gi";
import { UserContext } from "../../context/UserProvider.jsx";
import SidebarSection from "./SidebarSection.jsx";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const { user } = useContext(UserContext);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-[18rem] max-h-full border-r p-6 flex flex-col gap-8">
      <div className="flex items-center justify-center gap-4 border-b pb-8">
        <div className="bg-black/70 p-4 rounded-full flex justify-center items-center">
          <FaUser className="text-white text-3xl" />
        </div>

        <div>
          <p className="text-black/65">Welcome,</p>
          <p className="font-semibold text-lg">{user.name}</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <SidebarSection
          icon={<FaUserAlt />}
          text={"Account Info"}
          active={activeSection === "accountInfo"}
          onClick={() => handleSectionChange("accountInfo")}
        />

        <SidebarSection
          icon={<CgFileDocument />}
          text={"My Orders"}
          active={activeSection === "myOrders"}
          onClick={() => handleSectionChange("myOrders")}
        />

        <SidebarSection
          icon={<GiKnifeFork />}
          text={"My Restaurants"}
          active={activeSection === "myRestaurants"}
          onClick={() => handleSectionChange("myRestaurants")}
        />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

export default Sidebar;
