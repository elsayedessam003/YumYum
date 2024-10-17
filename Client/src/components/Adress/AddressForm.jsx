import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input.jsx";
import Button from "../Button/Button.jsx";
import axioIinstance from "../../config/axios.instance.js";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context/UserProvider.jsx";

AddressForm.propTypes = {
  setAddAddress: PropTypes.func,
  address: PropTypes.object,
};

function AddressForm({ setAddAddress, address, setAddress }) {
  const { user, setUser } = useContext(UserContext);

  // The data in each field
  const [city, setCity] = useState(address?.city || "");
  const [street, setStreet] = useState(address?.street || "");
  const [addressInfo, setAddressInfo] = useState(address?.addressInfo || "");
  const [buildingNumber, setBuildingNumber] = useState(
    address?.buildingNo || "",
  );
  const [floorNumber, setFloorNumber] = useState(address?.floorNo || "");
  const [phoneNumber, setPhoneNumber] = useState(address?.phoneNo || "");

  function handleSubmit(e) {
    e.preventDefault();

    const token = Cookies.get("token");

    async function sendAddress() {
      try {
        const res = await axioIinstance.post(
          `/users/${user._id}/addresses`,
          {
            city,
            street,
            addressInfo,
            buildingNo: buildingNumber,
            floorNo: floorNumber,
            phoneNo: phoneNumber,
          },
          { headers: { Authorization: `Bearer ${token}` } },
        );

        if (res.status === 200) {
          toast.success("Address added!");
          Cookies.set("user", JSON.stringify(res.data), {
            expires: 1,
          });
          const { status, data } = await axioIinstance(`/user/${user._id}`);

          if (status === 200) {
            Cookies.set("user", JSON.stringify(data.data));
            setUser(data.data);
            setAddAddress(false);
          }
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    sendAddress();
  }

  function handleCancel() {
    setAddAddress(false);
    setAddress(null);
  }

  return (
    <form
      className={"flex flex-col px-12 py-16 gap-12"}
      onSubmit={handleSubmit}
    >
      <p className={"text-3xl font-semibold"}>Address details:</p>

      <div className={"grid grid-cols-2 gap-6"}>
        <Input
          placeHolder={"City"}
          isRequired={true}
          value={city}
          setValue={setCity}
        />
        <Input
          placeHolder={"Street"}
          isRequired={true}
          value={street}
          setValue={setStreet}
        />
        <Input
          placeHolder={"Address Info"}
          className={"col-span-2 w-full"}
          isRequired={true}
          value={addressInfo}
          setValue={setAddressInfo}
        />
        <Input
          placeHolder={"Building No."}
          isRequired={true}
          value={buildingNumber}
          setValue={setBuildingNumber}
        />
        <Input
          placeHolder={"Floor No."}
          isRequired={true}
          value={floorNumber}
          setValue={setFloorNumber}
        />
        <Input
          placeHolder={"Phone No."}
          className={"col-span-2 w-full"}
          isRequired={true}
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
      </div>

      <div className={"flex justify-center gap-10 items-center"}>
        <Button
          color={"white"}
          className={"rounded-xl flex-1 py-4 font-semibold"}
        >
          Save Address
        </Button>
        <Button
          color={"black"}
          variant={"outline"}
          className={
            "text-opacity-60 flex-1 py-4 rounded-xl hover:bg-project-red/10 border-project-red font-semibold"
          }
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default AddressForm;
