// import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./page/Login";
import SignUp from "./page/signup";
import { Home } from "./page/Home";

function App() {
  // const user: string = useSelector((state: RootState) => state.user);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  const user = localStorage.getItem("userAddress");
  // console.log(user);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <main className="pt-0">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={< />} /> */}
              // <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
