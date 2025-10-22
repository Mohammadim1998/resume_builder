import { IoMdClose } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ResumePreview = ({ setShowPreview, formData, sections }) => {

  const formatValue = (value) => {
    if (value === null || value === undefined) return "";
    if (value instanceof Date) {
      return value.toLocaleDateString(); // تبدیل تاریخ به string
    }
    if (typeof value === "object") {
      return JSON.stringify(value); // تبدیل object به string
    }
    return String(value); // تبدیل سایر انواع به string
  };

  const renderSection = (section) => {
    const sectionData = formData[section.component];
    if (!sectionData) return null;

    switch (section.component) {
      case "summary":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Summary"}
            </h2>
            <p className="text-gray-600 text-xs">
              {sectionData.description ||
                "Briefly explain why you're a great fit for the role - use the AI assistant to"}
            </p>
          </div>
        );

      case "education":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Education"}
            </h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">
                {sectionData.degree || "Degree"}
              </h3>
              <p className="text-gray-600">
                {sectionData.school || "School/University"}
              </p>
              <p className="text-gray-500 text-sm">
                {formatValue(sectionData.date) || "Date"}
              </p>
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
              <div>
                <h3 className="font-semibold text-gray-700">
                  {sectionData.subTitle || "Job Title"}
                </h3>
                <p className="text-gray-600">
                  {sectionData.company || "Company"}
                </p>
                <p className="text-gray-500 text-sm">
                  {formatValue(sectionData.date) || "Date"} |{" "}
                  {sectionData.location || "Location"}
                </p>
                <p className="text-gray-600 mt-2">
                  {sectionData.shortDescription ||
                    "Short description of your role..."}
                </p>
                {sectionData.longDescription && (
                  <p className="text-gray-600 mt-1 whitespace-pre-wrap">
                    {sectionData.longDescription}
                  </p>
                )}
              </div>
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
              <div>
                <h3 className="font-semibold text-gray-700">
                  {sectionData.name || "Project Name"}
                </h3>
                <p className="text-gray-500 text-sm">
                  {formatValue(sectionData.date) || "Date"}
                </p>
                <p className="text-gray-600 mt-1">
                  {sectionData.shortDescription || "Project description..."}
                </p>
                {sectionData.outcome && (
                  <p className="text-gray-600 mt-1">
                    <strong>Outcome: </strong>
                    {sectionData.outcome}
                  </p>
                )}
              </div>
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
              <div>
                <h3 className="font-semibold text-gray-700">
                  {sectionData.name || "Achievement Name"}
                </h3>
                <p className="text-gray-600">
                  {sectionData.description || "Description..."}
                </p>
              </div>
            </div>
          </div>
        );

      case "languages":
        return (
          <div key={section.id} className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 border-b-4 border-black pb-1">
              {sectionData.title || "Languages"}
            </h2>
            <div className="space-y-1">
              <p className="text-gray-600">
                {sectionData.lang || "Language"} -{" "}
                {sectionData.level || "Level"}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div
      onClick={() => setShowPreview(false)}
      className="fixed w-full h-full pt-[600px] md:pt-96 flex justify-center items-center top-0 right-0 bg-opacity-70 bg-[#59566A] overflow-y-scroll"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative w-[95%] md:w-[70%] min-h-full bg-white p-4 md:p-16"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 pb-32">
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
          className="group absolute right-[-15px] top-[-15px] w-10 h-10 bg-[#8C7CDB] flex justify-center items-center text-white text-2xl rounded-full cursor-pointer"
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
