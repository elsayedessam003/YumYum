import { PiGearBold } from "react-icons/pi";
import Switch from "../Switch/Switch.jsx";
import { useState } from "react";
import { FaDoorOpen } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import RadioItem from "../Radio/RadioItem.jsx";
import RadioGroup from "../Radio/RadioGroup.jsx";

function RestaurantsFilterSection() {
  const [isOpened, setIsOpened] = useState(false);
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [choice, setChoice] = useState("");
  return (
    <div
      className={
        "h-fit flex flex-col items-center bg-white w-fit px-10 sticky border-t top-[105.59px]"
      }
    >
      <p
        className={
          "text-project-orange flex justify-center items-center font-bold text-xl gap-3 py-8 border-b-2 border-b-black border-opacity-10 w-full"
        }
      >
        <PiGearBold className={"text-3xl"} /> FILTERS
      </p>

      <div
        className={
          "flex flex-col justify-center items-center text-lg gap-3 py-8 border-b-2 border-b-black border-opacity-10 w-full"
        }
      >
        <p className={"font-medium underline"}>STATUS</p>
        <div className={"flex w-full"}>
          <Switch
            toggle={isOpened}
            setToggle={setIsOpened}
            icon={<FaDoorOpen />}
          >
            Open Now
          </Switch>
        </div>
      </div>

      <div
        className={
          "flex flex-col justify-center items-center text-lg gap-3 py-8 border-b-2 border-b-black border-opacity-10 w-full"
        }
      >
        <p className={"font-medium underline"}>SORT BY</p>
        <RadioGroup
          choice={choice}
          setChoice={setChoice}
          className={"flex flex-col gap-4 items-start w-full"}
        >
          <RadioItem value={"opt1"} label={"Rating"} />
          <RadioItem
            value={"opt2"}
            label={
              <p>
                Price <span className={"font-light text-base"}>(Higher)</span>
              </p>
            }
          />
          <RadioItem
            value={"opt3"}
            label={
              <p>
                Price <span className={"font-light text-base"}>(Lower)</span>
              </p>
            }
          />
        </RadioGroup>
      </div>

      <div
        className={
          "flex flex-col justify-center items-start text-lg gap-3 py-8 border-opacity-10 w-full"
        }
      >
        <Switch
          toggle={onlyOffers}
          setToggle={setOnlyOffers}
          icon={<BiSolidOffer />}
        >
          Only Offers
        </Switch>
      </div>
    </div>
  );
}

export default RestaurantsFilterSection;
