import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackItem = (props) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{props.rating}</div>
      <button onClick={() => deleteFeedback(props.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(props)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{props.text}</div>
    </Card>
  );
};
FeedbackItem.prototype = {
  props: PropTypes.object.isRequired,
};
export default FeedbackItem;
