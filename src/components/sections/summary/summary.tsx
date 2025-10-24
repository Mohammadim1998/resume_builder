import { useMobile } from "../../../context/mobileContext";
import { GoPencil } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Summary = ({ value, onChange, removeSection }) => {
  const { isMobile } = useMobile();
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      {!isMobile ? (
        <div className="relative group w-full h-fit">
          <input
            value={value.title}
            onChange={(event) => onChange("title", event.target.value)}
            className="placeholder:text-black border-none outline-none font-medium bg-transparent"
            placeholder="SUMMARY"
          />
          <div className="w-full h-1 bg-black"></div>
          <textarea
            value={value.description}
            onChange={(event) => onChange("description", event.target.value)}
            className="w-full text-sm mt-1 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
            placeholder="Briefly explain why you're a great fit for the role - use the AI assistant to tailor this summary for each job posting."
          ></textarea>

          <div
            className="absolute -top-4 right-0 w-8 h-8 cursor-pointer hidden group-hover:flex justify-center items-center rounded bg-white border-[1px] border-gray-600 border-opacity-40"
            onClick={() => removeSection("summary")}
          >
            <FaRegTrashAlt />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full bg-white mt-4 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold select-none">Summary</span>

              <div className="text-xl cursor-pointer">
                <GoPencil />
              </div>
            </div>

            <div
              onClick={() => setOpenEdit(true)}
              className="w-full relative bg-[#FAFBFD]"
            >
              <div className="w-full select-none text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] transition-all duration-300 rounded">
                Briefly explain why you're a great fit for the role - use the AI
                assistant to tailor this summary for each job posting.
              </div>
              <div className="absolute right-6 cursor-pointer top-[50%] translate-y-[-50%] flex flex-col gap-y-[2px]">
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
              </div>
            </div>

            <div className="w-11 h-11 bg-[#E3E9F5] text-[#384347] cursor-pointer flex justify-center items-center text-xl mt-3 font-bold rounded-full">
              <LuPlus />
            </div>
          </div>

          {/* The blow code is for open the edit page */}
          <div
            className={`w-full h-full fixed top-0 bottom-0 z-50 overflow-y-scroll ${
              openEdit ? "right-0" : "right-[-100%]"
            } bg-white transition-all duration-300`}
          >
            <div className="w-full h-14 mb-6 flex justify-start items-center px-4 bg-white shadow-[0px_1px_4px_0px_#000000]">
              <div className="flex items-center justify-start gap-x-2">
                <div
                  onClick={() => setOpenEdit(false)}
                  className="w-10 h-10 bg-[#F3F2FB] rounded-full cursor-pointer flex justify-center items-center text-3xl text-[#5F6CD4]"
                >
                  <MdKeyboardArrowLeft />
                </div>
                <span className="text-[#525858] font-semibold">
                  Back to Resume
                </span>
              </div>
            </div>

            <form className="w-full px-6 bg-[#FAFBFD]">
              <span className="mb-3 block text-[#75696C] font-medium">
                SUMMARY
              </span>
              <div className="w-full">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Summary
                </span>
                <textarea
                  value={value.title}
                  onChange={(event) => onChange("title", event.target.value)}
                  className="w-full select-none text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Briefly explain why you're a great fit for the role - use the AI assistant to tailor this summary for each job posting."
                ></textarea>
              </div>

              <div className="w-full h-10 flex justify-between items-center px-4 border-[1px] border-[#dde7e9] mt-2 rounded">
                <div className="flex items-center gap-x-1">
                  <div className="w-6 h-6 flex justify-center items-center text-xl text-[#4e4f50] rounded-full">
                    <IoMdCheckmarkCircleOutline />
                  </div>
                  <span className="text-[#53555e] text-sm block">
                    Content Issues
                  </span>
                </div>

                <div className="w-6 h-6 bg-green-600 flex justify-center items-center text-white cursor-pointer text-2xl rounded">
                  <IoIosCheckmark />
                </div>
              </div>
              <button className="w-full h-12 bg-[#5e41f0] cursor-pointer rounded mt-9 text-white text-base">
                Done
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Summary;
