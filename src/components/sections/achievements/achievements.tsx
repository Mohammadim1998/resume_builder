import { useMobile } from "../../../context/mobileContext";
import { GoPencil } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";

const Achievement = ({ value, onChange, removeSection }) => {
  const { isMobile } = useMobile();
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDateTime, setStartDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);
  const [openMobileEdit, setopenMobileEdit] = useState(false);

  return (
    <>
      {!isMobile ? (
        <div className="relative group w-full h-fit select-none">
          <input
            value={value.title}
            onChange={(event) => onChange("title", event.target.value)}
            className="placeholder:text-black border-none outline-none font-medium bg-transparent"
            placeholder="KEY ACHIEVENENT"
          />
          <div className="w-full h-1 bg-black"></div>
          <div className="flex items-center">
            <div className="text-[#2393FF]">
              <IoDiamondOutline />
            </div>

            <input
              value={value.name}
              onChange={(event) => onChange("name", event.target.value)}
              type="text"
              className="w-full text-md h-5 bg-transparent outline-none px-2 font-bold focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
              placeholder="Your Achievement"
            />
          </div>
          <input
            value={value.description}
            onChange={(event) => onChange("description", event.target.value)}
            type="text"
            className="w-full text-xs h-5 bg-transparent outline-none ml-4 px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
            placeholder="Describe what you did and the impact it had."
          />
          <div
            className="absolute -top-4 right-0 w-8 h-8 cursor-pointer hidden group-hover:flex justify-center items-center rounded bg-white border-[1px] border-gray-600 border-opacity-40"
            onClick={() => removeSection("achievement")}
          >
            <FaRegTrashAlt />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full bg-white mt-4 rounded-2xl p-4 select-none">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold select-none">
                Key Achievements
              </span>

              <div className="text-xl cursor-pointer">
                <GoPencil />
              </div>
            </div>

            <div
              onClick={() => setOpenEdit(true)}
              className="w-full relative bg-[#FAFBFD]"
            >
              <div className="w-full flex flex-col select-none text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] transition-all duration-300 rounded">
                <span className="font-bold">Your Achievements</span>
                <span>Describe what you did and the impact it had.</span>
              </div>
              <div
                onClick={(event) => {
                  setopenMobileEdit(true);
                  event.stopPropagation();
                }}
                className="absolute right-2 w-10 h-10 rounded-full hover:bg-[#7d858838] cursor-pointer top-[50%] translate-y-[-50%] flex flex-col items-center justify-center gap-y-[2px]"
              >
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
              </div>
            </div>

            <div className="w-11 h-11 bg-[#E3E9F5] text-[#384347] cursor-pointer flex justify-center items-center text-xl mt-3 font-bold rounded-full">
              <LuPlus />
            </div>
          </div>

          {/* open modal edit in mobile state */}
          {openMobileEdit && (
            <div onClick={() => setopenMobileEdit(false)} className="w-full h-full select-none fixed top-0 left-0 right-0 bottom-0 px-8 bg-opacity-90 bg-[#59566A] z-40">
              <div onClick={(event) => event.stopPropagation()} className="pb-2 bg-white rounded-md absolute bottom-10 left-8 right-8">
                <div className="w-full">
                  <div
                    onClick={() => {
                      setopenMobileEdit(false);
                      setOpenEdit(true);
                    }}
                    className="w-full p-6 text-[#505A5D] flex items-center gap-2 border-b-[1px] border-b-[#E4E4E4] pb-4"
                  >
                    <div className="text-2xl">
                      <FiEdit3 />
                    </div>
                    <span className="text-xl font-semibold">Edit</span>
                  </div>
                </div>

                <div className="w-full">
                  <div
                    onClick={() => removeSection("achievement")}
                    className="w-full p-6 text-[#505A5D] flex items-center gap-2 border-b-[1px] border-b-[#E4E4E4] pb-4"
                  >
                    <div className="text-2xl">
                      <FaRegTrashAlt />
                    </div>
                    <span className="text-xl font-semibold">Delete</span>
                  </div>
                </div>
                <div onClick={() => setopenMobileEdit(false)} className="text-[#505A5D] text-xl font-semibold text-end p-2">
                  cancel
                </div>
              </div>
            </div>
          )}
          {/* End open modal edit in mobile state */}
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
                Key Achievements
              </span>
              <div className="w-full">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Your Achievement
                </span>
                <input
                  value={value.title}
                  onChange={(event) => onChange("title", event.target.value)}
                  className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Your Achievement"
                />
              </div>
              <div className="w-full mt-2">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Description
                </span>
                <input
                  value={value.description}
                  onChange={(event) =>
                    onChange("description", event.target.value)
                  }
                  className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Describe what you did and the impact it had."
                />
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
              <div
                onClick={() => setOpenEdit(false)}
                className="w-full h-12 flex justify-center items-center bg-[#5e41f0] cursor-pointer rounded mt-9 text-white text-base"
              >
                Done
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Achievement;
