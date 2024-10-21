import { useState } from "react";
import ManageOrderCard from "./ManageOrderCard.jsx";
import ProfileSection from "../MainContent/ProfileSection.jsx";

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      restaurantName: "Burger Queen",
      restaurantImage:
        "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
      orderId: "2131214",
      date: "24/10/2024",
      status: "Pending",
      totalAmount: 50.99,
      dishes: [
        {
          image:
            "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
          name: "Special dish test",
          description: "3 pieces chicken, 1 cola, 1 ketchup",
          quantity: 2,
          price: 19.99,
        },
        {
          image:
            "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
          name: "Special dish test 2",
          description: "3 pieces chicken, 1 cola, 1 ketchup",
          quantity: 2,
          price: 19.99,
        },
      ],
    },
  ]);

  const [activeTab, setActiveTab] = useState("Pending");

  const handleReadyForDelivery = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId
          ? { ...order, status: "Ready For Delivery" }
          : order,
      ),
    );
  };

  const filteredOrders =
    activeTab === "Pending"
      ? orders.filter((order) => order.status === "Pending")
      : orders.filter((order) => order.status === "Ready For Delivery");

  return (
    <div className="relative">
      <div className="flex space-x-4 relative pb-2">
        <button
          onClick={() => setActiveTab("Pending")}
          className={`text-2xl py-2 px-4 ${
            activeTab === "Pending" ? "text-project-orange" : "text-gray-500"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab("Finished")}
          className={`text-2xl py-2 px-4 ${
            activeTab === "Finished" ? "text-project-orange" : "text-gray-500"
          }`}
        >
          Finished
        </button>

        <span
          className={`absolute bottom-0 left-0 h-1 bg-project-orange transition-transform duration-300 ease-in-out`}
          style={{
            width: activeTab === "Pending" ? "90px" : "110px",
            transform:
              activeTab === "Pending" ? "translateX(0)" : "translateX(120px)",
          }}
        ></span>
      </div>

      <div className="mt-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <ProfileSection type={"border"}>
              <ManageOrderCard
                key={order.orderId}
                order={order}
                onReadyForDelivery={handleReadyForDelivery}
              />
            </ProfileSection>
          ))
        ) : (
          <p className="text-xl font-semibold text-nowrap text-project-orange">
            No orders in this tab.
          </p>
        )}
      </div>
    </div>
  );
};

export default ManageOrdersPage;
