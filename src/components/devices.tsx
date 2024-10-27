import { useEffect, useState } from "react";
import { DeviceTemp } from "./deviceTemp";

export const Devices = () => {
  const [DeviceID, setDeviceID] = useState("");
  const [devices, setDevices] = useState([]);

  function handleAddDeviceFrom() {
    const addUserform = document.querySelector(".addDeviceform");
    console.log(addUserform);
    addUserform?.classList.toggle("visible");
  }

  function handleSubmit() {
    setDeviceID((prev) => {
      // return prev.push()
      console.log(prev);
      // console.log(prev.);
      return prev;
    });
    console.log(devices);
    localStorage.setItem("devices", JSON.stringify(devices));
  }

  useEffect(() => {
    localStorage.setItem("devices", JSON.stringify(devices));
  }, [devices]);

  return (
    <div>
      <h1 className="text-3xl m-4 flex gap-5">
        Control Devices
        <button
          className=" border border-gray-600 p-1 px-2 flex justify-center items-center hover:bg-gray-700"
          onClick={handleAddDeviceFrom}
        >
          <span>+</span>
        </button>
        <form
          className="max-w-sm mx-auto addDeviceform absolute top-[10%] right-[45%] p-6 bg-white hidden"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-5">
            <label
              htmlFor="deviceid"
              className="block mb-2 text-sm font-medium text-black dark:text-black"
            >
              DeviceID
            </label>
            <input
              type=""
              id="deviceid"
              className="bg-gray-800 border text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" "
              required
              onChange={(e) => {
                setDeviceID(e.target.value);
              }}
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Device
            </button>
          </div>
        </form>
      </h1>
      {devices.map((item: any) => {
        return (
          <>
            <DeviceTemp text={item} />
          </>
        );
      })}
    </div>
  );
};
