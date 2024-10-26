import React from "react";
import { Buttons } from "./Actionbtn";
// import actions from '../../src/actions.json'

const actions = ["open", "close", "Remove User"];

export const Actions = () => {
  return (
    <div>
      {actions.map((item) => {
        // console.log(item);
        return <>
        <Buttons  text={item} />
        </>;
      })}
    </div>
  );
};

export default Actions;
