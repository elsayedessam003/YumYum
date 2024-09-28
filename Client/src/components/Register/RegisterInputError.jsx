import PropTypes from "prop-types";

RegisterInputError.propTypes = {
  children: PropTypes.node,
};

function RegisterInputError({ children }) {
  return <p className={"text-red-600"}>{children}</p>;
}

export default RegisterInputError;
