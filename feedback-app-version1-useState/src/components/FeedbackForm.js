import React from "react";
import { useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
const FeedbackForm = ({ onNewFeedback }) => {
  const [text, setText] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const handleTextChange = (event) => {
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisable(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisable(false);
    }
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      onNewFeedback(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect onSelect={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
