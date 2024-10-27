import { Devices } from "../components/devices";
import Actions from "../components/actions";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { ActionForm } from "../components/Form";

export const Home = () => {
  // const user: string = useSelector((state: RootState) => state.user);
  const userAddress = localStorage.getItem("userAddress")
  return (
    <>
      <div className="Hero ">
        <h1 className="text-3xl text-center">SMART SECURITY SYSTEM</h1>
        {!userAddress && (
          <h1 className="text-center">
            Connect to the Metamask and register yourself to use the Home
            Security System
          </h1>
        )}
        <div className="form flex justify-center  ">{/* <ActionForm /> */}</div>

        <div className="actions">
          <Actions />
        </div>
        <div className="devices">
          <Devices />
        </div>
      </div>
    </>
  );
};
