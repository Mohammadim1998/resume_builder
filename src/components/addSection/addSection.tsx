import { useMobile } from "../../context/mobileContext";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineArrowUpward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const defaultSections = [
  { id: "summary", title: "Summary", component: "summary" },
  { id: "experience", title: "Experience", component: "experience" },
  { id: "education", title: "Education", component: "education" },
  { id: "projects", title: "Projects", component: "projects" },
  { id: "achievement", title: "Achievements", component: "achievement" },
  { id: "languages", title: "Languages", component: "languages" },
];
const AddSection = ({ sections, setShowAddSection }) => {
  const { initialSections, setInitialSections } = useMobile();

  const addToResumeEdit = (findSection) => {
    const sectionExist = initialSections.some(
      (section) => section.id === findSection.id
    );
    if (!sectionExist) {
      setInitialSections([...initialSections, findSection]);
      location.reload();
    } else {
      setInitialSections(
        initialSections.filter((section) => section.id !== findSection.id)
      );
      location.reload();
    }
    setShowAddSection(false);
  };

  return (
    <div onClick={() => setShowAddSection(false)} className="fixed inset-0 bg-black/70 flex justify-center z-50 pt-16">
      <div onClick={(event) => event.stopPropagation()} className="relative bg-white w-[90%] max-w-5xl rounded-xl  p-6 pb-32">
        <div
          onClick={() => setShowAddSection(false)}
          className="absolute w-6 h-6 hover:rotate-90 transition-all duration-300 flex justify-center items-center text-2xl cursor-pointer top-3 right-3 text-[#60696C]"
        ><IoMdClose /></div>
        <div className="w-full flex flex-col justify-center items-center gap-y-2">
          <h1 className="text-2xl font-semibold">Add a new section</h1>
          <h3 className="text-base font-normal">
            Click on a section to add it to your resume
          </h3>
        </div>

        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6 py-6 overflow-y-scroll">
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[0])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "summary")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">SUMMARY</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <p className="text-[6px]">
                  When i was 21.I climbed Mount Everest. Not metaphorically, I
                  literally climmbed the highest mountain on Earth. Now, I put
                  that perseverance to work as a secnior account manager for
                  Scrabio. I don't have to climb any mountains... but i do have
                  to move them.
                </p>
              </div>
            </div>
            <span>Summary</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[3])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "projects")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">PROJECTS</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <span className="text-xs font-bold block">
                  Tesla Model S for Kids
                </span>
                <span className="text-[8px]">📖 11/2015 - 04/2016</span>
                <span className="text-[8px]">
                  • Collaboration between Radio Flyer and Tesla to design &
                  create a big friendly Model S car
                </span>
                <span className="text-[8px] border-b-[1px] border-b-gray-40 border-dotted pb-2">
                  • Shot the demo video and photography for the website •
                  Designed the packaging
                </span>
              </div>
            </div>
            <span>Project</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[5])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "language")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">LANGUAGES</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <div className="flex justify-between items-center border-b-[1px] border-b-gray-40 border-dotted pb-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold block">English</span>
                    <span className="text-xs font-bold block">Proficient</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold block">Spanish</span>
                    <span className="text-xs font-bold block">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
            <span>Languages</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[3])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "skill")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">SKILLS</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-2 border-b-[1px] border-b-gray-40 border-dotted pb-2">
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    ReactJs
                  </span>
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    MongoDB
                  </span>
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    Redis
                  </span>
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    Angular
                  </span>
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    TypeScript
                  </span>
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    Github
                  </span>
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    Webpack
                  </span>
                  <span className="text-xs font-semibold block border-b-[2px] border-b-gray-400 pb-1">
                    NodeJs
                  </span>
                </div>
              </div>
            </div>
            <span>Skills</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[2])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "education")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">SKILLS</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <span className="text-[10px] font-semibold block">
                  Master of Business Administration
                </span>
                <span className="text-[8px] font-bold text-[#1E90FF]">
                  Columbia University
                </span>
                <span className="text-[8px] border-b-[1px] border-b-gray-40 border-dotted pb-1">
                  📖 2017
                </span>

                <span className="text-[10px] font-semibold block">
                  B.S. Computer Science
                </span>
                <span className="text-[8px] font-bold text-[#1E90FF]">
                  Worcester Polytechnic Institute
                </span>
                <span className="text-[8px] border-b-[1px] border-b-gray-40 border-dotted pb-1">
                  📖 10/2025 - 06/2017
                </span>
              </div>
            </div>
            <span>Education</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[5])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "training")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">TRAINING / COURSES</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <div className="flex justify-between items-center border-b-[1px] border-b-gray-40 border-dotted pb-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold mb-1 block">
                      Creative Writing
                    </span>
                    <span className="text-[6px] font-normal block">
                      An interactive 4-week course for developing creative
                      writing skills Introduction to Photoshop
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold mb-1 block">
                      Introduction to Photoshop
                    </span>
                    <span className="text-[6px] font-normal block">
                      Basics of web design using the Adobe Photoshop application
                      Training / Courses
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span>Training</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[0])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find(
                    (section) => section.id === "findmeonline"
                  )
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">FIND ME ONLINE</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <div className="flex justify-start gap-16 items-center border-b-[1px] border-b-gray-40 border-dotted pb-2">
                  <div className="flex ">
                    <div className="text-xs mr-1 text-[#1E90FF]">
                      <FaFacebookF />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold block">Facebook</span>
                      <span className="text-[10px] font-normal block">
                        username
                      </span>
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="text-xs mr-1 text-[#1E90FF]">
                      <FaLinkedinIn />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold block">LinkedIn</span>
                      <span className="text-[10px] font-normal block">
                        username
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span>Find me online</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[0])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "strengths")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">STRENGTHS</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <div className="flex flex-col gap-y-1 items-center">
                  <div className="flex border-b-[1px] border-b-gray-40 border-dotted pb-2">
                    <div className="text-xs mr-1 text-[#1E90FF]">
                      <MdOutlineArrowUpward />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold block">Go-getter</span>
                      <span className="text-[8px] font-normal block">
                        20+ recognitions have taught me that with persistence,
                        one can achieve anything
                      </span>
                    </div>
                  </div>

                  <div className="flex border-b-[1px] border-b-gray-40 border-dotted pb-2">
                    <div className="text-xs mr-1 text-[#1E90FF]">
                      <MdOutlineArrowUpward />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold block">Go-getter</span>
                      <span className="text-[8px] font-normal block">
                        20+ recognitions have taught me that with persistence,
                        one can achieve anything
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span>Strengths</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div
            onClick={() => addToResumeEdit(defaultSections[1])}
            className="h-48 flex flex-col justify-center items-center gap-y-1"
          >
            <div className="relative group w-full h-full cursor-pointer">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="z-30 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  {initialSections.find((section) => section.id === "exprience")
                    ? "Remove section"
                    : "Add to resume"}
                </button>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 p-4 bg-white flex flex-col w-full h-full">
                <h1 className="text-xs font-semibold">EXPERIENCE</h1>
                <div className="w-full h-[2px] bg-black mb-1"></div>
                <span className="text-xs font-bold block">
                  Deputy Finance Director
                </span>
                <span className="text-[8px] text-[#1E90FF] font-bold block">
                  City of New York
                </span>
                <span className="text-[8px]">📖 11/2015 - 04/2016</span>
                <span className="text-[8px]">
                  • Collaboration between Radio Flyer and Tesla to design &
                  create a big friendly Model S car
                </span>
                <span className="text-[8px] border-b-[1px] border-b-gray-40 border-dotted pb-2">
                  • Shot the demo video and photography for the website •
                  Designed the packaging
                </span>
              </div>
            </div>
            <span>Exprience</span>
          </div>
          {/* End Box */}
        </div>
      </div>
    </div>
  );
};

export default AddSection;
