import React, { useState, useEffect } from "react";
import { Table, message, Input, Select } from "antd";

const { Search } = Input;
const { Option } = Select;

const GetLogs = (d: any) => {
  console.log(d);
  const data = d.data;

  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");

  useEffect(() => {
    const fetchLogs = async () => {
      console.log(data);
      
      message.success("Logs fetched successfully");
      const logsData = JSON.parse(data).map((log) => ({
        user: log.user,
        timestamp: new Date(log.timestamp * 1000).toISOString(), // Convert timestamp to readable format
        deviceID: log.deviceID,
        action: log.action,
        username: log.username,
      }));
      setLogs(logsData);
      setFilteredLogs(logsData);
    };

    fetchLogs();
  }, []);

  useEffect(() => {
    const filtered = logs.filter(
      (log) =>
        log.username.includes(searchTerm) &&
        (selectedDevice ? log.deviceID === selectedDevice : true)
    );
    setFilteredLogs(filtered);
  }, [searchTerm, selectedDevice, logs]);

  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
    },
    {
      title: "Device ID",
      dataIndex: "deviceID",
      key: "deviceID",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
  ];

  return (
    <div>
      <Search
        placeholder="Search by username"
        onSearch={(value) => setSearchTerm(value)}
        style={{ width: 200, marginBottom: 20 }}
      />
      <Select
        placeholder="Filter by device"
        onChange={(value) => setSelectedDevice(value)}
        style={{ width: 200, marginBottom: 20, marginLeft: 10 }}
      >
        <Option value="">All Devices</Option>
        {/* {Array.from(new Set(logs.map((log) => log.deviceID))).map(
          (deviceID) => (
            <Option key={deviceID} value={deviceID}>
              {deviceID}
            </Option>
          )
        )} */}
      </Select>
      <Table
        columns={columns}
        dataSource={filteredLogs}
        rowKey="timestamp" // Assuming timestamp is unique for each log entry
      />
    </div>
  );
};

export default GetLogs;
