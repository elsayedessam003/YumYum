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
        <div
          style={{ backgroundImage: "url('/CategoriesBackground.svg')" }}
          className={"h-[30rem] bg-no-repeat bg-cover"}
        >
          <section className={"flex"}>
            Choose your favorite <section>Category</section>!
          </section>
        </div>

        <div className={"font-semibold text-4xl"}>
          Restaurants <section className={""}>9</section>
        </div>

        <div
          className={
            "grid justify-normal grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4 "
          }
        >
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
