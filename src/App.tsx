// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "./store/store";
import { Navbar } from "./components/Navbar";
import { Home } from "./page/Home";
// import { Nav } from "./components/nav";
import "./App.css";


function App() {
  const user: string = useSelector((state: RootState) => state.user);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/access-existing-security" element={<Home />} />
            <Route path="/create-personal-security" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
