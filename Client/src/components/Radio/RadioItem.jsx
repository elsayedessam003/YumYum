import PropTypes from "prop-types";

RadioItem.propTypes = {
  value: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  choice: PropTypes.string,
  setChoice: PropTypes.func,
};

function RadioItem({ value, label, choice, setChoice }) {
  function handleClick() {
    if (choice !== value) {
      setChoice(value);
    } else {
      setChoice("");
    }
  }

  return (
    <div
      className={
        "flex justify-center items-center gap-4 cursor-pointer select-none"
      }
      onClick={handleClick}
    >
      <div
        className={`h-4 w-4 border rounded-full ${choice === value ? "border-[6px] border-project-orange" : "border-black"} transition-all ease-linear font-bold`}
      ></div>
      <span>{label}</span>
    </div>
  );
}

export default RadioItem;
