import { useContext, useRef, useState } from "react";
import AddressCard from "./AddressCard";
import { BiPlusCircle } from "react-icons/bi";
import { UserContext } from "../../context/UserProvider.jsx";
import Button from "../Button/Button.jsx";
import AddressForm from "../Adress/AddressForm.jsx";
import Address from "../Adress/Address.jsx";

const AddressInfo = () => {
  const { user } = useContext(UserContext);
  const addresses = user.addresses;
  const [isAdding, setIsAdding] = useState(false);
  const background = useRef(null);
  const [tempAddress, setTempAddress] = useState(null);

  function handleAdding() {
    setIsAdding(true);
  }

  return (
    <div className="flex flex-col gap-16 border p-8 rounded-3xl">
      {isAdding && (
        <div
          className={
            "top-0 left-0 w-full h-full z-30 bg-black/40 flex justify-center items-center fixed"
          }
          onClick={(e) => {
            if (e.target === background.current) {
              setIsAdding(false);
              setTempAddress(null);
            }
          }}
          ref={background}
        >
          <div className={"bg-white rounded-xl"}>
            <AddressForm
              setAddAddress={setIsAdding}
              address={tempAddress}
              setAddress={setTempAddress}
            />
          </div>
        </div>
      )}

      <p className="font-semibold text-xl">Address Info</p>

      <div className="w-full flex flex-col gap-8">
        {addresses.map((address, index) => (
          <div key={address._id} className="flex">
            <div className="flex-grow">
              <AddressCard
                address={address}
                index={index}
                setAddress={setTempAddress}
                setIsAdding={setIsAdding}
                userId="yourUserId"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button
          variant={"text"}
          rounding={"rounded"}
          className={"hover:bg-project-orange/5"}
          onClick={handleAdding}
        >
          <BiPlusCircle className={"text-3xl"} />{" "}
          <p className={"text-xl"}>Add new address</p>
        </Button>
      </div>
    </div>
  );
};

export default AddressInfo;
