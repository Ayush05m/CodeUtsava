import { useState } from "react";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { ActionForm } from "./components/Form";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="Hero flex justify-center">
          <ActionForm />
        </div>
      </div>
    </>
  );
}

export default App;
