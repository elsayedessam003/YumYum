import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AddressForm from "./AddressForm.jsx";
import Addresses from "./Addresses.jsx";

Address.propTypes = {};

function Address({ user, setActive }) {
  const [addAddress, setAddAddress] = useState(false);
  const background = useRef(null);

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
        {!addAddress && <Addresses user={user} setAddAddress={setAddAddress} />}
        {addAddress && (
          <AddressForm user={user} setAddAddress={setAddAddress} />
        )}
      </div>
    </div>
  );
}

export default Address;
