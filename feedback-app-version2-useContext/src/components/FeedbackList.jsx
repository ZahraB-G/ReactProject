import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackList = () => {
  // if (!feedback || feedback.length === 0) {
  //   return <p>No Feedback Yet</p>;
  // }
  const { feedback } = useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          id={item.id}
          text={item.text}
          rating={item.rating}
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
export default FeedbackList;
