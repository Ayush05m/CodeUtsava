import React from "react";
import { DeviceTemp } from "./deviceTemp";

export const Devices = () => {
  return (
    <div>
      <h1 className="text-3xl m-4">Control Devices</h1>
      {devices.map((item) => {
        return (
          <>
            <DeviceTemp text={item} />
          </>
        );
      })}
    </div>
  );
};

const devices = ["camera1", "door1", "light1", "light2"];
