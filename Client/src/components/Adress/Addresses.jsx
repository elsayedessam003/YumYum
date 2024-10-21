import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import AddressCard from "./AddressCard.jsx";
import address from "./Address.jsx";
import { CiCirclePlus } from "react-icons/ci";
import { UserContext } from "../../context/UserProvider.jsx";
import { toast } from "react-hot-toast";
import axiosInstance from "../../config/axios.instance.js";
import { useNavigate } from "react-router-dom";

Addresses.propTypes = { setAddresses: PropTypes.func };

function Addresses({ setAddAddress, setAddress }) {
  const { user, cart } = useContext(UserContext);
  const addresses = user.addresses;
  const [selectedCard, setSelectedCard] = useState(0);
  setAddress(null);

  function getCards() {
    return addresses.map((address, index) => (
      <AddressCard
        address={address}
        currentIndex={selectedCard}
        index={index}
        setCurrentIndex={setSelectedCard}
        userId={user._id}
        setAddAddress={setAddAddress}
        setAddress={setAddress}
        key={address._id}
      />
    ));
  }

  async function handlePayment() {
    if (cart && cart.items.length) {
      const products = [];

      for (const item of cart.items) {
        const product = {};
        product["quantity"] = item.quantity;
        product["_id"] = item.productId;

        const { status, data } = await axiosInstance.get(
          `dishes/${item.productId}`,
        );

        if (199 < status <= 299) {
          const dish = data.data.dish;

          product["name"] = dish.name;
          product["price"] = dish.price;
          products.push(product);
        }
      }

      console.log(products);
      try {
        const { status, data } = await axiosInstance.post(
          "payments/create-checkout-session",
          { products: products },
        );

        if (199 < status <= 299) {
          const url = data.data.url;
          window.location.href = url;
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      toast.error("Please add some items to your cart first.");
    }
  }

  function handleAddNewAddress() {
    setAddAddress(true);
  }

  return (
    <div className={"p-8 flex flex-col gap-12"}>
      <p className={"text-3xl font-semibold"}>Select an address:</p>

      <div
        className={
          "max-h-[30rem] overflow-y-scroll flex flex-col gap-4 custom-scrollbar pr-4"
        }
      >
        {getCards()}

        <Button
          variant={"text"}
          color={"black"}
          size={"large"}
          className={"rounded-xl py-6 border"}
          onClick={handleAddNewAddress}
        >
          <CiCirclePlus
            className={"text-3xl stroke-[0.5px] text-project-orange"}
          />
          <p>Add new address</p>
        </Button>
      </div>

      <Button
        color={"white"}
        size={"large"}
        className={"rounded-xl font-semibold text-2xl py-6"}
        onClick={handlePayment}
      >
        Proceed to payment
      </Button>
    </div>
  );
}

export default Addresses;
