import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProfileSection from "../MainContent/ProfileSection.jsx";
import Input from "../Input.jsx";
import InputSection from "./InputSection.jsx";
import TextArea from "../TextArea.jsx";
import ImageInput from "../ImageInput.jsx";
import Select from "../Select/Select.jsx";
import { FiPlusCircle } from "react-icons/fi";
import Category from "./Category.jsx";
import { toast } from "react-hot-toast";
import Button from "../Button/Button.jsx";
import DishCreation from "../DishCreation/DishCreation.jsx";
import Dish from "../DishCreation/Dish.jsx";
import axios from "axios";
import axiosInstance from "../../config/axios.instance.js";
import { UserContext } from "../../context/UserProvider.jsx";
import { Form } from "react-router-dom";

RestaurantCreation.propTypes = {};

function RestaurantCreation(props) {
  const { user } = useContext(UserContext);

  // General Info
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
  const [logoImage, setLogoImage] = useState(null);

  // Restaurant details
  const [openingHour, setOpeningHour] = useState(null);
  const [closingHour, setClosingHour] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [banner, setBanner] = useState(null);

  // Restaurant Menu
  const [categoryList, setCategoryList] = useState([
    "Pizza",
    "Meat",
    "Dessert",
    "Drinks",
    "Healthy",
    "Fast food",
    "sushi",
    "Vegan",
  ]);
  const [category, setCategory] = useState("");
  const [isAddingDish, setIsAddingDish] = useState(false);
  const [restaurantDishes, setRestaurantDishes] = useState([]);
  const [manageDish, setManageDish] = useState(null);

  function addNewCategory() {
    if (category) {
      const word =
        category[0].toUpperCase() +
        category.slice(1, category.length).toLowerCase();

      if (!categoryList.includes(word)) {
        setCategoryList((currentList) => [...currentList, word]);
        setCategory("");
      } else {
        toast.error("Category already added.");
      }
    } else {
      toast.error("Please enter the name of the category");
    }
  }

  function handleCreateNewDish() {
    setIsAddingDish(true);
  }

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

  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("/Cities.json").then((r) => {
      const data = r.data;
      const temp = data.map((city) => {
        return { name: city, value: city };
      });
      setCities(temp);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    /*{
  "address": {
    "city": "Foodtown",
    "street": "123 Food St."
  },
  "deliveryTime": 22,
  "rating": 4.5,
  "description": "Enjoy the best pizza in town!",
  "ratingCount": 100,
  "contact": "+201001235679",
  "name": "Pizza Palace",
  "deliverFees": 20
    }
     */

    const restaurant = {
      createdBy: user._id,
      name: restaurantName,
      description: restaurantDescription,
      openingHours: Number(openingHour),
      closingHours: Number(closingHour),
      deliveryTime: Number(deliveryTime),
      deliveryFees: Number(deliveryFee),
      address: {
        city: city,
        street: location,
      },
      contact: phoneNumber,
    };

    try {
      const { status, data } = await axiosInstance.post(
        "/restaurants",
        restaurant,
      );

      if (status > 199 && status <= 299) {
        const restaurantId = data.data.restaurant._id;

        // Sending the images
        console.log(logoImage, thumbnail);
        const formData = new FormData();
        formData.append("profileImage", logoImage);
        formData.append("backgroundImage", thumbnail);

        try {
          const { status, data } = await axiosInstance.post(
            `/restaurants/${restaurantId}/upload`,
            formData,
          );

          if (status > 199 && status <= 299) {
            toast.success("restaurant Created!");
          }
        } catch (e) {
          console.error(e.message);
          toast.error(e.message);
        }

        // Sending the dishes
        for (const dish of restaurantDishes) {
          const dishData = {
            restaurantId: restaurantId,
            name: dish.name,
            price: dish.price,
            description: dish.description,
            categories: dish.categories,
          };
          try {
            const { status, data } = await axiosInstance.post(
              "/dishes",
              dishData,
            );

            if (status > 199 && status <= 299) {
              toast.success(`dish ${dish.name} added`);
              console.log(data.data);
              const dishId = data.data.dish._id;
              const dishImageData = new FormData();
              dishImageData.append("image", dish.image);

              try {
                const { status, data } = await axiosInstance.post(
                  `/dishes/${dishId}`,
                  dishImageData,
                );

                if (status > 199 && status <= 299) {
                  toast.success(`dish ${dish.name} image sent!`);
                }
              } catch (e) {
                console.error(e.message);
                toast.error(e.message);
              }
            } else {
              break;
            }
          } catch (e) {
            console.error(e.message);
            toast.error(e.message);
          }
        }
      }
    } catch (e) {
      console.error(e.message);
      toast.error(e.message);
    }
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

        <InputSection text={"City"}>
          <Select
            placeHolder={"Choose city"}
            isRequired={true}
            items={cities}
            setValue={setCity}
          />
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
            setValue={setThumbnail}
          />
        </InputSection>

        <InputSection text={"Banner"}>
          <ImageInput
            text={"your logo"}
            size={"large"}
            isRequired={true}
            setValue={setBanner}
          />
        </InputSection>
      </ProfileSection>

      <ProfileSection
        text={"Restaurant menu"}
        type={"border"}
        className={"flex flex-col gap-8"}
      >
        <InputSection text={"Categories"}>
          <Input
            value={category}
            setValue={setCategory}
            className={"w-full"}
            placeHolder={"Add a new category"}
            icon={
              <FiPlusCircle
                className={"cursor-pointer outline-0"}
                onClick={addNewCategory}
              />
            }
            onKeyUp={(e) => {
              e.key === "Enter" ? addNewCategory() : null;
            }}
          ></Input>
        </InputSection>

        <div className={"flex gap-4 flex-wrap"}>
          {categoryList.map((item, index) => (
            <Category
              key={index}
              name={item}
              index={index}
              setItems={setCategoryList}
            />
          ))}
        </div>

        <InputSection text={"Dishes"} />
        <div className={"flex flex-col"}>
          {restaurantDishes.map((dish, index) => (
            <Dish
              dish={dish}
              setIsAddingDish={setIsAddingDish}
              setManageDish={setManageDish}
              index={index}
              key={index}
              setRestaurantDishes={setRestaurantDishes}
            />
          ))}
        </div>

        <div className={"flex items-center justify-center"}>
          <Button
            variant={"text"}
            className={"w-fit gap-4 hover:text-project-orange/70"}
            size={"large"}
            onClick={handleCreateNewDish}
          >
            <FiPlusCircle className={"text-3xl"} />
            <p className={"text-xl font-medium"}>Add a new dish</p>
          </Button>
        </div>

        {isAddingDish && (
          <DishCreation
            dish={restaurantDishes[manageDish]}
            index={manageDish}
            setDish={setManageDish}
            setIsOpened={setIsAddingDish}
            setRestaurantDishes={setRestaurantDishes}
            categories={categoryList}
          />
        )}
      </ProfileSection>

      <div className={"flex justify-center items-center"}>
        <Button
          color={"white"}
          className={"py-4 px-40 rounded-xl"}
          type={"submit"}
        >
          Save restaurant
        </Button>
      </div>
    </form>
  );
}

export default RestaurantCreation;
