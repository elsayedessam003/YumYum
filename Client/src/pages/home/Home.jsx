import HomeNavbar from "../../components/HomeNavbar.jsx";
import SearchBar from "../../components/SearchBar.jsx";

function Home() {
  return (
    <div
      className={
        "w-screen h-screen bg-home-background bg-no-repeat bg-cover bg-center flex flex-col gap-[10rem]"
      }
    >
      <HomeNavbar />

      <div
        className={
          "w-screen h-[50%] bg-black bg-opacity-[0.22] flex flex-col justify-center items-center gap-16"
        }
      >
        <p className={"font-extrabold text-4xl text-white"}>
          Explore a diverse selection of restaurants
        </p>
        <SearchBar placeHolder={"Choose your city"} />
      </div>
    </div>
  );
}

export default Home;
