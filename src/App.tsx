// import { useState } from "react";
import { Navbar } from "./components/Navbar";

import "./App.css";
import { ActionForm } from "./components/Form";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "./store/store";

function App() {
  const user: string = useSelector((state: RootState) => state.user);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="Hero ">
          {!user && (
            <h1 className="text-center">
              Connect to the Metamask and register yourself to use the Home
              Security System
            </h1>
          )}
          <div className="form flex justify-center  ">
            <ActionForm />
          </div>
        </div>
        <div className="try">{user && <h1>{user}</h1>}</div>
      </div>
    </>
  );
}

export default App;
