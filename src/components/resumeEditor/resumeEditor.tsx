import { IoEyeOutline } from "react-icons/io5";
import Sidebar from "../sidebar/sidebar";

const ResumeEditor = () => {
  return (
    <section className="w-full h-dvh flex gap-x-10 p-4">
      <aside className="w-[12%]  bg-white rounded">
        <Sidebar />
      </aside>

      <div className="relative w-[70%] bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.23)]">
        
        {/* THIS BOX IS FOR WHEM WE CLICK ON THIS BOX THEN RESEME-PREVEIW OPEN */}
        <div className="absolute top-0 -right-14 text-2xl w-10 h-10 bg-white cursor-pointer flex justify-center items-center rounded">
          <IoEyeOutline />
        </div>

        
      </div>
    </section>
  );
};

export default ResumeEditor;
