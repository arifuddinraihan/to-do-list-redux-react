import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <nav className="container mx-auto">
        <div className="container mx-auto py-2 flex justify-between">
          <div className="">
            <Link href="/" className="btn btn-ghost text-white normal-case text-xl md:text-2xl">
              To Do List
            </Link>
          </div>
          <div className="bg-base-100 flex items-center rounded">
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
