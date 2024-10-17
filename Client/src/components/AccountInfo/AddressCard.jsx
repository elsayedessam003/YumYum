import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";
import { BiHomeAlt } from "react-icons/bi";
import { BsBuilding, BsTelephone } from "react-icons/bs";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import axioIinstance from "../../config/axios.instance.js";

AddressCard.propTypes = {
  address: PropTypes.object.isRequired,
  index: PropTypes.number,
  userId: PropTypes.string,
  setAddresses: PropTypes.func,
};

function AddressCard({ address, index, userId, setAddresses }) {
  async function handleDelete() {
    const token = Cookies.get("token");

    try {
      const res = await axioIinstance.delete(
        `/users/${userId}/addresses/${address._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 200) {
        toast.success("Address deleted.");
        Cookies.set("user", JSON.stringify(res.data), {
          expires: 1,
        });
        setAddresses(res.data.addresses);
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <div className="flex items-center gap-4 space-x-4">
      <pre className="text-lg font-sans font-semibold">Address {index + 1}</pre>

      <div className="bg-white p-4 w-full flex flex-col border rounded-2xl shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BiHomeAlt className="text-2xl text-gray-700" />
            <p className="font-medium text-lg">
              {address.city}, {address.street}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BsBuilding className="text-2xl text-gray-700" />
            <p>
              Building {address.building}, Floor {address.floor}
            </p>
          </div>
        </div>

        <div className="text-gray-500 mt-1">
          <p>{address.addressInfo}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <BsTelephone className="text-xl text-gray-700" />
            <p>{address.phoneNo}</p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="text"
              className="text-red-600 font-semibold"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="text"
              className="bg-white text-project-orange font-semibold px-4 py-2 rounded-full hover:bg-project-orange hover:text-white"
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
