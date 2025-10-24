import { FiEdit } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";
import { GrTemplate } from "react-icons/gr";
import { RiContrastDropFill } from "react-icons/ri";
import { LuCircleCheckBig } from "react-icons/lu";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { PiArrowArcRightBold } from "react-icons/pi";
import { PiArrowArcLeftBold } from "react-icons/pi";
import { useMobile } from "../../context/mobileContext";

const Sidebar = ({
  setShowRearrange,
  setShowAddSection,
  handleDownloadPDF,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly">
      <div className="flex items-center justify-evenly gap-x-2">
        <div className="w-7 h-7 text-[#676F72] hover:bg-purple-50 text-xl flex justify-center items-center rounded-full cursor-pointer">
          <PiArrowArcLeftBold />
        </div>
        <div className="w-[1px] h-6 bg-[#E4E4E4]"></div>
        <div className="w-7 h-7 text-[#676F72] hover:bg-purple-50 text-xl flex justify-center items-center rounded-full cursor-pointer">
          <PiArrowArcRightBold />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E4E4E4]"></div>
      <div
        onClick={() => setShowAddSection(true)}
        className="group flex items-center gap-x-0 pl-4 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer"
      >
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <FiEdit />
        </div>
        <span className="text-sm font-medium">Add section</span>
      </div>
      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <LuArrowUpDown />
        </div>
        <span
          onClick={() => setShowRearrange(true)}
          className="text-sm font-medium"
        >
          Rearrange
        </span>
      </div>
      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <GrTemplate />
        </div>
        <span className="text-sm font-medium">Templates</span>
      </div>
      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <RiContrastDropFill />
        </div>
        <span className="text-sm font-medium">Design & Font</span>
      </div>

      <div className="w-full h-[1px] bg-[#E4E4E4]"></div>

      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <LuCircleCheckBig />
        </div>
        <span className="text-sm font-medium">Improve text</span>
      </div>
      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <MdOutlinePlaylistAddCheckCircle />
        </div>
        <span className="text-sm font-medium">Check</span>
      </div>

      <div className="w-full h-[1px] bg-[#E4E4E4]"></div>

      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <MdOutlineFileDownload />
        </div>
        <span
          onClick={() => handleDownloadPDF()}
          className="text-sm font-medium"
        >
          Download
        </span>
      </div>
      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-xl flex justify-center items-center rounded-full">
          <IoMdShare />
        </div>
        <span className="text-sm font-medium">share</span>
      </div>
      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-yellow-500 text-xl flex justify-center items-center rounded-full">
          <FaCrown />
        </div>
        <span className="text-sm font-medium">History</span>
      </div>
      <div className="group flex items-center gap-x-2 transition-colors duration-300 text-[#676F72] hover:text-purple-400 cursor-pointer pl-4">
        <div className="w-7 h-7 group-hover:bg-purple-50 text-yellow-500 text-xl flex justify-center items-center rounded-full">
          <FaCrown />
        </div>
        <span className="text-sm font-medium">branding</span>
      </div>
    </div>
  );
};

export default Sidebar;
