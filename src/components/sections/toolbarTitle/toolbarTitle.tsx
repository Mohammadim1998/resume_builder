import { FaRegTrashAlt } from "react-icons/fa";
import { useMobile } from "../../../context/mobileContext";
import { LuArrowUpDown } from "react-icons/lu";

const toolbarTitle = ({name}) => {
  const { addSectionItem, removeSection } = useMobile();
 
  return (
    <div
      className="bg-white h-8 flex items-center rounded-3xl"
    >
      <div
        onClick={() => addSectionItem(name)}
        className="h-full flex items-center justify-center hover:opacity-80 transition-all duration-300 cursor-pointer bg-[#2DC08D]  text-white gap-x-2 rounded-l-3xl px-2"
      >
        <div className="text-2xl font-semibold">+</div>
        <span className="font-semibold">Entry</span>
      </div>

      <div
        onClick={() => removeSection(name)}
        className="h-full flex items-center text-[18px] px-3 border-l-[1px] border-l-[#F3F3F3] text-[#384347] hover:text-red-600 transition-all duration-300 cursor-pointer"
      >
        <FaRegTrashAlt />
      </div>
      <div className="h-full flex items-center text-xl px-3 border-l-[1px] border-l-[#F3F3F3] text-[#384347] hover:text-[#2DC08D] transition-all duration-300 cursor-pointer">
        <LuArrowUpDown />
      </div>
    </div>
  );
};

export default toolbarTitle;
