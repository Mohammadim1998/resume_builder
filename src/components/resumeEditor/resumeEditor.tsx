import { IoEyeOutline } from "react-icons/io5";
import Sidebar from "../sidebar/sidebar";
import Address from "../sections/address/address";

const ResumeEditor = () => {
  return (
    <section className="w-full h-full flex gap-x-10 p-2 md:p-4">
      <aside className="w-[12%] bg-white rounded hidden md:flex">
        <Sidebar />
      </aside>

      <div className="relative w-full md:w-[70%] bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.23)] md:p-12 rounded-2xl">
        {/* THIS BOX IS FOR WHEM WE CLICK ON THIS BOX THEN RESUME-PREVEIW will OPEN */}
        <div className="absolute top-0 -right-14 text-2xl w-10 h-10 bg-white cursor-pointer hidden md:flex justify-center items-center rounded">
          <IoEyeOutline />
        </div>

        <Address />
      </div>
    </section>
  );
};

export default ResumeEditor;
