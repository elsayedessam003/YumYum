import { MdDeliveryDining } from "react-icons/md";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

RestaurantCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.number,
  time: PropTypes.number,
  fee: PropTypes.number,
  imgSrc: PropTypes.string,
  profileImgSrc: PropTypes.string,
};

function RestaurantCard({
  name,
  rating,
  reviews,
  time,
  fee,
  imgSrc,
  profileImgSrc,
}) {
  return (
    <div className="rounded-lg flex flex-grow flex-col items-start gap-[23px] hover:shadow-lg hover:scale-105 transition-all ease-linear p-4 cursor-pointer group">
      <div className={"relative self-stretch"}>
        <img
          src={imgSrc}
          alt={name}
          className="h-[225px] w-full rounded-[10px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>

      <div className="flex items-center gap-[9px] self-stretch">
        <img
          src={profileImgSrc}
          alt={`${name} profile`}
          className="w-[62px] h-[62px] rounded-full bg-cover bg-no-repeat"
        />

        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex justify-between w-full">
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex items-center text-lg">
              <span className="mr-2">★ {rating}</span>
              <span>(+{reviews})</span>
            </div>
          </div>

          <div className="flex items-center text-gray-500 mt-1">
            <MdDeliveryDining className="mr-2" />
            <span className="mr-2">{time} min</span>
            <span>• {fee}£ Fee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
