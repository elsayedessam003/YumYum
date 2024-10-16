import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input.jsx";
import Button from "../Button/Button.jsx";

AddressForm.propTypes = {};

function AddressForm(props) {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [addressInfo, setAddressInfo] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("test");
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
          placeHolder={"Area"}
          isRequired={true}
          value={area}
          setValue={setArea}
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
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default AddressForm;
