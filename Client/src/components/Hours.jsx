import { GoClockFill } from "react-icons/go";
import PropTypes from "prop-types";

Hours.propTypes = {
  openingHour: PropTypes.number.isRequired,
  closingHour: PropTypes.number.isRequired,
};

function Hours({ openingHour, closingHour }) {
  getStatus(openingHour, closingHour);
  return (
    <div className={"flex items-center gap-2 text-black/60"}>
      <GoClockFill className={"text-xl"} />
      <p>
        {getTime(openingHour)} {getAbbreviations(openingHour)}
        {" - "}
        {getTime(closingHour)} {getAbbreviations(closingHour)}
      </p>
      {getStatus(openingHour, closingHour)}
    </div>
  );
}

function getAbbreviations(time) {
  if (time >= 0 && time < 13) {
    return "AM";
  } else {
    return "PM";
  }
}

function getTime(time) {
  return time > 12 ? time - 12 : time;
}

function getStatus(openingHour, closingHour) {
  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "Africa/Cairo",
    hour: "numeric",
    hour12: false,
  });

  if (Number(time) > openingHour && Number(time) <= closingHour) {
    return (
      <p>
        (<span className={"text-project-green"}>Open</span>)
      </p>
    );
  } else {
    return (
      <p>
        (<span className={"text-red-600"}>Closed</span>)
      </p>
    );
  }
}

export default Hours;
