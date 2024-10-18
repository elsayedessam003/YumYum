import { useState, useEffect } from "react";
import ViewOrderCard from "./ViewOrderCard";
import ProfileSection from "../MainContent/ProfileSection.jsx";
import { IoIosListBox } from "react-icons/io";

const MyOrders = () => {
  const [orders] = useState([
    {
      restaurantName: "Burger Queen",
      restaurantImage: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
      orderId: "2131214",
      date: "24/10/2024",
      status: "Pending",
      totalAmount: 50.99,
      dishes: [
        {
          image: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
          name: "Special dish test",
          description: "3 pieces chicken, 1 cola, 1 ketchup, perfect for 3 people. Only for a limited time!",
          quantity: 2,
          price: 19.99,
        },
        {
          image: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
          name: "Special dish test 2",
          description: "3 pieces chicken, 1 cola, 1 ketchup, perfect for 3 people. Only for a limited time!",
          quantity: 2,
          price: 19.99,
        },
      ],
    },
    {
      restaurantName: "Pizza Palace",
      restaurantImage: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
      orderId: "2131215",
      date: "25/10/2024",
      status: "Delivered",
      totalAmount: 45.50,
      dishes: [
        {
          image: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
          name: "Pepperoni Pizza",
          description: "12-inch pizza with extra cheese and pepperoni.",
          quantity: 1,
          price: 25.50,
        },
        {
          image: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
          name: "Garlic Bread",
          description: "6 pieces of freshly baked garlic bread.",
          quantity: 1,
          price: 8.00,
        },
        {
          image: "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
          name: "Coke",
          description: "1-liter bottle of Coca-Cola.",
          quantity: 1,
          price: 5.00,
        },
      ],
    },
  ]);

  useEffect(() => {
  }, [orders]);

  return (
    <div>
      <ProfileSection
      icon={<IoIosListBox />}
      text={"Orders List"}
      type={"default"}

    >
    </ProfileSection>
    
    <div className="flex flex-col gap-8">
        {orders.map((order, index) => (
          <ProfileSection key={index} type="border">
            <ViewOrderCard order={order} />
          </ProfileSection>
        ))}
    </div>
    </div>
    
  );
};

export default MyOrders;