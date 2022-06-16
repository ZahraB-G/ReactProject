import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
const FeedbackList = ({ feedback, onDelete }) => {
  // if (!feedback || feedback.length === 0) {
  //   return <p>No Feedback Yet</p>;
  // }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          id={item.id}
          text={item.text}
          rating={item.rating}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => (
  //         <motion.div
  //           key={item.id}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //         >
  //           <FeedbackItem
  //             key={item.id}
  //             id={item.id}
  //             text={item.text}
  //             rating={item.rating}
  //             onDelete={onDelete}
  //           />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // );
};
FeedbackList.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default FeedbackList;
