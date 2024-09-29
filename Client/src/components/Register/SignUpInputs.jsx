import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import RegisterInput from "./RegisterInput.jsx";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import RegisterPasswordInput from "./RegisterPasswordInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { checkEmail, checkName, checkPassword } from "./Validation.jsx";

function SignUpInputs() {
  const context = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
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
              isSubmitted && !checkName(name)
                ? "username must be 3 characters or more."
                : ""
            }
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
              isSubmitted && !checkEmail(email)
                ? "Please enter a valid email."
                : ""
            }
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          >
            <MdEmail />
          </RegisterInput>
        }
        {
          // Register password input
          <RegisterPasswordInput
            error={
              isSubmitted && !checkPassword(password)
                ? "Password must be 8 characters or more."
                : ""
            }
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        }
        {
          <RegisterPasswordInput
            placeHolder={"Re-Password"}
            error={
              isSubmitted && !(repeatedPassword === password)
                ? "Passwords don't match."
                : ""
            }
            value={repeatedPassword}
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
            if (
              checkName(name) &&
              checkEmail(email) &&
              checkPassword(password) &&
              password === repeatedPassword
            ) {
              context.setUser({ name, email, password });
              console.log(context.user);
            }
          }}
        >
          Register
        </RegisterButton>
      </div>
    </>
  );
}

export default SignUpInputs;
