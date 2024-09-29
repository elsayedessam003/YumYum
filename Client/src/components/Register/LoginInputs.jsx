import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import RegisterInput from "./RegisterInput.jsx";
import { MdEmail } from "react-icons/md";
import RegisterPasswordInput from "./RegisterPasswordInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { checkEmail, checkPassword } from "./Validation.jsx";

function LoginInputs() {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setIsSubmitted(false);
  }, []);

  return (
    <>
      <div className={"flex flex-col gap-4"}>
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
