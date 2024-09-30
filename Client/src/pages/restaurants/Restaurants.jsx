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
          className={"h-[30rem] bg-no-repeat bg-cover p-20"}
        >
          <section className={"flex text-5xl font-bold text-white"}>
            <p>
              Choose your favourite{" "}
              <span className={"text-project-orange"}>Category</span>!
            </p>
          </section>
        </div>

        <div
          className={
            "flex items-center gap-4 font-semibold text-4xl px-4 py-12"
          }
        >
          <p>Restaurants</p>
          <BsDot className={"font-normal text-xl"} />
          <section className={"font-normal text-2xl"}>9 results</section>
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
