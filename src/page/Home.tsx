import Actions from "../components/actions";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { ActionForm } from "../components/Form";

export const Home = () => {
  const user: string = useSelector((state: RootState) => state.user);
  return (
    <>
      <div className="Hero ">
        {!user && (
          <h1 className="text-center">
            Connect to the Metamask and register yourself to use the Home
            Security System
          </h1>
        )}
        <div className="form flex justify-center  ">{/* <ActionForm /> */}</div>

        <div className="actions">
          <Actions />
        </div>
      </div>
    </>
  );
};
