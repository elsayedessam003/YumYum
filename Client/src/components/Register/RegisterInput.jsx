import PropTypes from "prop-types";

RegisterInput.propTypes = {
  placeHolder: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
};

function RegisterInput({ placeHolder, type, children }) {
  return (
    <div
      className={
        "w-full flex items-center text-2xl p-6 bg-project-orange bg-opacity-[0.07] text-black text-opacity-[0.18] rounded-xl gap-4 border border-transparent focus-within:border-project-orange focus-within:text-project-orange transition"
      }
    >
      {children}
      <input
        type={type}
        placeholder={placeHolder}
        className={
          "w-full outline-none text-xl bg-transparent placeholder-black placeholder-opacity-[0.18] text-black focus:text-project-orange"
        }
      ></input>
    </div>
  );
}

export default RegisterInput;
