import { MdDeliveryDining } from "react-icons/md";
import PropTypes from "prop-types";

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
    <div className="rounded-lg flex w-[339px] flex-col items-start gap-[23px] hover:shadow-lg hover:scale-105 transition-all ease-linear p-4 cursor-pointer">
      <img
        src={imgSrc}
        alt={name}
        className="h-[225px] self-stretch rounded-[10px] bg-lightgray bg-center bg-cover bg-no-repeat bg-[#F2F2F2]"
      />

      <div className="flex items-center gap-[9px] self-stretch">
        <img
          src={profileImgSrc}
          alt={`${name} profile`}
          className="w-[62px] h-[62px] rounded-full bg-cover bg-no-repeat"
        />

        <div className="flex w-[268px] flex-col items-start gap-1">
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
