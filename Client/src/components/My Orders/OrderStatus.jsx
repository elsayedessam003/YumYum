import React from "react";
import PropTypes from "prop-types";

OrderStatus.propTypes = {
  status: PropTypes.oneOf(["pending", "ready for delivery", "delivered"])
    .isRequired,
};

function OrderStatus({ status }) {
  function getColor() {
    switch (status) {
      case "pending":
        return "border-black/30 text-black/30";
      case "ready for delivery":
        return "border-project-yellow text-project-yellow";
      case "delivered":
        return "border-project-green text-project-green";
    }
  }

  return (
    <div className={`py-2 px-4 border ${getColor()} rounded-full `}>
      <p className={"font-medium"}>{status}</p>
    </div>
  );
}

export default OrderStatus;
