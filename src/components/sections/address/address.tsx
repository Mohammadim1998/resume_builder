import { GoPerson } from "react-icons/go";
import { VscCloudDownload } from "react-icons/vsc";
import { TbEyeOff } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoLocationSharp, IoSettingsOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { BsArrowsAngleContract } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMobile } from "../../../context/mobileContext";

const Address = ({ value, onChange }) => {
  const [closeHeaderInMobileState, setCloseHeaderInMobileState] =
    useState(false);
  const { isMobile } = useMobile();

  return (
    <>
      {!isMobile ? (
        <div className="w-full flex justify-between items-center select-none">
          <div className="">
            <form>
              <div className="w-full h-10">
                <input
                  value={value.name}
                  onChange={(event) => onChange("name", event.target.value)}
                  type="text"
                  className="w-full h-full border-none outline-none bg-transparent placeholder:text-[#7F7F7F] text-4xl font-semibold"
                  placeholder="YOUR NAME"
                />
              </div>
              <div className="w-full h-10">
                <input
                  value={value.apply}
                  onChange={(event) => onChange("apply", event.target.value)}
                  type="text"
                  className="w-full h-full border-none outline-none bg-transparent placeholder:text-[#94CAFF] text-lg font-medium text-[#1E90FF]"
                  placeholder="The role you are applying for?"
                />
              </div>

              <div className="w-full flex items-center justify-start">
                <div className="flex items-center gap-x-1 ">
                  <div className="w-3 h-3 flex justify-center items-center text-[#1E90FF]">
                    <FaPhone />
                  </div>
                  <div className={`${value.phone ? 'w-auto' : 'w-[60px]'}`}>
                    <input
                      value={value.phone}
                      onChange={(event) =>
                        onChange("phone", event.target.value)
                      }
                      type="text"
                      className=" h-full border-none outline-none bg-transparent placeholder:text-[#7F7F7F] text-sm font-medium"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="w-3 h-3 flex justify-center items-center text-[#1E90FF]">
                    @
                  </div>
                  <div className={`${value.email ? 'w-auto' : 'w-[60px]'}`}>
                    <input
                      value={value.email}
                      onChange={(event) =>
                        onChange("email", event.target.value)
                      }
                      type="text"
                      className="w-full h-full border-none outline-none bg-transparent placeholder:text-[#7F7F7F] text-sm font-medium"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="w-3 h-3 flex justify-center items-center text-[#1E90FF]">
                    <MdFolderShared />
                  </div>
                  <div className={`${value.linkedin ? 'w-auto' : 'w-[130px]'}`}>
                    <input
                      value={value.linkedin}
                      onChange={(event) =>
                        onChange("linkedin", event.target.value)
                      }
                      type="text"
                      className="w-full h-full border-none outline-none bg-transparent placeholder:text-[#7F7F7F] text-sm font-medium"
                      placeholder="LinkedIn/Portfolio"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="w-3 h-3 flex justify-center items-center text-[#1E90FF]">
                    <IoLocationSharp />
                  </div>
                  <div className={`${value.location ? 'w-auto' : 'w-[60px]'}`}>
                    <input
                      value={value.location}
                      onChange={(event) =>
                        onChange("location", event.target.value)
                      }
                      type="text"
                      className="w-full h-full border-none outline-none bg-transparent placeholder:text-[#7F7F7F] text-sm font-medium"
                      placeholder="Location"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* This is for right side for user's profile */}
          <div className="group relative w-40 h-40 flex justify-center items-center">
            <div className="w-32 h-32 bg-[#EAEAEA] rounded-full flex justify-center items-end text-8xl text-[#8C8C8C]">
              <GoPerson />
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 left-0 right-0 top-0 bottom-0 flex justify-center items-center gap-x-3 cursor-pointer w-40 h-40 bg-[#18171763] transition-all duration-500 rounded-md">
              <button className="w-10 h-10 bg-green-400 hover:bg-green-600 transition-all duration-300 flex justify-center items-center rounded text-xl text-white">
                <VscCloudDownload />
              </button>
              <button className="w-10 h-10 bg-red-400 hover:bg-red-600 transition-all duration-300 flex justify-center items-center rounded text-xl text-white">
                <TbEyeOff />
              </button>
            </div>
          </div>
          {/* End user's profile */}
        </div>
      ) : (
        <div
          className={`w-full select-none ${
            closeHeaderInMobileState ? "h-44 overflow-y-hidden" : "min-h-screen"
          } bg-white rounded-2xl p-4`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold">Header</span>

            <div className="text-xl cursor-pointer">
              <IoSettingsOutline />
            </div>
          </div>
          {/* End Header section */}

          <div className="w-full">
            <div>
              <div className="flex justify-between items-center">
                <span className="font-normal">Personal details</span>

                <div
                  onClick={() => setCloseHeaderInMobileState((prev) => !prev)}
                  className="text-xl cursor-pointer"
                >
                  <BsArrowsAngleContract />
                </div>
              </div>

              <div className="flex items-center gap-x-4 mt-4 select-none">
                <div className="w-16 h-16 bg-[#EAEAEA] cursor-pointer text-[#8C8C8C] flex justify-center items-end text-5xl rounded-full">
                  <GoPerson />
                </div>
                <div className="w-8 h-8 border-[2px] border-black cursor-pointer flex justify-center items-center text-2xl rounded">
                  <VscCloudDownload />
                </div>
                <div className="w-8 h-8 text-white bg-red-500 cursor-pointer flex justify-center items-center text-xl rounded">
                  <FaRegTrashAlt />
                </div>
              </div>
              {/* End portfolio */}

              <form className="mt-4 flex flex-col gap-y-2 select-none">
                <div className="flex flex-col gap-y-2">
                  <span className="">Job Title</span>
                  <div className="w-full h-10 border-[1px] border-[#AFB4B5] rounded">
                    <input
                      value={value.apply}
                      onChange={(event) =>
                        onChange("apply", event.target.value)
                      }
                      type="text"
                      className="w-full h-full px-2 outline-none placeholder:text-[#AFBBCF] rounded"
                      placeholder="The role you are applying for?"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="">Your Name *</span>
                  <div className="w-full h-10 border-[1px] border-[#AFB4B5] rounded">
                    <input
                      value={value.name}
                      onChange={(event) => onChange("name", event.target.value)}
                      type="text"
                      className="w-full h-full px-2 outline-none placeholder:text-[#AFBBCF] rounded"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="">Phone</span>
                  <div className="w-full h-10 border-[1px] border-[#AFB4B5] rounded">
                    <input
                      value={value.phone}
                      onChange={(event) =>
                        onChange("phone", event.target.value)
                      }
                      type="text"
                      className="w-full h-full px-2 outline-none placeholder:text-[#AFBBCF] rounded"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="">Email</span>
                  <div className="w-full h-10 border-[1px] border-[#AFB4B5] rounded">
                    <input
                      value={value.email}
                      onChange={(event) =>
                        onChange("email", event.target.value)
                      }
                      type="text"
                      className="w-full h-full px-2 outline-none placeholder:text-[#AFBBCF] rounded"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="">Location</span>
                  <div className="w-full h-10 border-[1px] border-[#AFB4B5] rounded">
                    <input
                      value={value.location}
                      onChange={(event) =>
                        onChange("location", event.target.value)
                      }
                      type="text"
                      className="w-full h-full px-2 outline-none placeholder:text-[#AFBBCF] rounded"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="">LinkedIn/Portfolio</span>
                  <div className="w-full h-10 border-[1px] border-[#AFB4B5] rounded">
                    <input
                      value={value.linkedin}
                      onChange={(event) =>
                        onChange("linkedin", event.target.value)
                      }
                      type="text"
                      className="w-full h-full px-2 outline-none placeholder:text-[#AFBBCF] rounded"
                      placeholder="LinkedIn/Portfolio"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Address;
