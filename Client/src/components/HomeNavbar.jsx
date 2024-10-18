import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import SideMenu from "./SideMenu/SideMenu.jsx";
import Button from "./Button/Button.jsx";
import Cookies from "js-cookie";
import ProfileButton from "./ProfileButton/ProfileButton.jsx";
import { UserContext } from "../context/UserProvider.jsx";

HomeNavbar.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setSignUp: PropTypes.func.isRequired,
};

function HomeNavbar({ setLogin, setSignUp }) {
  const { user, token } = useContext(UserContext);

  return (
    <div className="h-[7rem] px-[7%] md:px-[5%] md:h-[8rem] w-screen pt-8 flex items-center justify-between">
      <img src="/Logo-White.svg" alt="YamYam logo" className="h-full" />

      {!user ? (
        <>
          <div className="hidden lg:flex items-center gap-8">
            <Button
              color={"white"}
              variant={"text"}
              size={"large"}
              onClick={() => {
                setLogin(true);
              }}
            >
              Login
            </Button>
            <Button
              color={"white"}
              rounding={"full"}
              size={"large"}
              onClick={() => {
                setSignUp(true);
              }}
            >
              Register
            </Button>
          </div>
          <SideMenu color={"white"}>
            <Button
              color={"white"}
              variant={"outline"}
              size={"large"}
              rounding={"full"}
              onClick={() => {
                setLogin(true);
              }}
            >
              Login
            </Button>
            <Button
              color={"white"}
              rounding={"full"}
              size={"large"}
              onClick={() => {
                setSignUp(true);
              }}
            >
              Register
            </Button>
          </SideMenu>{" "}
        </>
      ) : (
        <ProfileButton user={user} />
      )}
    </div>
  );
}

export default HomeNavbar;
