import HomeNavbar from "../../components/HomeNavbar.jsx";
import HomeSearchBar from "../../components/HomeSearchBar.jsx";
import { useEffect, useState } from "react";
import Register from "../../components/Register/Register.jsx";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function Home() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("./public/Cities.json").then((r) => {
      setCities(r.data);
    });
  }, []);

  return (
    <div>
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
          "w-screen h-screen sm bg-no-repeat bg-cover bg-center flex flex-col gap-[10rem]"
        }
        style={{
          backgroundImage: "url(/HomeBackground.png",
        }}
      >
        <HomeNavbar setLogin={setLogin} setSignUp={setSignUp} />

        <div
          className={
            "w-screen h-[50%] bg-black bg-opacity-[0.22] flex flex-col justify-center items-center gap-16 backdrop-blur-[2px]"
          }
        >
          <p
            className={
              "font-extrabold text-3xl text-white w-[90%] md:w-max md:text-4xl text-center"
            }
          >
            Explore a diverse selection of restaurants
          </p>
          <HomeSearchBar placeHolder={"Choose your city"} items={cities} />
        </div>
      </div>
    </div>
  );
}

export default Home;
