import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AddressForm from "./AddressForm.jsx";
import Addresses from "./Addresses.jsx";
import { UserContext } from "../../context/UserProvider.jsx";

Address.propTypes = {};

function Address({ setActive }) {
  const { user } = useContext(UserContext);
  const [addAddress, setAddAddress] = useState(false);
  const background = useRef(null);
  const [address, setAddress] = useState(null);

  function handleClose(e) {
    if (e.target === background.current) {
      setActive(false);
    }
  }

  return (
    <div
      className={
        "top-0 left-0 w-full h-full z-30 bg-black/40 flex justify-center items-center fixed"
      }
      ref={background}
      onClick={handleClose}
    >
      <div className={"bg-white rounded-xl"}>
        {!addAddress && (
          <Addresses setAddAddress={setAddAddress} setAddress={setAddress} />
        )}
        {addAddress && (
          <AddressForm address={address} setAddAddress={setAddAddress} />
        )}
      </div>
    </div>
  );
}

export default Address;
