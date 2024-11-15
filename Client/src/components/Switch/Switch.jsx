import PropTypes from "prop-types";
import style from "./Switch.module.css";

Switch.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
  icon: PropTypes.node,
  children: PropTypes.node,
};

function Switch({ toggle, setToggle, icon, children }) {
  function handleToggle() {
    setToggle((currentState) => !currentState);
  }

  return (
    <div
      className={"flex gap-12 select-none cursor-pointer h-auto"}
      onClick={handleToggle}
    >
      <div className={"flex justify-center items-center gap-2 text-nowrap"}>
        <div className={"text-xl"}>{icon}</div>
        {children}
      </div>
      <div
        className={`w-12 rounded-full flex items-center p-1 relative ${toggle ? "bg-project-orange" : "bg-black bg-opacity-10"}`}
      >
        <div
          className={`h-[70%] absolute aspect-square bg-white rounded-full ${toggle ? style.on : style.off} transition-all ease-linear`}
        ></div>
      </div>
    </div>
  );
}

export default Switch;
