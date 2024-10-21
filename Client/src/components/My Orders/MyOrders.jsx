import { useState, useEffect, useContext } from "react";
import ViewOrderCard from "./ViewOrderCard";
import ProfileSection from "../MainContent/ProfileSection.jsx";
import { FaClipboardList } from "react-icons/fa";
import axiosInstance from "../../config/axios.instance.js";
import { UserContext } from "../../context/UserProvider.jsx";

const MyOrders = () => {
  const { token } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      try {
        const { status, data } = await axiosInstance.get("orders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (199 < status <= 299) {
          setOrders(data.data);
          console.log(data.data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    getOrders();
  }, []);

  return (
    <div>
      <ProfileSection
        icon={<FaClipboardList />}
        text={"Orders List"}
      ></ProfileSection>

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <ProfileSection key={order._id} type="border">
            <ViewOrderCard order={order} />
          </ProfileSection>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
