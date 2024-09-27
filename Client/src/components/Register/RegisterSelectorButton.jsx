import PropTypes from "prop-types";

RegisterSelectorButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handler: PropTypes.func.isRequired,
};

function RegisterSelectorButton({ isActive, children, handler }) {
  return (
    <button
      className={`flex-grow text-xl py-4 ${isActive ? "font-semibold text-project-orange border-b-[0.19rem] border-b-project-orange" : ""}`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default RegisterSelectorButton;
