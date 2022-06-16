import React from "react";
import { FaTimes } from "react-icons/fa";
import Card from "../shared/Card";
import PropTypes from "prop-types";
const FeedbackItem = (props) => {
  const deleteHandler = (id) => {
    props.onDelete(id);
  };
  return (
    <Card>
      <div className="num-display">{props.rating}</div>
      <button onClick={() => deleteHandler(props.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{props.text}</div>
    </Card>
  );
};
FeedbackItem.prototype = {
  props: PropTypes.object.isRequired,
};
export default FeedbackItem;
