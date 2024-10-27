import { LogAccess } from "../api/actions";

export const DeviceTemp = (data: any) => {
  const username = localStorage.getItem("username");
  return (
    <div className="flex gap-7 m-3 justify-between w-[20%]">
      <h1>{data.text}</h1>
      <div className="control flex gap-3">
        <div
          className="redbox bg-red-600 flex justify-center items-center cursor-pointer"
          style={{ width: "35px", height: "35px" }}
          onClick={async () => {
            const response = await LogAccess({
              deviceID: data.text,
              action: "close",
              username,
            });
            console.log(response);
          }}
        >
          &#10007;
        </div>
        <div
          className="greenbox bg-green-500 flex justify-center items-center cursor-pointer"
          style={{ width: "35px", height: "35px" }}
          onClick={async () => {
            const response = await LogAccess({
              deviceID: data.text,
              action: "open",
              username,
            });
            console.log(response);
          }}
        >
          &#10003;
        </div>
      </div>
    </div>
  );
};
