import React from "react";
import PropTypes from "prop-types";
import { FaUserAlt } from "react-icons/fa";

SidebarSection.propTypes = {};

function SidebarSection({ icon, text, active, ...rest }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-full ${!active ? "" : "bg-project-orange/10"} cursor-pointer`}
      {...rest}
    >
      <div
        className={`p-4 text-2xl ${!active ? "bg-project-gray" : "bg-project-orange"} rounded-full flex justify-center items-center text-white`}
      >
        {icon}
      </div>

      <p
        className={`text-lg ${!active ? "font-semibold text-black/40" : "font-bold text-project-orange"}`}
      >
        {text}
      </p>
    </div>
  );
}

export default SidebarSection;
