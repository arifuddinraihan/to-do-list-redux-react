import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const AddTask_list = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="py-3 px-5 shadow-md rounded-md">
        {/* removed previous iput group with double flex div*/}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">List your to-do task</label>
          <input type="text" placeholder="To do details" className="input input-bordered input-primary w-full rounded-md" />

        </div>
        <button className="btn btn-sm btn-outline btn-primary btn-ghost mt-3 rounded-md">Add To Do</button>
      </div>

      {/* all task */}
      <div className="mt-10">
        <div className="hover:bg-gray-100 flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
          <div className="flex items-center">
            <input type="checkbox" className="checkbox checkbox-info checkbox-sm" />

            <h3 className="ml-5">Group Todo List</h3>
          </div>
          <AiOutlineStar className="text-2xl text-blue-500" />
          {/* <AiFillStar  className="text-2xl text-blue-500"/> */}
        </div>
        <div className="hover:bg-gray-100 flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
          <div className="flex items-center">
            <input type="checkbox" className="checkbox checkbox-info checkbox-sm" />

            <h3 className="ml-5"> Todo List</h3>
          </div>
          <AiOutlineStar className="text-2xl text-blue-500" />
          {/* <AiFillStar  className="text-2xl text-blue-500"/> */}
        </div>
        <div className="hover:bg-gray-100 flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
          <div className="flex items-center">
            <input type="checkbox" className="checkbox checkbox-info checkbox-sm" />

            <h3 className="ml-5">Lorem ipsum dolor sit amet.</h3>
          </div>
          <AiOutlineStar className="text-2xl text-blue-500" />
          {/* <AiFillStar  className="text-2xl text-blue-500"/> */}
        </div>
      </div>
    </div>
  );
};

export default AddTask_list;
