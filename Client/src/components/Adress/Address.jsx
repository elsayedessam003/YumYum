import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-router-dom";
import Input from "../Input.jsx";
import AddressForm from "./AddressForm.jsx";

Address.propTypes = {};

function Address(props) {
  return (
    <div
      className={
        "top-0 left-0 w-full h-full z-30 bg-black/40 flex justify-center items-center fixed"
      }
    >
      <div className={"bg-white rounded-xl"}>
        <AddressForm />
      </div>
    </div>
  );
}

export default Address;
