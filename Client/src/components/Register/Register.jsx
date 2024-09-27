import PropTypes from "prop-types";
import RegisterSelectorButton from "./RegisterSelectorButton.jsx";
import RegisterInput from "./RegisterInput.jsx";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdLock } from "react-icons/md";
import RegisterButton from "./RegisterButton.jsx";

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
        "z-10 w-screen h-screen absolute bg-black bg-opacity-40 flex justify-center items-center"
      }
      onClick={handleClose}
    >
      <div
        className={"w-[32rem] bg-white rounded-xl flex flex-col gap-16 p-10"}
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

function LoginInputs() {
  return (
    <>
      <div className={"flex flex-col gap-4"}>
        <RegisterInput type={"text"} placeHolder={"Email"}>
          <MdEmail />
        </RegisterInput>

        <RegisterInput type={"password"} placeHolder={"Full Name"}>
          <MdLock />
        </RegisterInput>
      </div>

      <div className={"w-full"}>
        <RegisterButton>Login</RegisterButton>
      </div>
    </>
  );
}

function SignUpInputs() {
  return (
    <>
      <div className={"flex flex-col gap-4"}>
        <RegisterInput type={"text"} placeHolder={"Full Name"}>
          <BsFillPersonFill />
        </RegisterInput>

        <RegisterInput type={"email"} placeHolder={"Email"}>
          <MdEmail />
        </RegisterInput>

        <RegisterInput type={"password"} placeHolder={"Password"}>
          <MdLock />
        </RegisterInput>

        <RegisterInput type={"password"} placeHolder={"Re-Password"}>
          <MdLock />
        </RegisterInput>
      </div>

      <div className={"w-full"}>
        <RegisterButton>Register</RegisterButton>
      </div>
    </>
  );
}

export default Register;
