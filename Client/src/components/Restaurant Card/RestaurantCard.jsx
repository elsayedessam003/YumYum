import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = ({ name, rating, reviews, time, fee, imgSrc, profileImgSrc }) => {
    return (
        <div className="rounded-lg flex w-[339px] flex-col items-start gap-[23px] hover:shadow-lg">
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
                        <h3 className="text-base font-semibold">{name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-2">★ {rating}</span>
                            <span>({reviews})</span>
                        </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MdDeliveryDining className="mr-2" />
                        <span className="mr-2">{time} min</span>
                        <span>• {fee} Fee</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
