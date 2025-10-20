import { IoEyeOutline } from "react-icons/io5";
import Sidebar from "../sidebar/sidebar";
import Address from "../sections/address/address";
import Summary from "../sections/summary/summary";
import Education from "../sections/education/education";
import Achievement from "../sections/achievements/achievements";
import Projects from "../sections/projects/projects";
import Experience from "../sections/experience/experienc";
import Languages from "../sections/languages/languages";

const ResumeEditor = () => {
  return (
    <section className="w-full flex justify-center gap-x-10 p-2 md:p-4">
      <aside className="w-[12%] fixed top-4 left-4 h-[90%] bg-white rounded hidden md:flex">
        <Sidebar />
      </aside>

      <div className="relative w-full md:w-[70%] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.23)] md:p-12 rounded-2xl">
        {/* THIS BOX IS FOR WHEM WE CLICK ON THIS BOX THEN RESUME-PREVEIW will OPEN */}
        <div className="absolute top-0 -right-14 text-2xl w-10 h-10 bg-white cursor-pointer hidden md:flex justify-center items-center rounded">
          <IoEyeOutline />
        </div>

        <Address />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-2 mt-4">
          <Summary />
          <Education />
          <Achievement />
          <Projects />
          <Experience />
          <Languages />
          
        </div>
      </div>
    </section>
  );
};

export default ResumeEditor;
