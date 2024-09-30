import RestaurantsFilterSection from "../../components/RestaurantsFilterSection/RestaurantsFilterSection.jsx";

function Restaurants() {
  return (
    <div className={"flex h-screen"}>
      <div className={"flex-grow-[1] h-full"}>
        <RestaurantsFilterSection />
      </div>

      <div className={"flex-grow-[9]"}></div>
    </div>
  );
}

export default Restaurants;
