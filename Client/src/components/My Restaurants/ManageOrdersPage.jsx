import { useEffect, useState } from "react";
import ManageOrderCard from "./ManageOrderCard.jsx";
import ProfileSection from "../MainContent/ProfileSection.jsx";
import axiosInstance from "../../config/axios.instance.js";

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("Pending");

  useEffect(() => {
    async function getOrders() {
      try {
        const { status, data } = await axiosInstance.get("orders");

        if (199 < status <= 299) {
          setOrders(data.data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    getOrders();
  }, []);

  return (
    <>
      {orders ? (
        <div className="relative">
          <div className="flex space-x-4 relative pb-2">
            <button
              onClick={() => setActiveTab("Pending")}
              className={`text-2xl py-2 px-4 ${
                activeTab === "Pending"
                  ? "text-project-orange"
                  : "text-gray-500"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("Finished")}
              className={`text-2xl py-2 px-4 ${
                activeTab === "Finished"
                  ? "text-project-orange"
                  : "text-gray-500"
              }`}
            >
              Finished
            </button>

            <span
              className={`absolute bottom-0 left-0 h-1 bg-project-orange transition-transform duration-300 ease-in-out`}
              style={{
                width: activeTab === "Pending" ? "90px" : "110px",
                transform:
                  activeTab === "Pending"
                    ? "translateX(0)"
                    : "translateX(120px)",
              }}
            ></span>
          </div>

          <div className="mt-4"></div>
        </div>
      ) : null}
    </>
  );
};

export default ManageOrdersPage;
