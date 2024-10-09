import PropTypes from "prop-types";

RegisterInputError.propTypes = {
  children: PropTypes.node,
};

function RegisterInputError({ children }) {
  return <p className={"text-red-600 inline-block text-sm"}>{children}</p>;
}

export default RegisterInputError;
