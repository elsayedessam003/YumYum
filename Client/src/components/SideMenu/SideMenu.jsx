import React, { useState } from "react";
import PropTypes from "prop-types";
import SideMenuButton from "./SideMenuButton.jsx";

SideMenu.propTypes = {};

function SideMenu(props) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <SideMenuButton isOpened={isOpened} setIsOpened={setIsOpened} />
    </div>
  );
}

export default SideMenu;
