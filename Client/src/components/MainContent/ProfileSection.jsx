import React from "react";
import PropTypes from "prop-types";

ProfileSection.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
  type: PropTypes.oneOf(["default", "border"]),
};

function ProfileSection({
  icon,
  text,
  type = "default",
  className,
  children,
  ...rest
}) {
  return (
    <div {...rest} className={`flex flex-col gap-8`}>
      <div className={"flex gap-3 items-center"}>
        <div className={"text-3xl"}>{icon}</div>
        <p className={"text-3xl font-semibold"}>{text}</p>
      </div>

      <div
        className={`${type === "border p-8 rounded-3xl" ? "border" : null} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default ProfileSection;
