import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input.jsx";
import Button from "../Button/Button.jsx";
import axioIinstance from "../../config/axios.instance.js";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

AddressForm.propTypes = {
  user: PropTypes.object,
};

function AddressForm({ user, setAddAddress }) {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [addressInfo, setAddressInfo] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    sendAddress();
  }

  function handleCancel() {
    setAddAddress(false);
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
