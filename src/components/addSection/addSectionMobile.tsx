import { useMobile } from "../../context/mobileContext";
import { LuArrowUpDown, LuCircleCheckBig } from "react-icons/lu";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const defaultSections = [
  { id: "summary", title: "Summary", component: "summary", column: "left" },
  {
    id: "experience",
    title: "Experience",
    component: "experience",
    column: "left",
  },
  {
    id: "education",
    title: "Education",
    component: "education",
    column: "left",
  },
  { id: "projects", title: "Projects", component: "projects", column: "left" },
  {
    id: "achievement",
    title: "Achievements",
    component: "achievement",
    column: "left",
  },
  {
    id: "languages",
    title: "Languages",
    component: "languages",
    column: "left",
  },
  { id: "skills", title: "Skills", component: "skills", column: "left" },
  {
    id: "strengths",
    title: "Strengths",
    component: "strengths",
    column: "left",
  },
  {
    id: "socialMedia",
    title: "SocialMedia",
    component: "socialMedia",
    column: "left",
  },
  { id: "training", title: "Training", component: "training", column: "left" },
];
const AddSectionMobile = ({
  setShowAddSectionMobileState,
  setShowRearrange,
  setShowPreview,
}) => {
  const { toggleSection, initialSections } = useMobile();

  const addToResumeEdit = (section) => {
    toggleSection(section);
    setShowAddSectionMobileState(false);
  };

  const isActiveSection = (sectionId) => {
    return initialSections.some((sec) => sec.id === sectionId);
  };

  return (
    <div className="fixed top-0 left-0 right-0 select-none bottom-0 bg-white flex flex-col justify-center z-40 overflow-scroll">
      {/* Header for this page */}
      <div className="absolute top-0 left-0 right-0 w-full h-[54px] bg-white px-3 flex items-center justify-between shadow-[0px_0px_2px_0px_rgba(0,0,0,0.30)]">
        <div
          onClick={() => setShowAddSectionMobileState(false)}
          className="flex items-center gap-x-2 cursor-pointer text-[#676F72]"
        >
          <div className="text-2xl">
            <MdKeyboardArrowLeft />
          </div>
          <span className="font-semibold">Back to Resume</span>
        </div>

        <div
          onClick={() => setShowPreview(true)}
          className="w-10 h-10 border-[1px] cursor-pointer border-[#E0E1E2] flex justify-center items-center rounded-full"
        >
          <div className="text-[#3D484C] text-2xl">
            <IoEyeOutline />
          </div>
        </div>
      </div>
      {/* End Header for this page */}
      {/* EeArrange Sectin */}
      <div className="flex flex-col px-8 mt-[100px]">
        <div
          onClick={() => setShowRearrange(true)}
          className="w-full h-[60px] flex justify-between items-center p-4 bg-[#F5F7FC] text-[#384347] mb-2 rounded-md"
        >
          <span className="text-sm font-normal">REARRANGE SECTIONS</span>

          <div className="text-xl">
            <LuArrowUpDown />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#D8D9DB]"></div>
        {/* End EeArrange Sectin */}

        <div className="w-full h-full">
          {/* Body */}
          <div className="flex flex-col gap-y-6 mt-8">
            <div className="">
              <span className="text-[#384347] text-sm font-normal">
                ADD SECTIONS
              </span>
            </div>
            <div className="w-full h-full select-none flex flex-col gap-y-6">
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[0])}
                className=""
              >
                {isActiveSection("summary") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Summary</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Summary</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[1])}
                className=""
              >
                {isActiveSection("experience") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Experience</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Experience</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[2])}
                className=""
              >
                {isActiveSection("education") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Education</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Education</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[3])}
                className=""
              >
                {isActiveSection("projects") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Projects</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Projects</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[4])}
                className=""
              >
                {isActiveSection("achievement") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Achievement</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Achievement</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[5])}
                className=""
              >
                {isActiveSection("languages") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Languages</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Languages</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[9])}
                className=""
              >
                {isActiveSection("training") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Tranining</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Tranining</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[8])}
                className=""
              >
                {isActiveSection("socialMedia") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">
                      Find Me Online
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">
                      Find Me Online
                    </span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[7])}
                className=""
              >
                {isActiveSection("strengths") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Strengths</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Strengths</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Box */}
              <div
                onClick={() => addToResumeEdit(defaultSections[6])}
                className=""
              >
                {isActiveSection("skills") ? (
                  <div className="flex items-center gap-3 text-[#B7B4B5]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <LuCircleCheckBig />
                    </div>
                    <span className="text-base font-semibold">Skill</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-[#384347]">
                    <div className="w-6 h-6 text-2xl flex justify-center items-center">
                      <HiOutlineDocumentPlus />
                    </div>
                    <span className="text-base font-semibold">Skill</span>
                  </div>
                )}
              </div>
              {/* End Box */}
              {/* Body */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSectionMobile;
