import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback((feedback) => [newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Route exact path="/">
          <FeedbackForm onNewFeedback={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} onDelete={deleteFeedback} />
        </Route>
        <Route path="/about" component={AboutPage} />
        <AboutIconLink />
      </div>
    </Router>
  );
};
export default App;
