import { useState } from "react";
// import { Buttons } from "./Actionbtn";
// import actions from "../../src/actions.json";
import "./buttonstyle.css";
import {
  AddUser,
  getLog,
  LogAccess,
  RemoveUserAccess,
  UpdateUser,
} from "../api/actions.ts";
import GetLogs from "./getLogs.tsx";

// const actions = ["open", "close", "Remove User"];

export const Actions = () => {
  const userAddress = localStorage.getItem("userAddress");
  // console.log(userAddress);
  const username = localStorage.getItem("username");
  console.log(userAddress);

  const [newUsername, setnewUsername] = useState<string | undefined | null>();
  const [newAddress, setnewAddress] = useState<string | undefined | null>();
  const [updatenewAddress, setupdatenewAddress] = useState<
    string | undefined | null
  >();
  const [Responsedata, setResponsedata] = useState({ api: "response" });
  const [getLogs, setGetlogs] = useState();

  async function handleAddUserSubmit() {
    const response = await AddUser({
      username: newUsername,
      userAddress: newAddress,
      presentUser: userAddress,
    });
    console.log(response);
  }

  async function handleUpdateUserSubmit() {
    const response = await UpdateUser({
      username: newUsername,
      newAddress: updatenewAddress,
    });
    console.log(response);
  }

  function handleAddUserFrom() {
    const addUserform = document.querySelector(".adduserform");
    console.log(addUserform);
    addUserform?.classList.toggle("visible");
  }
  function handleUpdateUserFrom() {
    const addUserform = document.querySelector(".updateuserform");
    console.log(addUserform);
    addUserform?.classList.toggle("visible");
  }

  return (
    <div className="w-screen">
      <h1 className="text-3xl p-5 mb-3">Actions</h1>
      <div className="actionsButtonList flex justify-center">
        {/* {Object.entries(actions).map(([actionName, actionDetails]) => (
          <Buttons key={actionName} text={actionName} link={actionDetails.link} />
        ))} */}
        <div className="actionbtn p-2">
          <button className="" onClick={handleAddUserFrom}>
            <p className="">Add User</p>
          </button>
          <form
            className="max-w-sm mx-auto adduserform absolute top-[10%] right-[45%] p-6 bg-white hidden"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddUserSubmit();
            }}
          >
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-black dark:text-black"
              >
                Username
              </label>
              <input
                type=""
                id="username"
                className="bg-gray-800 border text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                required
                onChange={(e) => {
                  setnewUsername(e.target.value);
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-black dark:text-black"
              >
                Etherium Address
              </label>
              <input
                type=""
                id="username"
                className="bg-gray-800 border text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                required
                onChange={(e) => {
                  setnewAddress(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="actionbtn p-2">
          <button
            className=""
            onClick={async () => {
              const response = await RemoveUserAccess({
                username: username,
                presentUser: userAddress,
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
              setGetlogs(response.data);
            }}
          >
            <p className="">Get Logs</p>
          </button>
        </div>

        <div className="actionbtn p-2">
          <button className="" onClick={handleUpdateUserFrom}>
            <p className="">Update User</p>
          </button>
          <form
            className="max-w-sm mx-auto updateuserform absolute top-[10%] right-[5%] p-6 bg-white hidden"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateUserSubmit();
            }}
          >
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-black dark:text-black"
              >
                New Etherium Address
              </label>
              <input
                type=""
                id="username"
                className="bg-gray-800 border text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=" "
                required
                onChange={(e) => {
                  setupdatenewAddress(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      {/* <div className="responseData">{Responsedata.api}</div> */}
      {getLogs && (
        <div className="responseData">
          <GetLogs data={getLogs} />
        </div>
      )}
    </div>
  );
};

export default Actions;
