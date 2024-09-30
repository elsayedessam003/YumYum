import PropTypes from "prop-types";
import { FaCartShopping } from "react-icons/fa6";

CartButton.propTypes = {
  itemsNumber: PropTypes.number.isRequired,
};

function CartButton({ itemsNumber }) {
  return (
    <div className={"flex justify-center items-center relative group"}>
      <FaCartShopping
        className={
          "text-3xl hover:text-project-orange transition-colors ease-linear cursor-pointer"
        }
      />
      <div
        className={
          "bg-project-orange absolute w-6 h-6 rounded-full flex justify-center items-center text-white -translate-x-1/3 -translate-y-1/2 cursor-pointer group-hover:bg-black transition-colors ease-linear"
        }
      >
        {itemsNumber}
      </div>
    </div>
  );
}

export default CartButton;
