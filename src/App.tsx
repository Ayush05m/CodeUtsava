import { useState } from "react";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { ActionForm } from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="Hero flex w-[50%]" >
      <ActionForm/>

      </div>
    </>
    
  );
}

export default App;
