import PropTypes from "prop-types";

RegisterButton.propTypes = {
  children: PropTypes.node.isRequired,
};

function RegisterButton({ children }) {
  return (
    <button
      className={
        "text-white text-2xl py-4 w-full bg-project-orange rounded-xl hover:bg-opacity-90 active:bg-opacity-80"
      }
    >
      {children}
    </button>
  );
}

export default RegisterButton;
