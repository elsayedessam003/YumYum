import PropTypes from "prop-types";
import Button from "./Button/Button.jsx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useRef, useState } from "react";
import { FaPoundSign } from "react-icons/fa";

OrderPrepare.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

function OrderPrepare({ name, content, price, setProduct }) {
  const image = useRef(null);
  const [width, setWidth] = useState(0);
  const outside = useRef(null);

  function handleImageLoad(e) {
    setWidth(e.target.naturalWidth);
  }

  function handleClick(e) {
    if (e.target === outside.current) {
      setProduct({});
    }
  }

  return (
    <div
      className={
        " top-0 w-full h-screen bg-black bg-opacity-50 z-10 fixed flex justify-center items-center"
      }
      onClick={handleClick}
      ref={outside}
    >
      <div
        className={`bg-white rounded-xl flex flex-col gap-6 pb-10`}
        style={{ width: `${width}px` }}
      >
        <div className={"relative"}>
          <img
            src={"/Order.png"}
            alt={"Order image"}
            ref={image}
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
            ></textarea>
          </div>
        </div>

        <div>
          <div className={"px-10 flex items-center justify-between gap-4"}>
            <div className={"flex gap-8 items-center"}>
              <Button variant={"outline"} rounding={"circle"} size={"medium"}>
                <FaMinus className={"text-2xl"} />
              </Button>

              <p className={"text-3xl font-semibold"}>1</p>

              <Button variant={"outline"} rounding={"circle"} size={"medium"}>
                <FaPlus className={"text-2xl"} />
              </Button>
            </div>

            <div className={"flex flex-col"}>
              <p className={"font-medium text-black/60"}>TOTAL</p>
              <div className={"flex items-center"}>
                <FaPoundSign className={"text-xl"} />
                <p className={"font-semibold text-2xl"}>{price}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={"px-10 flex flex-col gap-4"}>
            <Button color={"white"} size={"large"} rounding={"rounded"}>
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
