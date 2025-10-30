import { FaRegTrashAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxText } from "react-icons/rx";
import { useMobile } from "../../../context/mobileContext";

const Toolbar = ({
  name,
  itemId,
  setOpenItemToolbar,
}) => {
  const { formData, addSectionItem, removeSectionItem, removeSection } =
    useMobile();

  
  return (
    <div
      className="bg-white h-10 flex items-center rounded-3xl"
    >
      <div
        onClick={() => addSectionItem(name)}
        className="h-full flex items-center justify-center hover:opacity-80 transition-all duration-300 cursor-pointer bg-[#2DC08D]  text-white gap-x-2 rounded-l-3xl px-2"
      >
        <div className="text-2xl font-semibold">+</div>
        <span className="font-semibold">Entry</span>
      </div>

      <div className="h-full flex items-center text-2xl px-3 border-l-[1px] border-l-[#F3F3F3] text-[#384347] hover:text-[#2DC08D] transition-all duration-300 cursor-pointer">
        <MdKeyboardArrowDown />
      </div>
      <div className="h-full flex items-center text-[18px] px-3 border-l-[1px] border-l-[#F3F3F3] text-[#384347] hover:text-[#2DC08D] transition-all duration-300 cursor-not-allowed">
        <RxText />
      </div>
      <div className="h-full flex items-center text-[18px] px-3 border-l-[1px] border-l-[#F3F3F3] text-[#384347] hover:text-[#2DC08D] transition-all duration-300 cursor-pointer">
        <IoDiamondOutline />
      </div>
      <div
        onClick={() => {
          if (formData[name].items.length === 1) {
            removeSection(name);
          }
          removeSectionItem(name, itemId);
          setOpenItemToolbar(false);
        }}
        className="h-full flex items-center text-[18px] px-3 border-l-[1px] border-l-[#F3F3F3] text-[#384347] hover:text-red-600 transition-all duration-300 cursor-pointer"
      >
        <FaRegTrashAlt />
      </div>
      <div className="h-full flex items-center text-[18px] px-3 border-l-[1px] border-l-[#F3F3F3] text-[#384347] hover:text-[#2DC08D] transition-all duration-300 cursor-pointer">
        <FiSettings />
      </div>
    </div>
  );
};

export default Toolbar;
