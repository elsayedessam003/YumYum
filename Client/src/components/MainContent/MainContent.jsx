import PropTypes from "prop-types";
import AccountInfo from "../AccountInfo/AccountInfo";
import AddressInfo from "../AccountInfo/AddressInfo";
import MyRestaurants from "../My Restaurants/myRestaurants";
import ProfileSection from "./ProfileSection.jsx";

const MainContent = ({ activeSection }) => {
  return (
    <div className="w-full py-16 px-24">
      {activeSection === "accountInfo" && (
        <div className={"flex flex-col gap-10"}>
          <AccountInfo />
          <AddressInfo />
        </div>
      )}

      {activeSection === "myOrders" && <div>My Orders Content</div>}

      {activeSection === "myRestaurants" && (
        <>
          <MyRestaurants />
        </>
      )}
    </div>
  );
};

MainContent.propTypes = {
  activeSection: PropTypes.oneOf(["accountInfo", "myOrders", "myRestaurants"])
    .isRequired,
};

export default MainContent;
