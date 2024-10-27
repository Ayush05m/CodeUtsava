import React, { useState, useEffect } from "react";
// import detectEthereumProvider from "@metamask/detect-provider";
import { useSDK } from "@metamask/sdk-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/features/userSlice";
import "../styles/connect.css";

const Connect: React.FC = () => {
  const { sdk } = useSDK();

  const dispatch = useDispatch();
  const [userAddress, setUserAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  setTimeout(() => {
    setUserAddress(localStorage.getItem("userAddress") || "");
  }, 600);
  

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      console.log(accounts);
      if (accounts) {
        setUserAddress(accounts[0]);
        // console.log(userAddress);
        setTimeout(() => {
          localStorage.setItem("userAddress", accounts[0]);
        }, 200);
        console.log(localStorage.getItem("userAddress"));
      }
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  const disconnect = async () => {
    try {
      await sdk?.terminate();
      localStorage.removeItem("userAddress")
    } catch (err) {
      console.warn("failed to disconnect..", err);
    }
  };
  dispatch(setUser(userAddress));

  return (
    <div className="navConnect flex justify-center h-[100%]">
      <div className="connect h-[100%]">
        {!userAddress && <button onClick={connect}>Connect</button>}
      </div>
      <div className="logout flex justify-center items-center gap-5">
        {userAddress ? (
          <>
            <p>Connected as: {userAddress}</p>
            <button className="btn-31" onClick={disconnect}>
              <span className="text-container">
                <span className="loginTxt">Disconnect</span>
              </span>
            </button>
          </>
        ) : (
          <>{errorMessage && <p className="error">{errorMessage}</p>}</>
        )}
      </div>
    </div>
  );
};

export default Connect;
