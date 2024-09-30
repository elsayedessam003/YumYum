import RestaurantsFilterSection from "../../components/RestaurantsFilterSection/RestaurantsFilterSection.jsx";
import RestaurantCard from "../../components/Restaurant Card/RestaurantCard.jsx";
import { BsDot } from "react-icons/bs";
import backGround from "/CategoriesBackground.svg";

function Restaurants() {
  return (
    <div className={"flex"}>
      <div className={"w-1/4 min-w-[20rem] h-full"}>
        <RestaurantsFilterSection />
      </div>

      <div className={"w-full overflow-hidden"}>
        <div>
          <img src={backGround} alt="" />
        </div>

        <div className={"flex flex-wrap justify-center items-center gap-4"}>
          <div
            className={
              "flex items-center w-full text-4xl font-semibold text-center p-4"
            }
          >
            Restaurants{" "}
            <section className={"flex items-center text-base h-full"}>
              <BsDot /> <p>12 results</p>
            </section>
          </div>

          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
          <RestaurantCard
            name={"Potato"}
            fee={9.99}
            imgSrc={"/public/Frame 48.png"}
            profileImgSrc={"/public/Ellipse 5.png"}
            rating={4.2}
            reviews={200}
            time={22}
          />
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
