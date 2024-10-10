import PropTypes from "prop-types";

RestaurantSection.propTypes = {
  sectionName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

function RestaurantSection({ sectionName, className, children }) {
  return (
    <div className={`px-4 lg:px-32 py-8 ${className}`}>
      <p className={"font-semibold text-2xl"}>{sectionName}</p>
      {children}
    </div>
  );
}

export default RestaurantSection;
