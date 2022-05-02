import { useState } from "react";
import Box from "./Components/Box/Box";
import ApiBox from "./Components/ApiBox/ApiBox";
import "./App.scss";

function App() {
  const [apiContent, setApiContent] = useState("Nothing to see here.... yet!");
  return (
    <div className="App">
      <div className="boxes">
        <Box setApiContent={setApiContent} />
        <Box setApiContent={setApiContent} />
      </div>
      <ApiBox apiContent={apiContent} />
    </div>
  );
}

export default App;
