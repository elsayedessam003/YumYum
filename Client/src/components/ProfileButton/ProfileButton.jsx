import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import { FaUser, FaRegUser } from "react-icons/fa";
import { MdOutlineDeliveryDining, MdOutlineLogout } from "react-icons/md";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider.jsx";

ProfileButton.propTypes = {
  user: PropTypes.object.isRequired,
};

function ProfileButton({ user, ...rest }) {
  const { setUser, setToken } = useContext(UserContext);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    Cookies.remove("user");
    setUser(null);

    Cookies.remove("token");
    setToken(null);

    navigate("/");
  }

  function handleClick() {
    setActive((currentState) => !currentState);
  }

  function handleProfileButton() {
    navigate("/user");
    setActive(false);
  }
  return (
    <div {...rest}>
      <Button
        variant={"outline"}
        size={"large"}
        rounding={"full"}
        onClick={handleClick}
      >
        <FaUser /> <p className={"hidden lg:block"}>{user.name}</p>
      </Button>

      <div
        className={`absolute top-[97px] lg:top-[106.59px] bg-white p-4 w-max right-0 flex flex-col gap-1 rounded-b-xl ${active ? "" : "pointer-events-none opacity-0"} transition-all ease-linear border`}
      >
        <Button
          variant={"text"}
          className={"w-full rounded-xl hover:bg-project-orange/5"}
          onClick={handleProfileButton}
        >
          <FaRegUser /> Profile
        </Button>

        <Button
          variant={"text"}
          className={"w-full rounded-xl hover:bg-project-orange/5"}
        >
          <MdOutlineDeliveryDining />
          Deliver for us
        </Button>

        <Button
          color={"white"}
          onClick={handleLogout}
          className={"w-full bg-project-red hover:bg-project-red/80 rounded-xl"}
        >
          <MdOutlineLogout /> Logout
        </Button>
      </div>
    </div>
  );
}

export default ProfileButton;
