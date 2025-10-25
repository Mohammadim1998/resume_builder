import { useMobile } from "../../../context/mobileContext";
import { GoPencil } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaRegTrashAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";

const Experience = ({ value, onChange,removeSection }) => {
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
            placeholder="EXPERIENCE"
          />
          <div className="w-full h-1 bg-black"></div>
          <input
            value={value.subTitle}
            onChange={(event) => onChange("subTitle", event.target.value)}
            type="text"
            className="w-full text-md h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
            placeholder="Title"
          />
          <input
            value={value.company}
            onChange={(event) => onChange("company", event.target.value)}
            type="text"
            className="w-full text-md h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
            placeholder="Company Name"
          />

          <div className="flex items-center justify-start">
            <div className="flex items-center gap-x-1 ml-2">
              <div className="text-[#65696D] text-sm">
                <FaCalendarAlt />
              </div>
              <DatePicker
                selected={value.date}
                // onChange={(date) => setSelectedDate(date)}
                value={value.date}
                onChange={(date) => onChange("date", date)}
                dateFormat="yyyy/MM/dd"
                placeholderText="Date period"
                isClearable
                className="custom-datepicker w-24 bg-inherit outline-none text-[#A9A9A9] text-sm"
                calendarClassName="custom-calendar"
              />
            </div>
            <div className="flex items-center">
              <div className="text-[#65696D] text-sm">
                <FaLocationDot />
              </div>
              <input
                type="text"
                className="w-full text-sm h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
                placeholder="Location"
              />
            </div>
          </div>

          <input
            value={value.shortDescription}
            onChange={(event) =>
              onChange("shortDescription", event.target.value)
            }
            type="text"
            className="w-full text-sm h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
            placeholder="Company Description"
          />

          <div className="flex items-center mt-2">
            <div className="w-1 h-1 rounded-full bg-[#3E3E3E]"></div>
            <input
              value={value.longDescription}
              onChange={(event) =>
                onChange("longDescription", event.target.value)
              }
              type="text"
              className="w-full text-sm h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
              placeholder="Highlight your accomplishments,using numbers if possible."
            />
          </div>
           <div className="absolute -top-4 right-0 w-8 h-8 cursor-pointer hidden group-hover:flex justify-center items-center rounded bg-white border-[1px] border-gray-600 border-opacity-40" onClick={() => removeSection("experience")}><FaRegTrashAlt /></div>
        </div>
      ) : (
        <>
          <div className="w-full bg-white mt-4 rounded-2xl p-4 select-none">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold select-none">Experience</span>

              <div className="text-xl cursor-pointer">
                <GoPencil />
              </div>
            </div>

            <div
              onClick={() => setOpenEdit(true)}
              className="w-full relative bg-[#FAFBFD]"
            >
              <div className="w-full flex flex-col select-none text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] transition-all duration-300 rounded">
                <span className="font-bold">Title</span>
                <span>Company Name</span>
              </div>
              <div onClick={(event) => {
                  setopenMobileEdit(true);
                  event.stopPropagation();
                }} className="absolute right-6 cursor-pointer top-[50%] translate-y-[-50%] flex flex-col gap-y-[2px]">
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
            <div className="w-full h-full fixed select-none top-0 left-0 right-0 bottom-0 px-8 bg-opacity-90 bg-[#59566A] z-40">
              <div className="pb-2 bg-white rounded-md absolute bottom-10 left-8 right-8">
                <div className="w-full">
                  <div onClick={() => {
                        setopenMobileEdit(false);
                        setOpenEdit(true);
                      }} className="w-full p-6 text-[#505A5D] flex items-center gap-2 border-b-[1px] border-b-[#E4E4E4] pb-4">
                    <div className="text-2xl">
                      <FiEdit3 />
                    </div>
                    <span className="text-xl font-semibold">Edit</span>
                  </div>
                </div>

                <div className="w-full">
                  <div onClick={() => removeSection("experience")} className="w-full p-6 text-[#505A5D] flex items-center gap-2 border-b-[1px] border-b-[#E4E4E4] pb-4">
                    <div className="text-2xl">
                      <FaRegTrashAlt />
                    </div>
                    <span className="text-xl font-semibold">Delete</span>
                  </div>
                </div>
                <div className="text-[#505A5D] text-xl font-semibold text-end p-2">
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
                Experience
              </span>
              <div className="w-full">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Title
                </span>
                <input
                  value={value.subTitle}
                  onChange={(event) => onChange("subTitle", event.target.value)}
                  className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Title"
                />
              </div>
              <div className="w-full">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Company Name
                </span>
                <input
                  value={value.company}
                  onChange={(event) => onChange("company", event.target.value)}
                  className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Company Name"
                />
              </div>

              <div className="w-full mt-2">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Date period
                </span>
                <div className="flex items-center gap-x-2">
                  <DatePicker
                    selected={value.date}
                    // onChange={(date) => setStartDateTime(date)}
                    value={value.date}
                    onChange={(date) => onChange("date", date)}
                    // showTimeSelect
                    className="text-sm w-full text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="زمان"
                    dateFormat="yyyy/MM/dd h:mm aa"
                    placeholderText="From"
                    isClearable
                    minDate={new Date()}
                  />
                  <DatePicker
                    selected={value.date}
                    // onChange={(date) => setEndDateTime(date)}
                    value={value.date}
                    onChange={(date) => onChange("date", date)}
                    // showTimeSelect
                    className="text-sm w-full text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="زمان"
                    dateFormat="yyyy/MM/dd h:mm aa"
                    placeholderText="To"
                    isClearable
                    minDate={new Date()}
                  />
                </div>
              </div>

              <div className="w-full mt-2">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Location
                </span>
                <input
                  value={value.location}
                  onChange={(event) => onChange("location", event.target.value)}
                  className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Location"
                />
              </div>

              <div className="w-full mt-2">
                <span className="text-[#75696C] font-medium mb-2 block">
                  company Description
                </span>
                <input
                  value={value.shortDescription}
                  onChange={(event) =>
                    onChange("shortDescription", event.target.value)
                  }
                  className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="company Description"
                />
              </div>

              <div className="w-full mt-2">
                <span className="text-[#75696C] font-medium mb-2 block">
                  Bullets
                </span>

                <input
                  value={value.longDescription}
                  onChange={(event) =>
                    onChange("longDescription", event.target.value)
                  }
                  className="w-full text-sm h-16 text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="What was a successful outcome of your work? (e.g. Raises $3,000 for the charity)"
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

export default Experience;
