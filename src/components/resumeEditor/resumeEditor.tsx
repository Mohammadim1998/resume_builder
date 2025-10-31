import React, { useState, useEffect } from "react";
import { IoEyeOutline } from "react-icons/io5";
import Sidebar from "../sidebar/sidebar";
import Address from "../sections/address/address";
import Summary from "../sections/summary/summary";
import Skills from "../sections/skills/skills";
import Education from "../sections/education/education";
import Achievement from "../sections/achievements/achievements";
import Projects from "../sections/projects/projects";
import Experience from "../sections/experience/experienc";
import Languages from "../sections/languages/languages";
import RearrangePanel from "../reArrangePanel/reArrangePanel";
import ResumePreview from "../resumePreview/resumePreview";
import { IoMdClose } from "react-icons/io";
import { PiArrowArcLeftBold, PiArrowArcRightBold } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { useMobile } from "../../context/mobileContext";
import AddSection from "../addSection/addSection";
import AddSectionMobile from "../addSection/addSectionMobile";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbArrowUpRight } from "react-icons/tb";
import { LuFileSpreadsheet } from "react-icons/lu";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../footer/footer";
import Strengths from "../sections/strengths/strengths";
import SocialMedia from "../sections/socialmedia/socialmedia";
import Training from "../sections/training/training";

const sectionComponents = {
  summary: Summary,
  education: Education,
  projects: Projects,
  achievement: Achievement,
  experience: Experience,
  languages: Languages,
  skills: Skills,
  strengths: Strengths,
  socialMedia: SocialMedia,
  training: Training,
};

const ResumeEditor = () => {
  /* This place for reArrange */
  const {
    formData,
    setFormData,
    handleDownloadPDF,
    resumeRef,
    initialSections,
    removeSection,
  } = useMobile();
  const [sections, setSections] = useState(initialSections);
  console.log("sections: ", sections);
  console.log("initialSections: ", initialSections);

  const [showRearrange, setShowRearrange] = useState(false);
  const [showAddSection, setShowAddSection] = useState(false);
  const [showAddSectionMobileState, setShowAddSectionMobileState] =
    useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showSidebar, setshowSidebar] = useState(false);

  useEffect(() => {
    setSections(initialSections);
  }, [initialSections]);
  
  const updateOrder = (newOrder) => setSections(newOrder);
  /* End place for reArrange */

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (showPreview || showAddSectionMobileState) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showPreview, showAddSectionMobileState]);

  const handleAddressChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const renderSections = (section) => {
    const Component = sectionComponents[section.component];
    if (!Component) return null;

    return <Component key={section.id} />;
  };

  return (
    <>
      <section className="relative w-full flex justify-center gap-x-10 px-2 md:px-4 pt-16 pb-24">
        {/* header */}
        <div className="absolute select-none top-0 left-0 right-0 w-full hidden md:flex justify-between items-center px-4 h-12 bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.23)]">
          <div className="flex gap-x-8">
            <div>
              <img src="/src/assets/logo.svg" alt="" className="" />
            </div>
            <ul className="flex items-center gap-x-4 text-[#444E52] text-sm font-semibold">
              <li className="items-center hidden lg:flex">
                Create New
                <div className="text-2xl">
                  <MdKeyboardArrowDown />
                </div>
              </li>
              <li>Documents</li>
              <li className="items-center hidden lg:flex">
                JobApplication Tracker
              </li>
              <li className="items-center hidden lg:flex">Interview Help</li>
              <li className="items-center hidden lg:flex">
                Resume Examples
                <div className="text-sm">
                  <TbArrowUpRight />
                </div>
              </li>
              <li className="flex gap-x-2">
                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-[#D5F2E8] text-[#2DC08D] text-md">
                  <LuFileSpreadsheet />
                </div>
                New Resume (1){" "}
                <span className="text-[#CCCFCF] hidden lg:flex">(Saved)</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-x-2">
            <button className="bg-[#00C091] text-white font-semibold px-4 py-1 rounded-md cursor-pointer select-none">
              Upgrade
            </button>
            <div className="w-9 h-9 bg-[#65696D] rounded-full lg:flex hidden justify-center items-center text-white select-none text-sm font-semibold">
              MP
            </div>
            <div className="text-[#384347] text-2xl cursor-pointer lg:flex hidden">
              <TiArrowSortedDown />
            </div>
            <div className="text-[#384347] text-2xl cursor-pointer lg:hidden flex">
              <GiHamburgerMenu />
            </div>
          </div>
        </div>

        {/* End header */}
        {/* header mobile state */}
        <div className="absolute select-none top-0 left-0 right-0 w-full flex md:hidden justify-between items-center px-4 h-12 bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.23)]">
          <div className="flex gap-x-2">
            <div className="text-2xl rotate-90">
              <MdKeyboardArrowDown />
            </div>
            <span className="font-semibold">Documents</span>
          </div>
        </div>
        {/* End header mobile state*/}

        <aside
          className={`z-30 lg:w-[12%] w-[17%] shrink-0 fixed max-lg:top-16 lg:top-16 max-lg:left-16 lg:left-4 h-[85%] bg-white rounded max-md:hidden ${
            showSidebar ? "flex" : "hidden"
          } lg:flex`}
        >
          <Sidebar
            setShowRearrange={setShowRearrange}
            setShowAddSection={setShowAddSection}
            handleDownloadPDF={handleDownloadPDF}
          />
        </aside>

        {!showSidebar ? (
          <div
            onClick={() => setshowSidebar(true)}
            className={`w-8 h-8 fixed top-16 left-6 max-md:hidden lg:hidden rounded bg-white text-gray-800 flex justify-center items-center cursor-pointer`}
          >
            ...
          </div>
        ) : (
          <div
            onClick={() => setshowSidebar(false)}
            className={`w-8 h-8 fixed top-16 left-6 max-md:hidden lg:hidden rounded bg-white text-gray-800 flex justify-center items-center cursor-pointer`}
          >
            <IoMdClose />
          </div>
        )}

        <div className="relative w-full md:w-[90%] max-lg:ml-auto lg:w-[70%] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.23)] md:p-12 rounded-2xl">
          {/* THIS BOX IS FOR WHEM WE CLICK ON THIS BOX THEN RESUME-PREVEIW will OPEN */}
          <div
            onClick={() => setShowPreview(true)}
            className="fixed max-lg:top-28 lg:top-16 max-lg:left-6 lg:right-32 text-2xl w-8 h-8 bg-white cursor-pointer max-md:hidden hidden md:flex justify-center items-center rounded"
          >
            <IoEyeOutline />
          </div>

          <Address value={formData.address} onChange={handleAddressChange} />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-2 mt-4">
            {sections.map(renderSections)}
          </div>
        </div>

        {showRearrange && (
          <RearrangePanel
            sections={sections}
            onClose={() => setShowRearrange(false)}
            onSave={(newOrder) => {
              updateOrder(newOrder);
              setShowRearrange(false);
            }}
          />
        )}
        {/* Add Section in tablet and wide screen */}
        {showAddSection && <AddSection setShowAddSection={setShowAddSection} />}
        {/* End Add Section in tablet and wide screen */}

        {/* Add Section in mobile screen */}
        {showAddSectionMobileState && (
          <AddSectionMobile
            setShowAddSectionMobileState={setShowAddSectionMobileState}
            setShowRearrange={setShowRearrange}
            setShowPreview={setShowPreview}
          />
        )}
        {/* End Add Section in mobile screen */}

        {showPreview && (
          <ResumePreview
            setShowPreview={setShowPreview}
            formData={formData}
            sections={sections}
            resumeRef={resumeRef}
          />
        )}

        {/* This is menu in mobile state */}
        <div className="z-30 fixed left-0 right-0 bottom-0 w-full flex justify-between md:hidden h-16 bg-white px-4 py-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]">
          <div className="flex items-center justify-evenly gap-x-2">
            <div className="flex flex-col items-center text-[#AFB4B5]">
              <div className="w-6 h-6 text-xl flex justify-center items-center rounded-full cursor-not-allowed">
                <PiArrowArcLeftBold />
              </div>
              <span className="text-sm font-semibold">Undo</span>
            </div>
            <div className="flex flex-col items-center text-[#AFB4B5]">
              <div className="w-6 h-6 text-xl flex justify-center items-center rounded-full cursor-not-allowed">
                <PiArrowArcRightBold />
              </div>
              <span className="text-sm font-semibold">Redo</span>
            </div>
          </div>

          <div className="w-[1px] h-full bg-[#AFB4B5]"></div>

          <div
            onClick={() => setShowAddSectionMobileState(true)}
            className="flex flex-col items-center justify-center cursor-pointer text-[#AFB4B5]"
          >
            <div className="group-hover:bg-purple-50 text-[#384347] text-2xl flex justify-center items-center rounded-full">
              <FiEdit />
            </div>
            <span className="text-sm font-semibold">Sections</span>
          </div>

          <div className="w-[1px] h-full bg-[#AFB4B5]"></div>
          <button
            onClick={() => setShowPreview(true)}
            className="bg-[#5F4DC7] hover:bg-[#9283e9] px-[50px] cursor-pointer rounded-md text-white font-bold transition-all duration-300"
          >
            Preview
          </button>
        </div>
        {/* End menu in mobile state */}
      </section>

      {/* Footer */}
      <div className="w-full hidden md:flex justify-center items-center pb-4">
        <Footer />
      </div>
      {/* End Footer */}
    </>
  );
};

export default ResumeEditor;
