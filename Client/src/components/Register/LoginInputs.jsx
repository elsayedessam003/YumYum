import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import RegisterInput from "./RegisterInput.jsx";
import { MdEmail } from "react-icons/md";
import RegisterPasswordInput from "./RegisterPasswordInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { checkEmail, checkPassword } from "./Validation.jsx";

function LoginInputs() {
  const user = useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    user.setUsername("");
    user.setEmail("");
    user.setPassword("");
    setIsSubmitted(false);
  }, []);
  return (
    <>
      <div className={"flex flex-col gap-4"}>
        <RegisterInput
          type={"text"}
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
      </div>

      <div className={"w-full"}>
        <RegisterButton
          onClick={() => {
            setIsSubmitted(true);
          }}
        >
          Login
        </RegisterButton>
      </div>
    </>
  );
}

export default LoginInputs;
