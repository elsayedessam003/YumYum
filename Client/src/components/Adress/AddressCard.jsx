import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import { BiHomeAlt } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { BsTelephone } from "react-icons/bs";
import axioIinstance from "../../config/axios.instance.js";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { UserContext } from "../../context/UserProvider.jsx";

AddressCard.propTypes = {
  address: PropTypes.object.isRequired,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
  index: PropTypes.number,
  userId: PropTypes.string,
  setAddress: PropTypes.func,
  setAddAddress: PropTypes.func,
};

function AddressCard({
  address,
  currentIndex,
  setCurrentIndex,
  index,
  userId,
  setAddress,
  setAddAddress,
}) {
  const active = currentIndex === index;
  const { setUser } = useContext(UserContext);

  async function handleDelete() {
    const token = Cookies.get("token");

    try {
      const res = await axioIinstance.delete(
        `/users/${userId}/addresses/${address._id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (res.status === 200) {
        toast.success("Address deleted.");

        const { status, data } = await axioIinstance(`/user/${userId}`);

        if (status === 200) {
          Cookies.set("user", JSON.stringify(data.data));
          setUser(data.data);
        }
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  function handleClick() {
    setCurrentIndex(index);
  }

  function handleEdit() {
    setAddress(address);
    setAddAddress(true);
  }

  return (
    <div
      className={`bg-white p-4 w-[32rem] flex flex-col gap-4 border rounded-xl ${active ? "border-project-orange" : null}`}
    >
      <div className={"flex flex-col gap-2"}>
        <div className={"flex w-full justify-between"}>
          <div className={"flex items-center gap-2"}>
            <BiHomeAlt
              className={`text-2xl ${active ? "text-project-orange" : null}`}
            />{" "}
            <p className={"text-lg"}>
              {address.city}, {address.street}
            </p>
          </div>

          <Button
            variant={"text"}
            size={"large"}
            rounding={"full"}
            className={"text-project-red hover:bg-project-red/5 px-1"}
            onClick={handleDelete}
          >
            <RxCross1 className={"font-semibold"} />
          </Button>
        </div>

        <div className={"text-black/60 pl-1"}>
          <p>{address.addressInfo}</p>
        </div>
      </div>

      <div className={"text-lg flex justify-between items-center"}>
        <div className={"flex items-center gap-2"}>
          <BsTelephone
            className={`text-2xl ${active ? "text-project-orange" : null}`}
          />{" "}
          <p>{address.phoneNo}</p>
        </div>

        <div className={"flex gap-2"}>
          <Button
            variant={"text"}
            rounding={"full"}
            className={"hover:bg-project-orange/5"}
            onClick={handleEdit}
          >
            Edit
          </Button>

          <Button
            color={"white"}
            rounding={"full"}
            disabled={active}
            className={"disabled:bg-project-orange/70"}
            onClick={handleClick}
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
