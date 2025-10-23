import React, { useState, useEffect } from "react";
import { IoEyeOutline } from "react-icons/io5";
import Sidebar from "../sidebar/sidebar";
import Address from "../sections/address/address";
import Summary from "../sections/summary/summary";
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

const sectionComponents = {
  summary: Summary,
  education: Education,
  projects: Projects,
  achievement: Achievement,
  experience: Experience,
  languages: Languages,
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
  const [showRearrange, setShowRearrange] = useState(false);
  const [showAddSection, setShowAddSection] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showSidebar, setshowSidebar] = useState(false);
  

  const updateOrder = (newOrder) => setSections(newOrder);
  /* End place for reArrange */

  useEffect(() => {
    if (showPreview) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPreview]);

  const handleAddressChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };
  const handleSummaryChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      summary: { ...prev.summary, [field]: value },
    }));
  };

  const handleEducationChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: { ...prev.education, [field]: value },
    }));
  };
  const handleProjectsChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      projects: { ...prev.projects, [field]: value },
    }));
  };
  const handleAchievementChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      achievement: { ...prev.achievement, [field]: value },
    }));
  };
  const handleExperienceChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      experience: { ...prev.experience, [field]: value },
    }));
  };
  const handleLanguagesChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      languages: { ...prev.languages, [field]: value },
    }));
  };

  const renderSections = (section) => {
    const Component = sectionComponents[section.component];
    if (!Component) return null;

    const handlers = {
      summary: handleSummaryChange,
      education: handleEducationChange,
      projects: handleProjectsChange,
      achievement: handleAchievementChange,
      experience: handleExperienceChange,
      languages: handleLanguagesChange,
    };

    return (
      <Component
        key={section.id}
        value={formData[section.component]}
        onChange={handlers[section.component]}
        removeSection={removeSection}
      />
    );
  };

  return (
    <section className="w-full flex justify-center gap-x-10 p-2 md:p-4 pb-24">
      <aside
        className={`z-30 lg:w-[12%] w-[17%] shrink-0 fixed max-lg:top-16 lg:top-4 max-lg:left-16 lg:left-4 h-[90%] bg-white rounded max-md:hidden ${
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
          className={`w-8 h-8 fixed top-12 left-6 max-md:hidden lg:hidden rounded bg-white text-gray-800 flex justify-center items-center cursor-pointer`}
        >
          ...
        </div>
      ) : (
        <div
          onClick={() => setshowSidebar(false)}
          className={`w-8 h-8 fixed top-12 left-6 max-md:hidden lg:hidden rounded bg-white text-gray-800 flex justify-center items-center cursor-pointer`}
        >
          <IoMdClose />
        </div>
      )}

      <div className="relative w-full md:w-[90%] max-lg:ml-auto lg:w-[70%] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.23)] md:p-12 rounded-2xl">
        {/* THIS BOX IS FOR WHEM WE CLICK ON THIS BOX THEN RESUME-PREVEIW will OPEN */}
        <div
          onClick={() => setShowPreview(true)}
          className="fixed max-lg:top-24 lg:top-6 max-lg:left-6 lg:right-32 text-2xl w-8 h-8 bg-white cursor-pointer max-md:hidden hidden md:flex justify-center items-center rounded"
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
      {showAddSection && (
        <AddSection sections={sections} setShowAddSection={setShowAddSection} />
      )}

      {showPreview && (
        <ResumePreview
          setShowPreview={setShowPreview}
          formData={formData}
          sections={sections}
          resumeRef={resumeRef}
        />
      )}

      {/* This is menu in mobile state */}
      <div className="z-40 fixed left-0 right-0 bottom-0 w-full flex justify-between md:hidden h-16 bg-white px-4 py-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]">
        <div className="flex items-center justify-evenly gap-x-2">
          <div className="flex flex-col items-center text-[#AFB4B5]">
            <div className="w-7 h-7 text-xl flex justify-center items-center rounded-full cursor-not-allowed">
              <PiArrowArcLeftBold />
            </div>
            <span className="text-sm font-semibold">Undo</span>
          </div>
          <div className="flex flex-col items-center text-[#AFB4B5]">
            <div className="w-7 h-7 text-xl flex justify-center items-center rounded-full cursor-not-allowed">
              <PiArrowArcRightBold />
            </div>
            <span className="text-sm font-semibold">Redo</span>
          </div>
        </div>

        <div className="w-[1px] h-full bg-[#AFB4B5]"></div>

        <div className="flex flex-col items-center text-[#AFB4B5]">
          <div className="group-hover:bg-purple-50 text-[#384347] text-2xl flex justify-center items-center rounded-full">
            <FiEdit />
          </div>
          <span className="text-sm font-semibold">Sections</span>
        </div>

        <div className="w-[1px] h-full bg-[#AFB4B5]"></div>
        <button
          onClick={() => setShowPreview(true)}
          className="bg-[#5F4DC7] hover:bg-[#9283e9] px-24 cursor-pointer rounded-md text-white font-bold transition-all duration-300"
        >
          Preview
        </button>
      </div>
      {/* End menu in mobile state */}
    </section>
  );
};

export default ResumeEditor;
