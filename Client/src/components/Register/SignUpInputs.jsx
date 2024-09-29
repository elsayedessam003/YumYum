import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import RegisterInput from "./RegisterInput.jsx";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import RegisterPasswordInput from "./RegisterPasswordInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { checkEmail, checkName, checkPassword } from "./Validation.jsx";

function SignUpInputs() {
  const user = useContext(UserContext);
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    user.setUsername("");
    user.setEmail("");
    user.setPassword("");
    setIsSubmitted(false);
  }, []);

  return (
    <>
      <div className={"flex flex-col gap-2"}>
        {
          // Register name input
          <RegisterInput
            type={"text"}
            placeHolder={"Full Name"}
            error={
              isSubmitted && !checkName(user.username)
                ? "username must be 3 characters or more."
                : ""
            }
            onChange={(e) => {
              user.setUsername(e.target.value);
            }}
          >
            <BsFillPersonFill />
          </RegisterInput>
        }
        {
          // Register email input
          <RegisterInput
            type={"email"}
            placeHolder={"Email"}
            error={
              isSubmitted && !checkEmail(user.email)
                ? "Please enter a valid email."
                : ""
            }
            onChange={(e) => {
              user.setEmail(e.target.value);
            }}
          >
            <MdEmail />
          </RegisterInput>
        }
        {
          // Register password input
          <RegisterPasswordInput
            error={
              isSubmitted && !checkPassword(user.password)
                ? "Password must be 8 characters or more."
                : ""
            }
            onChange={(e) => {
              user.setPassword(e.target.value);
            }}
          />
        }
        {
          <RegisterPasswordInput
            placeHolder={"Re-Password"}
            error={
              isSubmitted && !(repeatedPassword === user.password)
                ? "Passwords don't match."
                : ""
            }
            onChange={(e) => {
              setRepeatedPassword(e.target.value);
            }}
          />
        }
      </div>

      <div className={""}>
        By tapping “Register” you agree to Yam-Yam’s{" "}
        <a href="#" className={"text-project-orange underline"}>
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a href="#" className={"text-project-orange underline"}>
          Privacy policy
        </a>
        .
      </div>

      <div className={"w-full flex flex-col gap-4"}>
        <RegisterButton
          onClick={() => {
            setIsSubmitted(true);
          }}
        >
          Register
        </RegisterButton>
      </div>
    </>
  );
}

export default SignUpInputs;
