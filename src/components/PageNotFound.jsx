import React from "react";
import { Link } from "react-router-dom";
import "./styles/404.css"; // You can create a CSS file for your 404 page styles

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for might be in another universe.</p>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
