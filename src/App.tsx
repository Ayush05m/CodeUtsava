// import { useState } from "react";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { ActionForm } from "./components/Form";
import { useSelector } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);
  // const user = useSelector((state) => state);

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="Hero ">
          <h1 className="text-center">
            Connect to the Metamask and register yourself to use the Home
            Security System
          </h1>
          <div className="form flex justify-center  ">
            <ActionForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
