import React from "react";
import PropTypes from "prop-types";
const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  // return (
  //   <div
  //     className="card"
  //     style={{
  //       backgroundColor: reverse ? "rgb(0,0,0,0.4)" : "#fff",
  //       color: reverse ? "#fff" : "rgb(0,0,0,0.4)",
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
};
Card.defaultProps = { reverse: false };
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
