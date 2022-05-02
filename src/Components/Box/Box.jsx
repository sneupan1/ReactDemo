import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./Box.scss";

const Box = ({ setApiContent }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const fetchAPI = async () => {
    try {
      const data = await axios.get(
        "https://random-data-api.com/api/users/random_user"
      );
      setApiContent(JSON.stringify(data.data, null, 2));
    } catch (err) {
      console.log("error: ", err);
    }
  };

  useEffect(() => {
    if (counter > 0) {
      fetchAPI();
    }
  }, [counter]);

  return (
    <div className="box-container">
      <div>Counter: {counter}</div>
      <Button variant="primary" onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
};

export default Box;
