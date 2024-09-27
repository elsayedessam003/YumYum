import PropTypes from "prop-types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { MdLock } from "react-icons/md";

RegisterPasswordInput.propTypes = {
  placeHolder: PropTypes.string,
};

function RegisterPasswordInput({ placeHolder = "Password" }) {
  const [inputType, setInputType] = useState("password");
  return (
    <div
      className={
        "w-full flex items-center text-2xl p-6 bg-project-orange bg-opacity-[0.07] text-black text-opacity-[0.18] rounded-xl gap-4 border border-transparent focus-within:border-project-orange focus-within:text-project-orange transition"
      }
    >
      <MdLock />
      <input
        type={inputType}
        placeholder={placeHolder}
        className={
          "w-full outline-none text-xl bg-transparent placeholder-black placeholder-opacity-[0.18] text-black focus:text-project-orange"
        }
      ></input>

      {inputType === "password" && (
        <FaRegEyeSlash
          className={"cursor-pointer"}
          onClick={() => {
            setInputType("text");
          }}
        />
      )}

      {inputType === "text" && (
        <FaRegEye
          className={"cursor-pointer"}
          onClick={() => {
            setInputType("password");
          }}
        />
      )}
    </div>
  );
}

export default RegisterPasswordInput;
