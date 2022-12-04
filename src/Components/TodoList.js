import React from "react";
import Navbar from "./Navbar";
import { BsHouseDoor } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import AddTask_list from "./AddTask_list";
import Completed_task from "./Completed_task";

export const TodoList = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="mb-5 mt-10 mx-2">
          <div className="flex items-center justify-center md:justify-start text-blue-600">
            <BsHouseDoor className="text-2xl" />
            <h3 className="text-2xl font-semibold ml-2">Tasks</h3>
          </div>
        </div>
      </div>
      <AddTask_list />
      <Completed_task />
    </div>
  );
};
