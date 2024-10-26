import React, { useState, useEffect } from "react";
// import detectEthereumProvider from "@metamask/detect-provider";
import { useSDK } from "@metamask/sdk-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/features/userSlice";
import "../styles/connect.css"

const Connect: React.FC = () => {
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const dispatch = useDispatch();
  const [userAddress, setUserAddress] = useState<string | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onLogin = () => {
    dispatch(setUser(userAddress));
    console.log(useSelector((state) => state));
  };

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setUserAddress(accounts?.[0]);
      onLogin();
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  useEffect(() => {
    console.log(userAddress);
  });
  console.log(useSelector((state) => state));

  return (
    <div className="connect ">
      {!userAddress && <button onClick={connect}>Connect</button>}
      {userAddress ? (
        <p>Connected as: {userAddress}</p>
      ) : (
        // <p>Connected as: {userAddress}</p>
        <>{errorMessage && <p className="error">{errorMessage}</p>}</>
      )}
    </div>
  );
};

export default Connect;
