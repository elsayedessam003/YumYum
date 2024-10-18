import { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";
import Button from "../Button/Button.jsx";
import Input from "../Input.jsx";
import axiosInstance from "../../config/axios.instance.js";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const AccountInfo = () => {
  const { user, setUser, token } = useContext(UserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditingStatus() {
    setIsEditing((currentValue) => !currentValue);
  }

  async function handleSave() {
    try {
      const { status } = await axiosInstance.put(
        `user/${user._id}`,
        {
          name: name,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (status === 200) {
        toast.success("Account updated!");

        const { status, data } = await axiosInstance.get(`/user/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (status === 200) {
          Cookies.set("user", JSON.stringify(data.data));
          setUser(data.data);
        }
      }
    } catch (e) {
      console.error(e.message);
    }

    setIsEditing(false);
  }

  return (
    <div className="flex flex-col gap-6 border p-8 rounded-3xl">
      <div className={"flex justify-between items-center"}>
        <p className={"font-semibold text-xl"}>Personal Info</p>

        {!isEditing ? (
          <Button
            color={"white"}
            rounding={"full"}
            onClick={handleEditingStatus}
          >
            Edit
          </Button>
        ) : (
          <div className={"flex gap-2"}>
            <Button color={"white"} rounding={"full"} onClick={handleSave}>
              Save
            </Button>

            <Button
              variant={"outline"}
              rounding={"full"}
              onClick={handleEditingStatus}
              className={
                "text-project-red border-project-red hover:border-project-red hover:bg-project-red/5"
              }
            >
              Cancel
            </Button>
          </div>
        )}
      </div>

      <div className={"grid grid-cols-2 text-lg"}>
        <div className={"flex flex-col"}>
          <p className={"text-black/50 font-medium"}>Full name</p>

          {!isEditing ? (
            <p className={"p-1 border border-transparent"}>{user.name}</p>
          ) : (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={
                "p-1 outline-0 border-x focus:border-project-orange rounded-l w-1/2 px-2"
              }
            />
          )}
        </div>

        <div className={"flex flex-col"}>
          <p className={"text-black/50 font-medium"}>Email address</p>

          <p className={"p-1 border-x border-transparent"}>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
