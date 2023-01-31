import React from "react";
import axios from "axios";
import useSWR from "swr";
import moment from "moment/moment";
import { Button, Skeleton, Table } from "antd";
import Link from "next/link";
import BitcoinChart from "./";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const columns = [
  { title: "Asset", dataIndex: "asset", key: "asset" },
  { title: "free", dataIndex: "free", key: "free" },
  { title: "locked", dataIndex: "locked", key: "locked" },
];

const Main = () => {
  const { data, error, isLoading } = useSWR("http://localhost:8080", fetcher);
  console.log(data);

  if (error) return <>Error</>;
  if (!data) return <Skeleton />;
  return (
    <div className="">
      <div className="bg-gray-700 text-white rounded-sm p-2 text-center">
        <p>Account Type: {data.accountType}</p>
        <p>
          Updated Time: {moment(data.updateTime).format("YYYY.MM.DD HH-MM")}
        </p>
      </div>
      <div className="">
        <Table
          dataSource={data.balances}
          rowKey={"asset"}
          columns={columns}
          size="small"
        />
      </div>
      <BitcoinChart />
      <div>
        <Link href={"/trade"} className="bg-black text-white p-2 rounded-lg">
          Trade
        </Link>
      </div>
    </div>
  );
};

export default Main;
