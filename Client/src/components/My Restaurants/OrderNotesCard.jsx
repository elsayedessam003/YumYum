import PropTypes from "prop-types";
import Button from "../Button/Button";
import { useRef, useState, useEffect } from "react";

OrderNotesCard.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};

function OrderNotesCard({ id }) {
  const [width, setWidth] = useState(0);
  const outside = useRef(null);
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

  return (
    <div
      className={
        "inset-0 w-full h-screen bg-black bg-opacity-50 z-20 fixed flex justify-center items-center"
      }
      ref={outside}
    >
      <div
        className={`bg-white h-fit rounded-xl flex justify-around flex-col gap-6 py-10 min-w-[32rem] max-w-[36rem] overflow-hidden`}
        style={{
          width: `${width}px`,
          transform: `scale(${scaleFactor})`,
          transformOrigin: "center center",
        }}
      >
        <div>
          <div className={"h-fit px-10 flex flex-col gap-4"}>
            <p className={"text-2xl font-bold"}>Additional Notes</p>

            <textarea
              name="notes"
              id="notes"
              placeholder={"add order notes"}
              className={
                "bg-black bg-opacity-[0.04] p-4 rounded-xl resize-none outline-1 focus:outline-black/30 min-h-60"
              }
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div>
          <div className={"px-10 flex flex-col gap-4"}>
            <Button
              variant="outline"
              color="primary"
              size={"large"}
              rounding={"rounded"}
              className={"rounded-2xl py-5"}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNotesCard;
