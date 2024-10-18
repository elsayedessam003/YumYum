import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button.jsx";
import { MdOutlineFileUpload } from "react-icons/md";

ImageInput.propTypes = {
  text: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  value: PropTypes.any,
  setValue: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  height: PropTypes.string,
  className: PropTypes.string,
};

function ImageInput({
  text,
  isRequired,
  value,
  setValue,
  size = "medium",
  height,
  className,
  ...rest
}) {
  const inputButton = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  function handleButtonClick() {
    inputButton.current.click();
  }

  function handleInput(e) {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setValue(file);
    }
  }

  function getImage() {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (value) {
      reader.readAsDataURL(value);
    } else {
      setImagePreview(null);
    }
    return null;
  }

  if (value) getImage();

  return (
    <div className={`w-full flex gap-8 h-[10rem] ${height} ${className}`}>
      <div
        className={`${size === "small" ? "aspect-square" : ""} ${size === "medium" ? "w-[40%]" : ""} ${size === "large" ? "w-[60%]" : ""} border rounded-lg overflow-hidden`}
      >
        <img
          src={value ? `${imagePreview}` : "/PlaceHolderImage.svg"}
          alt="Logo Image"
          className={"w-full h-full object-cover"}
        />
      </div>

      <div
        className={
          "flex-grow border p-4 rounded-lg flex justify-center items-center flex-col"
        }
      >
        <div className={"p-2 bg-project-gray rounded-xl"}>
          <MdOutlineFileUpload className={"text-3xl text-white"} />
        </div>

        <div className={"flex items-center"}>
          <Button
            variant={"text"}
            size={"fit"}
            className={"text-lg p-1.5 underline underline-offset-4"}
            onClick={handleButtonClick}
          >
            Click to upload
          </Button>
          <p className={"text-lg text-black/30"}>{text}</p>
          <input
            type={"file"}
            ref={inputButton}
            className={"hidden"}
            accept="image/*"
            onChange={handleInput}
            required={isRequired}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageInput;
