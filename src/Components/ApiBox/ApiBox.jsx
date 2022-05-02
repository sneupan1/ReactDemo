import React from "react";
import "./ApiBox.scss";

const ApiBox = ({ apiContent }) => {
  return (
    <div className="api-box-container">
      <pre>{apiContent}</pre>
    </div>
  );
};

export default ApiBox;
