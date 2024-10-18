import React, { useState } from "react";
import PropTypes from "prop-types";
import ProfileSection from "../MainContent/ProfileSection.jsx";
import Input from "../Input.jsx";
import InputSection from "./InputSection.jsx";
import TextArea from "../TextArea.jsx";
import ImageInput from "../ImageInput.jsx";
import Select from "../Select/Select.jsx";

RestaurantCreation.propTypes = {};

function RestaurantCreation(props) {
  // General Info
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
  const [logoImage, setLogoImage] = useState(null);

  // Restaurant details
  const [openingHour, setOpeningHour] = useState(null);
  const [closingHour, setClosingHour] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [banner, setBanner] = useState(null);

  // Restaurant Menu
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");

  const hours = [
    { name: "12 AM", value: 0 },
    { name: "1 AM", value: 1 },
    { name: "2 AM", value: 2 },
    { name: "3 AM", value: 3 },
    { name: "4 AM", value: 4 },
    { name: "5 AM", value: 5 },
    { name: "6 AM", value: 6 },
    { name: "7 AM", value: 7 },
    { name: "8 AM", value: 8 },
    { name: "9 AM", value: 9 },
    { name: "10 AM", value: 10 },
    { name: "11 AM", value: 11 },
    { name: "12 PM", value: 12 },
    { name: "1 PM", value: 13 },
    { name: "2 PM", value: 14 },
    { name: "3 PM", value: 15 },
    { name: "4 PM", value: 16 },
    { name: "5 PM", value: 17 },
    { name: "6 PM", value: 18 },
    { name: "7 PM", value: 19 },
    { name: "8 PM", value: 20 },
    { name: "9 PM", value: 21 },
    { name: "10 PM", value: 22 },
    { name: "11 PM", value: 23 },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-8"}>
      <ProfileSection
        text={"General Info"}
        type={"border"}
        className={"flex flex-col gap-8"}
      >
        <InputSection text={"Name"}>
          <Input
            className={"w-full"}
            placeHolder={"Write your restaurant name"}
            isRequired={true}
            value={restaurantName}
            setValue={setRestaurantName}
          />
        </InputSection>

        <InputSection text={"Description"} type={"start"}>
          <TextArea
            placeHolder={"Write your restaurant description"}
            className={"w-full"}
            isRequired={true}
            value={restaurantDescription}
            setValue={setRestaurantDescription}
          />
        </InputSection>

        <InputSection text={"Logo"}>
          <ImageInput
            text={"your logo"}
            size={"small"}
            isRequired={true}
            setValue={setLogoImage}
          />
        </InputSection>
      </ProfileSection>

      <ProfileSection
        text={"Restaurant details"}
        type={"border"}
        className={"flex flex-col gap-8"}
      >
        <InputSection text={"Opened"} className={"grid grid-cols-2 gap-8"}>
          <div className={"flex items-center gap-8"}>
            <p className={"text-xl text-black/60"}>From:</p>
            <Select
              placeHolder={"11:00 AM"}
              items={hours}
              setValue={setOpeningHour}
            />
          </div>

          <div className={"flex items-center gap-8"}>
            <p className={"text-xl text-black/60"}>To:</p>
            <Select
              placeHolder={"09:00 PM"}
              items={hours}
              setValue={setClosingHour}
            />
          </div>
        </InputSection>

        <InputSection text={"Delivery"} className={"grid grid-cols-2 gap-8"}>
          <div className={"flex items-center gap-8"}>
            <p className={"text-xl text-black/60"}>Time:</p>
            <Input
              type={"number"}
              className={"w-full no-arrows"}
              placeHolder={"Time in mins"}
              isRequired={true}
              value={deliveryTime}
              setValue={setDeliveryTime}
            />
          </div>

          <div className={"flex items-center gap-8"}>
            <p className={"text-xl text-black/60"}>Fee:</p>
            <Input
              type={"number"}
              className={"w-full"}
              placeHolder={"Fee in EGP"}
              isRequired={true}
              value={deliveryFee}
              setValue={setDeliveryFee}
            />
          </div>
        </InputSection>

        <InputSection text={"Location"} type={"start"}>
          <TextArea
            placeHolder={"Write your restaurant location"}
            className={"w-full"}
            isRequired={true}
            value={location}
            setValue={setLocation}
          />
        </InputSection>

        <InputSection text={"Phone"}>
          <Input
            type={"number"}
            className={"w-full"}
            placeHolder={"Write your restaurant phone number"}
            isRequired={true}
            value={phoneNumber}
            setValue={setPhoneNumber}
          />
        </InputSection>

        <InputSection text={"Thumbnail"}>
          <ImageInput
            text={"your thumbnail"}
            size={"medium"}
            isRequired={true}
            setValue={setLogoImage}
          />
        </InputSection>

        <InputSection text={"Banner"}>
          <ImageInput
            text={"your logo"}
            size={"large"}
            isRequired={true}
            setValue={setLogoImage}
          />
        </InputSection>
      </ProfileSection>

      <ProfileSection text={"Restaurant menu"} type={"border"}>
        <InputSection text={"Categories"}>
          <Input
            value={category}
            setValue={setCategory}
            className={"w-full"}
            placeHolder={"Add a new category"}
          ></Input>
        </InputSection>
      </ProfileSection>
    </form>
  );
}

export default RestaurantCreation;
