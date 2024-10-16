import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import RegisterInput from "./RegisterInput.jsx";
import { MdEmail } from "react-icons/md";
import RegisterPasswordInput from "./RegisterPasswordInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { checkEmail, checkPassword } from "./Validation.jsx";
import axioIinstance from "../../config/axios.instance.js";
import { toast } from "react-hot-toast";
import Cookies from 'js-cookie'

function LoginInputs() {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitted(true);

          const userObj = {
            email,
            password,
          };
          try {
            setIsLoading(true);
            const { status, data } = await axioIinstance.post(
              "/login",
              userObj
            );
            if (status === 200) toast.success("Login Successfully");
            Cookies.set("Token", data.token);
            Cookies.set("user", data.data.user);
            location.replace('/')
          } catch (error) {
            toast.error(error.response.data.message);
          } finally {
            setIsLoading(false);
          }
        }}
        className={"w-full"}
      >
        <RegisterButton isLoading={isLoading}>Login</RegisterButton>
      </form>
    </>
  );
}

export default LoginInputs;
