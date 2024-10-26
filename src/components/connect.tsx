import React, { useState, useEffect } from "react";
// import detectEthereumProvider from "@metamask/detect-provider";
import { useSDK } from "@metamask/sdk-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/features/userSlice";
import "../styles/connect.css";

const Connect: React.FC = () => {
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const dispatch = useDispatch();
  const [userAddress, setUserAddress] = useState<string | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setUserAddress(accounts?.[0]);
      console.log(connected, connecting, provider, chainId);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };
  const logout = async () => {
    try {
      const accounts = await sdk?.terminate();
      console.log(accounts);
      setUserAddress(undefined);
    } catch (err) {
      console.warn("failed to disconnect..", err);
    }
  };
  dispatch(setUser(userAddress));
  // console.log(useSelector(state => state));

  // const handleProfileClick = () => [
  //   const
  // ]

  return (
    <div className="navConnect flex justify-center h-[100%]">
      <div className="connect h-[100%]">
        {!userAddress && <button onClick={connect}>Connect</button>}
      </div>
      <div className="logout flex flex-col items-end">
        {userAddress ? (
          <>
            <div className="profile">
              {/* <input
                type="checkbox"
                className="absolute profile-input"
                style={{ width: "40px", height: "40px" }}
              /> */}
              <img
                src="/profile-icon.jpg"
                className="profile-icon flex rounded-full cursor-pointer"
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <div className="profile-expansion flex-col absolute right-4 bg-black">
                <button onClick={logout}>Logout</button>
                <span className="">
                  {" "}
                  Conneted with {userAddress.slice(0, 15) + "..."}
                </span>
              </div>
            </div>
          </>
        ) : (
          // <p>Connected as: {userAddress}</p>
          <>{errorMessage && <p className="error">{errorMessage}</p>}</>
        )}
      </div>
    </div>
  );
};

export default Connect;
