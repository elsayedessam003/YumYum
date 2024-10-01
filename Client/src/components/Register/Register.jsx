import PropTypes from "prop-types";
import RegisterSelectorButton from "./RegisterSelectorButton.jsx";
import style from "./Register.module.css";
import LoginInputs from "./LoginInputs.jsx";
import SignUpInputs from "./SignUpInputs.jsx";

Register.propTypes = {
  login: PropTypes.bool.isRequired,
  signUp: PropTypes.bool.isRequired,
  setLogin: PropTypes.func.isRequired,
  setSignUp: PropTypes.func.isRequired,
};

function Register({ login, signUp, setLogin, setSignUp }) {
  function handleLoginSwitch() {
    setLogin(true);
    setSignUp(false);
  }

  function handleSignUpSwitch() {
    setLogin(false);
    setSignUp(true);
  }

  function handleClose(e) {
    if (e.target === e.currentTarget) {
      setLogin(false);
      setSignUp(false);
    }
  }

  return (
    <div
      className={
        "z-50 w-full h-full bg-black bg-opacity-40 flex justify-center items-center overflow-hidden fixed"
      }
      onClick={handleClose}
    >
      <div
        className={`w-[32rem] bg-white rounded-xl flex flex-col gap-10 p-10 ${style.opened} select-none transition-all`}
      >
        <div className={"flex"}>
          <RegisterSelectorButton isActive={login} handler={handleLoginSwitch}>
            Login
          </RegisterSelectorButton>

          <RegisterSelectorButton
            isActive={signUp}
            handler={handleSignUpSwitch}
          >
            Register
          </RegisterSelectorButton>
        </div>

        {login && <LoginInputs />}
        {signUp && <SignUpInputs />}
      </div>
    </div>
  );
}

export default Register;
