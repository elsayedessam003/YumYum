import PropTypes from "prop-types";
import Button from "./Button/Button.jsx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useRef, useState, useEffect, useContext } from "react";
import { FaPoundSign } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axiosInstance from "../config/axios.instance.js";
import { UserContext } from "../context/UserProvider.jsx";

OrderPrepare.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setProduct: PropTypes.func.isRequired,
};

function OrderPrepare({
  id,
  restaurantId,
  name,
  content,
  price,
  imageUrl,
  setProduct,
}) {
  const { token, cart, setCart } = useContext(UserContext);
  const image = useRef(null);
  const [width, setWidth] = useState(0);
  const outside = useRef(null);
  const [numberOfOrders, setNumberOfOrders] = useState(1);
  const [scaleFactor, setScaleFactor] = useState(1);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    function handleZoom() {
      const zoomLevel = window.innerWidth / window.outerWidth;
      setScaleFactor(zoomLevel * 0.8);
    }

    window.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);

  function handleImageLoad(e) {
    setWidth(e.target.naturalWidth);
  }

  function handleClick(e) {
    if (e.target === outside.current) {
      setProduct({});
    }
  }

  function handleNumberOfOrders(value) {
    if (numberOfOrders + value >= 1) {
      setNumberOfOrders((currentValue) => currentValue + value);
    }
  }

  async function addToCart() {
    const orderData = {
      restaurantId: restaurantId,
      productId: id,
      quantity: numberOfOrders,
      notes: notes,
    };

    try {
      const { status, data } = await axiosInstance.post("cart", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (199 < status <= 299) {
        toast.success("Order added!");

        try {
          const { status, data } = await axiosInstance.get("cart", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (199 < status <= 299) {
            setCart(data.data);
          }
        } catch (e) {
          console.error(e.message);
        }
      }
    } catch (e) {
      console.error(e.message);
      toast.error(e.message);
    }
  }

  return (
    <div
      className={
        "top-0 w-full h-screen bg-black bg-opacity-50 z-20 fixed flex justify-center items-center"
      }
      onClick={handleClick}
      ref={outside}
    >
      <div
        className={`bg-white rounded-xl flex flex-col gap-6 pb-10 min-w-[36rem] max-w-[36rem] overflow-hidden`}
        style={{
          width: `${width}px`,
          transform: `scale(${scaleFactor})`,
          transformOrigin: "center center",
        }}
      >
        <div className={"relative"}>
          <img
            src={imageUrl}
            alt={"Order image"}
            ref={image}
            className={"h-[18rem] w-full object-cover"}
            onLoad={handleImageLoad}
          />

          <div className={"px-10"}>
            <p className={"absolute top-[80%] text-white text-2xl "}>{name}</p>
          </div>
        </div>

        <div>
          <div className={"px-10 flex flex-col gap-4"}>
            <p className={"text-xl font-medium"}>Contents</p>

            <p className={"text-black/45"}>{content}</p>
          </div>
        </div>

        <div>
          <div className={"px-10 flex flex-col gap-4"}>
            <p className={"text-xl font-medium"}>Notes</p>

            <textarea
              name="notes"
              id="notes"
              placeholder={"add extra notes.."}
              className={
                "bg-black bg-opacity-[0.04] p-4 rounded-xl resize-none outline-1 focus:outline-black/30 min-h-32"
              }
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div>
          <div className={"px-10 flex items-center justify-between gap-4"}>
            <div className={"flex gap-6 lg:gap-12 items-center"}>
              <Button
                variant={"outline"}
                rounding={"circle"}
                size={"medium"}
                className={"max-lg:px-[0.9rem] max-lg:py-[0.9rem]"}
                onClick={() => {
                  handleNumberOfOrders(-1);
                }}
              >
                <FaMinus className={"text-2xl"} />
              </Button>

              <p className={"text-2xl lg:text-3xl font-semibold"}>
                {numberOfOrders}
              </p>

              <Button
                variant={"outline"}
                rounding={"circle"}
                size={"medium"}
                className={"max-lg:px-[0.9rem] max-lg:py-[0.9rem]"}
                onClick={() => {
                  handleNumberOfOrders(1);
                }}
              >
                <FaPlus className={"text-2xl"} />
              </Button>
            </div>

            <div className={"flex flex-col"}>
              <p className={"font-medium text-black/60"}>TOTAL</p>
              <div className={"flex items-center"}>
                <FaPoundSign className={"text-xl"} />
                <p className={"font-semibold text-2xl"}>
                  {(numberOfOrders * price).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={"px-10 flex flex-col gap-4"}>
            <Button
              color={"white"}
              size={"large"}
              rounding={"rounded"}
              className={"rounded-2xl py-5"}
              onClick={addToCart}
            >
              <FaPlus />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPrepare;
