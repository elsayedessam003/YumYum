import React, { useState } from "react";
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";

Category.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  setItems: PropTypes.func,
};

function Category({ name, index, setItems }) {
  const [hovered, setHovered] = useState(false);

  function handleDelete() {
    setItems((currentItems) => {
      return currentItems.filter((item, i) => i !== index);
    });
  }

  return (
    <div
      className={`border rounded-full w-fit py-2 px-8 flex gap-2 items-center ${hovered ? "bg-project-red/5 border-project-red" : ""} transition-all ease-linear`}
    >
      <p>{name}</p>
      <RxCross1
        className={"stroke-[0.5] text-project-red cursor-pointer"}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={handleDelete}
      />
    </div>
  );
}

export default Category;
