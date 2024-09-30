import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SelectMenu from "../SelectMenu/SelectMenu.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import Register from "../Register/Register.jsx";
import CartButton from "../Cart/CartButton.jsx";

function Navbar() {
  const [cities, setCities] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    axios.get("./public/Cities.json").then((r) => {
      setCities(r.data);
    });
  }, []);

  return (
    <>
      {(login || signUp) && (
        <Register
          login={login}
          signUp={signUp}
          setLogin={setLogin}
          setSignUp={setSignUp}
        />
      )}
      <div className={"flex items-center justify-between px-16 py-4"}>
        <img
          src="/public/Logo.png"
          alt="Yam Yam logo"
          className={"h-[4.6rem]"}
        />

        <div
          className={"flex items-center justify-center gap-8 flex-grow pl-8"}
        >
          <SelectMenu items={cities}>
            <FaLocationDot />
          </SelectMenu>

          <SearchBar placeHolder={"Search for restaurants"} />
        </div>

        <div className={"flex gap-4 pl-8"}>
          <CartButton itemsNumber={99} />

          <Button
            color={"black"}
            variant={"text"}
            className={"font-medium"}
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </Button>

          <Button
            color={"white"}
            variant={"default"}
            rounding={"full"}
            className={"font-medium"}
            onClick={() => {
              setSignUp(true);
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
