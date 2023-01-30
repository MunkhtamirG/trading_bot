import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[60px] flex justify-between items-center fixed top-0 left-0 w-full px-10">
      <h1 className="text-xl font-bold uppercase m-0">Trading Bot</h1>
      <ul className="flex items-center gap-5">
        <li>
          <Link href={"/trade"}>Trade</Link>
        </li>
        <li>
          <Link href={"/trade"}>Trade</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
