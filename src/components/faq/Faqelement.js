import React from "react";
import { BsFillPlusCircleFill, BsFillMinusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

const Faqelement = ({ title, des, desarray }) => {
  return (
    <>
      <button className="lg:w-100 bg-white text-left group focus:outline-none space-y-2 p-1 border-2 rounded">
        <div className="flex px-2 gap-2 justify-between rounded-sm font-semibold lg:text-base text-sm py-4">
          <div>{title}</div>
          <div className="">
            <BsFillPlusCircleFill className="h-5 w-5 group-focus:hidden text-gray-500" />
            <AiFillMinusCircle className="h-5 w-5 group-focus:flex hidden text-secondary" />
          </div>
        </div>

        <div className="hidden px-2 group-focus:block drop-shadow-2zl">
          {des ? (
            <p className="pb-2">{des}</p>
          ) : (
            desarray.map((item) => (
              <ul className="px-12">
                <li className="list-disc ">{item}</li>
              </ul>
            ))
          )}
        </div>
      </button>
    </>
  );
};

export default Faqelement;
