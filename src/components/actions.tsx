import React from "react";
// import { Buttons } from "./Actionbtn";
// import actions from "../../src/actions.json";
import { AddUser, getLog } from "../api/actions.ts";

// const actions = ["open", "close", "Remove User"];

export const Actions = () => {
  const userAddress = localStorage.getItem("userAddress");
  // console.log(userAddress);

  return (
    <div className="w-screen">
      <h1 className="text-3xl p-5 mb-3">Actions</h1>
      <div className="actionsButtonList flex justify-center">
        {/* {Object.entries(actions).map(([actionName, actionDetails]) => (
          <Buttons key={actionName} text={actionName} link={actionDetails.link} />
        ))} */}
        <div className="actionbtn p-2">
          <button
            className=""
            onClick={async () => {
              const response = await AddUser({
                username: "username",
                userAddress: "0xa184a1ad3757215b5da2f8fb3f138f9e1fb23012",
              });
              console.log(response);
            }}
          >
            <p className="">Add Uxser</p>
          </button>
        </div>
        <div className="actionbtn p-2">
          <button
            className=""
            onClick={async () => {
              const response = await AddUser({
                username: "username",
                userAddress: "0xa184a1ad3757215b5da2f8fb3f138f9e1fb23012",
              });
              // console.log(response);
            }}
          >
            <p className="">Remove User</p>
          </button>
        </div>
        <div className="actionbtn p-2">
          <button
            className=""
            onClick={async () => {
              const response = await getLog();
              console.log(response);
            }}
          >
            <p className="">Get Logs</p>
          </button>
        </div>
        <div className="actionbtn p-2">
          <button
            className=""
            onClick={async () => {
              const response = await AddUser({
                username: "username",
                userAddress: "0xa184a1ad3757215b5da2f8fb3f138f9e1fb23012",
              });
              console.log(response);
            }}
          >
            <p className="">Add User</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actions;
