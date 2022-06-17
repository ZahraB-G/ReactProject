import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.9.20</p>
        <Link to="/">Back To Home</Link>
      </div>
    </Card>
  );
};
export default AboutPage;