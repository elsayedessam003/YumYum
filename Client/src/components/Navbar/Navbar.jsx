import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SelectMenu from "../SelectMenu/SelectMenu.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import Register from "../Register/Register.jsx";
import CartButton from "../Cart/CartButton.jsx";
import SideMenu from "../SideMenu/SideMenu.jsx";
import { IoIosNotifications } from "react-icons/io";
import Cart from "../Cart/Cart.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";

function Navbar() {
  const { city } = useParams();
  const [cityName, setCityName] = useState(city);
  const [cities, setCities] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/Cities.json").then((r) => {
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

      <div
        className={
          "flex items-center gap-4 lg:justify-between px-4 lg:px-16 py-4 sticky top-0 bg-white z-20 border-b w-full"
        }
      >
        <div className={"flex gap-12 items-center shrink-0"}>
          <Link to={"/"}>
            <img
              src="/Logo.png"
              alt="Yam Yam logo"
              className={"h-16 lg:h-[4.6rem]"}
            />
          </Link>

          <SelectMenu
            items={cities}
            className={"hidden xl:block"}
            choice={cityName}
            setChoice={setCityName}
            onChoice={(item) => {
              navigate(`/${item}`);
            }}
          >
            <FaLocationDot />
          </SelectMenu>
        </div>

        <div
          className={"flex items-center justify-center gap-8 flex-grow lg:pl-8"}
        >
          <SearchBar placeHolder={"Search for restaurants"} />
        </div>

        <div className={"hidden gap-4 pl-8 xl:flex"}>
          <CartButton itemsNumber={99} setIsOpened={setCartOpened} />

          {cartOpened && (
            <div
              className={`absolute bg-white top-[106.59px] right-0 transition-all ease-linear`}
            >
              <Cart setIsOpened={setCartOpened} />
            </div>
          )}

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

        <SideMenu>
          <Button
            color={"white"}
            variant={"outline"}
            rounding={"full"}
            className={"font-medium border-white"}
            size={"large"}
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
            size={"large"}
            onClick={() => {
              setSignUp(true);
            }}
          >
            Register
          </Button>
        </SideMenu>
      </div>
    </>
  );
}

export default Navbar;
