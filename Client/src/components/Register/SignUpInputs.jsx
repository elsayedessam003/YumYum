import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import RegisterInput from "./RegisterInput.jsx";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import RegisterPasswordInput from "./RegisterPasswordInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { checkEmail, checkName, checkPassword } from "./Validation.jsx";
import axioIinstance from "../../config/axios.instance.js";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
function SignUpInputs() {
  const { setUser, setToken } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitted(true);

          if (
            checkName(name) &&
            checkEmail(email) &&
            checkPassword(password) &&
            password === repeatedPassword
          ) {
            context.setUser({ name, email, password });
            const userObj = {
              name,
              email,
              password,
              passwordConfirm: password,
            };
            try {
              setIsLoading(true);
              const { status, data } = await axioIinstance.post(
                "/register",
                userObj,
              );
              if (status === 200) toast.success("Register Successfully");
              Cookies.set("token", data.token, {
                expires: 1,
              });
              setToken(data.token);

              Cookies.set("user", JSON.stringify(data.data.user), data.token, {
                expires: 1,
              });
              setUser(data.data.user);

              location.replace("/");
            } catch (error) {
              toast.error(error.response.data.message);
            } finally {
              setIsLoading(false);
            }
          }
        }}
        className={"w-full flex flex-col gap-4"}
      >
        <RegisterButton isLoading={isLoading}>Register</RegisterButton>
      </form>
    </>
  );
}

export default SignUpInputs;
