import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SelectMenu from "../SelectMenu/SelectMenu.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import Register from "../Register/Register.jsx";
import CartButton from "../Cart/CartButton.jsx";
import SideMenu from "../SideMenu/SideMenu.jsx";
import Cart from "../Cart/Cart.jsx";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Address from "../Adress/Address.jsx";
import Cookies from "js-cookie";
import ProfileButton from "../ProfileButton/ProfileButton.jsx";
import { UserContext } from "../../context/UserProvider.jsx";

function Navbar() {
  const { city } = useParams();
  const [cityName, setCityName] = useState(city);
  const [cities, setCities] = useState([]);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [cartOpened, setCartOpened] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { user, token } = useContext(UserContext);
  const [address, setAddress] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { cart } = useContext(UserContext);

  useEffect(() => {
    axios.get("/Cities.json").then((r) => {
      setCities(r.data);
    });
  }, []);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/restaurants",
          { params: { page: 0, limit: 5, name: searchWord, fields: name } },
        );
        if (res.status === 200) {
          setSearchResults(res.data.data.restaurants);
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    if (searchWord) {
      getRestaurants();
    }
  }, [searchWord]);

  function getRestaurantNames() {
    return searchResults.map((result) => result.name);
  }

  function onChoice(item, index) {
    navigate(`/${cityName}/${searchResults[index]._id}`);
  }

  useEffect(() => {
    if (cart) {
      const items = cart.items;
      setQuantity(items.length);
    } else {
      setQuantity(0);
    }
  }, [cart]);

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

      {user && address ? <Address setActive={setAddress} /> : null}

      <div
        className={
          "flex items-center gap-2 lg:gap-16 justify-between px-4 lg:px-16 py-4 sticky top-0 bg-white z-20 border-b w-full"
        }
      >
        <div className={"flex items-center shrink-0"}>
          <Link to={"/"}>
            <img
              src="/Logo.png"
              alt="Yam Yam logo"
              className={"h-16 lg:h-[4.6rem]"}
            />
          </Link>
        </div>

        {cityName && (
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
        )}

        <div className={"flex items-center justify-center flex-grow"}>
          <SearchBar
            placeHolder={"Search for restaurants"}
            search={searchWord}
            setSearch={setSearchWord}
            items={getRestaurantNames()}
            onChoice={onChoice}
          />
        </div>

        <div className={"hidden gap-4 lg:flex"}>
          {user ? (
            <CartButton itemsNumber={quantity} setIsOpened={setCartOpened} />
          ) : null}

          {cartOpened && (
            <div
              className={`absolute bg-white top-[106.59px] right-0 transition-all ease-linear`}
            >
              <Cart setIsOpened={setCartOpened} setAddressStatus={setAddress} />
            </div>
          )}

          {!user ? (
            <>
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
            </>
          ) : null}
        </div>

        {user && <ProfileButton user={user} />}

        {!user && (
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
        )}
      </div>
    </>
  );
}

export default Navbar;
