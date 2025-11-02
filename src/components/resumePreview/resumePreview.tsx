import { IoMdClose } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useMobile } from "../../context/mobileContext";

const ResumePreview = ({ setShowPreview, formData, sections, resumeRef }) => {
  /* conver everything to string*/
  const formatValue = (value) => {
    if (value === null || value === undefined) return "";
    if (value instanceof Date) {
      return value.toLocaleDateString();
    }
    if (typeof value === "object") {
      return JSON.stringify(value);
    }
    return String(value);
  };
  /* End conver everything to string*/

  const renderSection = (section) => {
    const sectionData = formData[section.component];
    if (!sectionData) return null;

    switch (section.component) {
      case "summary":
        return (
          <div className="">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Summary"}
            </h2>
            {sectionData.items.map((item) => (
              <div key={item.id} className="mb-6">
                <p className="text-gray-600 text-xs">
                  {item.description ||
                    "Briefly explain why you're a great fit for the role - use the AI assistant to"}
                </p>
              </div>
            ))}
          </div>
        );
      case "education":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Education"}
            </h2>
            <div className="space-y-2">
              {sectionData.items.map((item) => (
                <div key={item.id} className="space-y-2">
                  <h3 className="font-semibold text-gray-700">
                    {item.degree || "Degree"}
                  </h3>
                  <p className="text-gray-600">
                    {item.school || "School/University"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {formatValue(item.date) || "Date"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "experience":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Experience"}
            </h2>
            <div className="space-y-4">
              {sectionData.items.map((item) => (
                <div key={item.id}>
                  <h3 className="font-semibold text-gray-700">
                    {item.subTitle || "Job Title"}
                  </h3>
                  <p className="text-gray-600">{item.company || "Company"}</p>
                  <p className="text-gray-500 text-sm">
                    {formatValue(item.date) || "Date"} |{" "}
                    {item.location || "Location"}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {item.shortDescription ||
                      "Short description of your role..."}
                  </p>
                  {item.longDescription && (
                    <p className="text-gray-600 mt-1 whitespace-pre-wrap">
                      {item.longDescription}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "projects":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Projects"}
            </h2>
            <div className="space-y-3">
              {sectionData.items.map((item) => (
                <div key={item.id}>
                  <h3 className="font-semibold text-gray-700">
                    {item.name || "Project Name"}
                  </h3>
                  <div className="flex items-center gap-x-4">
                    <p className="text-gray-500 text-sm">
                      {formatValue(item.date) || "Date"}
                    </p>
                    <h3 className="font-semibold text-gray-700">
                      {item.location || "Location"}
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-1">
                    {item.shortDescription || "Project description..."}
                  </p>
                  {item.outcome && (
                    <p className="text-gray-600 mt-1">
                      <strong>Outcome: </strong>
                      {item.outcome}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "achievement":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Key Achievements"}
            </h2>
            <div className="space-y-2">
              {sectionData.items.map((item) => (
                <div key={item.id}>
                  <h3 className="font-semibold text-gray-700">
                    {item.name || "Achievement Name"}
                  </h3>
                  <p className="text-gray-600">
                    {item.description || "Description..."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "strengths":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Strength"}
            </h2>
            <div className="space-y-2">
              {sectionData.items.map((item) => (
                <div key={item.id}>
                  <h3 className="font-semibold text-gray-700">
                    {item.strength || "Strength"}
                  </h3>
                  <p className="text-gray-600">
                    {item.explain || "Explain..."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "languages":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Languages"}
            </h2>
            {sectionData.items.map((item) => (
              <div key={item.id} className="space-y-1">
                <p className="text-gray-600">
                  {item.lang || "Language"} - {item.level || "Level"}
                </p>
              </div>
            ))}
          </div>
        );
      case "training":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Training / Courses"}
            </h2>
            {sectionData.items.map((item) => (
              <div key={item.id} className="space-y-1">
                <p className="text-gray-600">{item.course || "Course Title"}</p>
              </div>
            ))}
          </div>
        );
      case "skills":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Skills"}
            </h2>
            <div className="flex items-center gap-x-4">
              {sectionData.items.map((item) => (
                <div key={item.id} className="space-y-1">
                  <p className="text-gray-600">{item.skill || "Skill"}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "socialMedia":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "SocialMedia"}
            </h2>
            <div>
              {sectionData.items.map((item) => (
                <p key={item.id} className="text-gray-600">
                  {item.social || "SocialMedia"} - {item.identify || "identify"}
                </p>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const { handleDownloadPDF } = useMobile();

  /* End Download PDF */
  return (
    <div
      onClick={() => setShowPreview(false)}
      className="z-50 fixed select-none w-full h-full flex justify-center items-center top-0 right-0 bg-opacity-90 bg-[#59566A] overflow-y-scroll"
    >
      {/* header for mobile state for print pdf */}
      <div className="z-30 fixed left-0 right-0 top-0 flex md:hidden items-center justify-evenly px-4 py-2 w-full h-[67px] bg-[#2D3639]">
        <div
          onClick={() => setShowPreview(false)}
          className="w-10 h-10 bg-[#424A4D] rounded-full cursor-pointer shrink-0 text-white text-3xl flex justify-center items-center"
        >
          <MdKeyboardArrowLeft />
        </div>

        <button
          onClick={handleDownloadPDF}
          className="w-full h-full cursor-pointer bg-[#5F4DC7] rounded text-white text-lg font-bold ml-5 mr-4"
        >
          Download PDF
        </button>

        <div className="w-16 h-full cursor-pointer bg-[#5F4DC7] text-2xl text-white flex justify-center rounded">
          ...
        </div>
      </div>
      {/* End header for mobile state for print pdf */}

      <div
        ref={resumeRef}
        onClick={(event) => event.stopPropagation()}
        className="absolute top-20 md:top-8 w-[90%] md:w-[90%] lg:w-[80%] bg-white p-4 md:p-16 mx-auto max-md:rounded"
      >
        <div className="w-full flex items-center justify-between mb-6">
          {/* Body */}
          <div className="">
            {/* نام و موقعیت شغلی */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {formData.address.name || "YOUR NAME"}
              </h1>
              <h2 className="text-xl font-medium text-[#1E90FF]">
                {formData.address.apply || "The role you are applying for?"}
              </h2>
            </div>

            {/* اطلاعات تماس */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {/* تلفن */}

              <div className="flex items-center gap-x-1">
                <div className="w-4 h-4 flex justify-center items-center text-[#1E90FF]">
                  <FaPhone />
                </div>
                <span>{formData.address.phone || "phone"}</span>
              </div>

              {/* ایمیل */}
              <div className="flex items-center gap-x-1">
                <div className="w-4 h-4 flex justify-center items-center text-[#1E90FF]">
                  @
                </div>
                <span>{formData.address.email || "email"}</span>
              </div>

              {/* لینکدین/پورتفولیو */}
              <div className="flex items-center gap-x-1">
                <div className="w-4 h-4 flex justify-center items-center text-[#1E90FF]">
                  <MdFolderShared />
                </div>
                <span>{formData.address.linkedin || "linkeIn"}</span>
              </div>

              {/* موقعیت مکانی */}
              <div className="flex items-center gap-x-1">
                <div className="w-4 h-4 flex justify-center items-center text-[#1E90FF]">
                  <IoLocationSharp />
                </div>
                <span>{formData.address.location || "location"}</span>
              </div>
            </div>
          </div>

          {/* عکس پروفایل */}
          <div className="w-32 h-32 bg-[#EAEAEA] rounded-full flex justify-center items-end text-7xl text-[#8C8C8C] ml-6">
            <GoPerson />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 pb-32">
          {sections && sections.length > 0 ? (
            sections.map(renderSection)
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p className="text-lg mb-2">هیچ بخشی وجود ندارد</p>
              <p>لطفا بخش هایی را وارد کنید</p>
            </div>
          )}
        </div>

        {/* this place is for footer of the page */}
        <div className="w-full flex justify-between items-center">
          <span className="text-[#868686]">www.enhancv.com</span>

          <div className="text-[#868686] flex items-center">
            <span className="mr-6">Powered By</span>
            <img src="/src/assets/logo.svg" alt="" className="" />
            <span className="ml-1">Enhancev</span>
          </div>
        </div>
        {/* End place is for footer of the page */}
        {/* End Body */}
        {/* the close button */}
        <div
          onClick={() => setShowPreview(false)}
          className="group absolute right-[-15px] top-[-15px] w-10 h-10 bg-[#8C7CDB] hidden md:flex justify-center items-center text-white text-2xl rounded-full cursor-pointer"
        >
          <IoMdClose />

          <div className="invisible group-hover:visible transition-all duration-300">
            <span className="absolute -right-12 top-2 text-base bg-gray-700 px-1 rounded flex justify-center items-center text-white">
              close
            </span>
          </div>
        </div>
        {/* End the close button */}
      </div>
    </div>
  );
};

export default ResumePreview;
