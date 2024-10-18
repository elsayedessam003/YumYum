import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import { BiHomeAlt } from "react-icons/bi";
import { BsBuilding, BsTelephone } from "react-icons/bs";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import axioIinstance from "../../config/axios.instance.js";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserProvider.jsx";

AddressCard.propTypes = {
  address: PropTypes.object.isRequired,
  index: PropTypes.number,
  userId: PropTypes.string,
  setAddress: PropTypes.func,
};

function AddressCard({ address, index, userId, setAddress, setIsAdding }) {
  const active = false;
  const { user, setUser } = useContext(UserContext);

  async function handleDelete() {
    const token = Cookies.get("token");

    try {
      const res = await axioIinstance.delete(
        `/users/${user._id}/addresses/${address._id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (res.status === 200) {
        toast.success("Address deleted.");

        const { status, data } = await axioIinstance(`/user/${user._id}`);

        if (status === 200) {
          Cookies.set("user", JSON.stringify(data.data));
          setUser(data.data);
        }
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  function handleEdit() {
    setAddress(address);
    setIsAdding(true);
  }

  return (
    <div className="flex items-center gap-20">
      <p className="text-xl font-medium text-nowrap text-black/70">
        Address {index + 1}
      </p>

      <div
        className={`bg-white p-8 w-full flex flex-col gap-4 border rounded-xl ${active ? "border-project-orange" : null}`}
      >
        <div className={"flex flex-col gap-2"}>
          <div className={"grid grid-cols-2"}>
            <div className={"flex items-center gap-2"}>
              <BiHomeAlt
                className={`text-2xl ${active ? "text-project-orange" : null}`}
              />{" "}
              <p className={"text-lg"}>
                {address.city}, {address.street}
              </p>
            </div>

            <div className={"flex items-center gap-2"}>
              <HiOutlineOfficeBuilding className={"text-2xl"} />
              <p className={"text-lg"}>
                Building {address.buildingNo}, Floor {address.floorNo}
              </p>
            </div>
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
              className={"hover:bg-project-red/5 text-project-red font-medium"}
              onClick={handleDelete}
            >
              Delete
            </Button>

            <Button
              color={"white"}
              rounding={"full"}
              className={"disabled:bg-project-orange/70"}
              onClick={handleEdit}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
