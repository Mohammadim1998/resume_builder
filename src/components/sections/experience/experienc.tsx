import { useMobile } from "../../../context/mobileContext";
import { GoPencil } from "react-icons/go";
import { LuArrowUpDown, LuPencilLine, LuPlus } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCheckmark, IoMdClose } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaRegTrashAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";

const Experience = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDateTime, setStartDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);
  const [openMobileEdit, setopenMobileEdit] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRename, setOpenRename] = useState(false);
  const {
    isMobile,
    formData,
    addSectionItem,
    removeSectionItem,
    removeSection,
    handleSectionChange,
  } = useMobile();

  return (
    <>
      {!isMobile ? (
        <div className="relative group w-full h-fit select-none">
          <input
            value={formData.experience.title}
            onChange={(event) =>
              handleSectionChange("experience", "title", event.target.value)
            }
            className="placeholder:text-black border-none outline-none font-medium bg-transparent"
            placeholder="EXPERIENCE"
          />
          <div className="w-full h-1 bg-black"></div>
          <div className="experience-items">
            {formData.experience.items.map((item) => (
              <div key={item.id}>
                <input
                  value={item.subTitle}
                  // onChange={(event) => onChange("subTitle", event.target.value)}
                  onChange={(event) =>
                    handleSectionChange(
                      "experience",
                      "subTitle",
                      event.target.value,
                      item.id
                    )
                  }
                  type="text"
                  className="w-full text-md h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Title"
                />
                <input
                  value={item.company}
                  // onChange={(event) => onChange("company", event.target.value)}
                  onChange={(event) =>
                    handleSectionChange(
                      "experience",
                      "company",
                      event.target.value,
                      item.id
                    )
                  }
                  type="text"
                  className="w-full text-md h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Company Name"
                />

                <div className="flex items-center justify-start">
                  <div className="flex items-center gap-x-1 ml-2">
                    <div className="text-[#65696D] text-sm">
                      <FaCalendarAlt />
                    </div>
                    <DatePicker
                      selected={item.date}
                      value={item.date}
                      // onChange={(date) => onChange("date", date)}
                      onChange={(date) =>
                        handleSectionChange("experience", "date", date, item.id)
                      }
                      dateFormat="yyyy/MM/dd"
                      placeholderText="Date period"
                      isClearable
                      className="custom-datepicker w-24 bg-inherit outline-none text-[#A9A9A9] text-sm"
                      calendarClassName="custom-calendar"
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="text-[#65696D] text-sm">
                      <FaLocationDot />
                    </div>
                    <input
                      type="text"
                      value={item.location}
                      onChange={(event) =>
                        handleSectionChange(
                          "experience",
                          "location",
                          event.target.value,
                          item.id
                        )
                      }
                      className="w-full text-sm h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
                      placeholder="Location"
                    />
                  </div>
                </div>

                <input
                  value={item.shortDescription}
                  // onChange={(event) =>
                  //   onChange("shortDescription", event.target.value)
                  // }
                  onChange={(event) =>
                    handleSectionChange(
                      "experience",
                      "shortDescription",
                      event.target.value,
                      item.id
                    )
                  }
                  type="text"
                  className="w-full text-sm h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
                  placeholder="Company Description"
                />

                <div className="flex items-center mt-2">
                  <div className="w-1 h-1 rounded-full bg-[#3E3E3E]"></div>
                  <input
                    value={item.longDescription}
                    // onChange={(event) =>
                    //   onChange("longDescription", event.target.value)
                    // }
                    onChange={(event) =>
                      handleSectionChange(
                        "experience",
                        "longDescription",
                        event.target.value,
                        item.id
                      )
                    }
                    type="text"
                    className="w-full text-sm h-5 bg-transparent outline-none px-2 focus:border-[1px] focus:border-green-400 transition-all duration-300 rounded"
                    placeholder="Highlight your accomplishments,using numbers if possible."
                  />
                </div>
                {formData.experience.items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSectionItem("experience", item.id)}
                    className="remove-btn"
                  >
                    حذف
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => addSectionItem("experience")}
            className="add-btn"
          >
            + افزودن experience جدید
          </button>
        </div>
      ) : (
        <div className="w-full bg-white mt-4 rounded-2xl p-4 select-none">
          {/* Header title*/}
          <div className="relative flex justify-between items-center mb-8">
            {!openRename && !openEditMenu && (
              <span
                onClick={() => setOpenRename(true)}
                className="font-semibold select-none"
              >
                {formData.experience.title || "EXPERIENCE"}
              </span>
            )}

            {/* Edit Title */}
            {openRename ? (
              <div className="w-full flex flex-col gap-y-2">
                <input
                  value={formData.experience.title}
                  onChange={(event) =>
                    handleSectionChange(
                      "experience",
                      "title",
                      event.target.value
                    )
                  }
                  className="w-full pl-2 h-10 placeholder:text-black border-[1px] border-green-600 rounded-md outline-none font-medium bg-transparent"
                  placeholder="EXPERIENCE"
                />
                <div
                  onClick={() => {
                    setOpenRename(false);
                    setOpenEditMenu(false);
                  }}
                  className="shrink-0 pl-6 text-xl cursor-pointer"
                >
                  <GoPencil />
                </div>
              </div>
            ) : (
              <div
                className={`w-[95%] absolute -top-2 ${
                  openEditMenu ? "right-6" : "right-[-120%]"
                } transition-all duration-300 flex items-center gap-x-6 bg-inherit pl-4`}
              >
                <div
                  onClick={() => setOpenDeleteModal(true)}
                  className="text-xl text-rose-500 hover:bg-gray-200 cursor-pointer p-3 rounded-full"
                >
                  <FaRegTrashAlt />
                </div>
                <div className="text-xl">
                  <LuArrowUpDown />
                </div>
                <div
                  onClick={() => setOpenRename(true)}
                  className="text-xl flex items-center gap-x-2"
                >
                  <LuPencilLine />
                  <span className="text-sm">rename</span>
                </div>
              </div>
            )}

            {/* Delete Modal */}
            {openDeleteModal && (
              <div className="z-40 w-full h-full bg-opacity-90 flex justify-center items-center px-12 fixed top-0 left-0 right-0 bottom-0 bg-[#59566A]">
                <div className="w-full h-[290px] bg-white rounded-lg flex flex-col gap-y-8 p-8">
                  <div className="flex flex-col gap-y-8">
                    <span className="text-black font-semibold">
                      {formData?.experience?.title || "experience"}
                    </span>
                    <span className="text-black text-sm">
                      Are you sure you want to delete this section?
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-y-6">
                    <button
                      onClick={() => removeSection("experience")}
                      className="text-white w-full h-12 font-semibold cursor-pointer bg-[#FF576F] rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setOpenDeleteModal(false)}
                      className="text-black w-full h-12 font-semibold cursor-pointer border-[2px] border-black rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* End Delete Modal */}
            {/* End Edit Title */}
            {openEditMenu
              ? !openRename && (
                  <div
                    onClick={() => setOpenEditMenu(false)}
                    className="shrink-0 flex ml-auto text-xl cursor-pointer"
                  >
                    <IoMdClose />
                  </div>
                )
              : !openRename && (
                  <div
                    onClick={() => setOpenEditMenu(true)}
                    className="shrink-0 ml-6 text-xl cursor-pointer"
                  >
                    <GoPencil />
                  </div>
                )}
          </div>
          {/* End Header title*/}
          {formData.experience.items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setEditingItemId(item.id);
                setOpenEdit(true);
              }}
              className="w-full relative bg-[#FAFBFD]"
            >
              <div className="w-full flex flex-col gap-y-2 select-none text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] transition-all duration-300 rounded">
                <span className="font-semibold">
                  {item.subTitle || "Title"}
                </span>
                <span>{item.company || "Company Name"}</span>
              </div>
              <div
                onClick={(event) => {
                  setEditingItemId(item.id);
                  setopenMobileEdit(true);
                  event.stopPropagation();
                }}
                className="absolute right-2 w-10 h-10 rounded-full hover:bg-[#7d858838] cursor-pointer top-[50%] translate-y-[-50%] flex flex-col items-center justify-center gap-y-[2px]"
              >
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
                <div className="w-[3px] h-[3px] bg-[#7D8588] rounded-full"></div>
              </div>
            </div>
          ))}

          <div
            onClick={() => addSectionItem("experience")}
            className="w-11 h-11 bg-[#E3E9F5] text-[#384347] cursor-pointer flex justify-center items-center text-xl mt-3 font-bold rounded-full"
          >
            <LuPlus />
          </div>
        </div>
      )}

      {/* open modal edit in mobile state */}
      {openMobileEdit && (
        <div
          onClick={() => setopenMobileEdit(false)}
          className="w-full h-full select-none fixed top-0 left-0 right-0 bottom-0 px-8 bg-opacity-90 bg-[#59566A] z-40"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="pb-2 bg-white rounded-md absolute bottom-10 left-8 right-8"
          >
            <div className="w-full">
              <div
                onClick={() => {
                  setopenMobileEdit(false);
                  setOpenEdit(true);
                }}
                className="w-full p-6 text-[#505A5D] flex items-center gap-2 border-b-[1px] border-b-[#E4E4E4] pb-4"
              >
                <div className="text-2xl">
                  <FiEdit3 />
                </div>
                <span className="text-xl font-semibold">Edit</span>
              </div>
            </div>

            <div className="w-full">
              <div
                onClick={() => {
                  if (editingItemId) {
                    removeSectionItem("experience", editingItemId);
                  }
                  setopenMobileEdit(false);
                }}
                className="w-full p-6 text-[#505A5D] flex items-center gap-2 border-b-[1px] border-b-[#E4E4E4] pb-4"
              >
                <div className="text-2xl">
                  <FaRegTrashAlt />
                </div>
                <span className="text-xl font-semibold">Delete</span>
              </div>
            </div>
            <div
              onClick={() => setopenMobileEdit(false)}
              className="text-[#505A5D] text-xl font-semibold text-end p-2"
            >
              cancel
            </div>
          </div>
        </div>
      )}
      {/* End open modal edit in mobile state */}

      {/* The blow code is for open the edit page */}
      <div
        className={`w-full h-full fixed top-0 bottom-0 z-50 overflow-y-scroll ${
          openEdit ? "right-0" : "right-[-100%]"
        } bg-white transition-all duration-300`}
      >
        <div className="w-full h-14 mb-6 flex justify-start items-center px-4 bg-white shadow-[0px_1px_4px_0px_#000000]">
          <div className="flex items-center justify-start gap-x-2">
            <div
              onClick={() => setOpenEdit(false)}
              className="w-10 h-10 bg-[#F3F2FB] rounded-full cursor-pointer flex justify-center items-center text-3xl text-[#5F6CD4]"
            >
              <MdKeyboardArrowLeft />
            </div>
            <span className="text-[#525858] font-semibold">Back to Resume</span>
          </div>
        </div>

        <form className="w-full px-6 bg-[#FAFBFD]">
          <span className="mb-3 block text-[#75696C] font-medium">
            Experience
          </span>
          <div className="w-full">
            <span className="text-[#75696C] font-medium mb-2 block">Title</span>
            <input
              value={
                editingItemId
                  ? formData.experience.items.find(
                      (item) => item.id === editingItemId
                    )?.subTitle || ""
                  : formData.experience.subTitle
              }
              onChange={(event) => {
                if (editingItemId) {
                  handleSectionChange(
                    "experience",
                    "subTitle",
                    event.target.value,
                    editingItemId
                  );
                } else {
                  handleSectionChange(
                    "experience",
                    "subTitle",
                    event.target.value
                  );
                }
              }}
              className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
              placeholder="Title"
            />
          </div>
          <div className="w-full">
            <span className="text-[#75696C] font-medium mb-2 block">
              Company Name
            </span>
            <input
              value={
                editingItemId
                  ? formData.experience.items.find(
                      (item) => item.id === editingItemId
                    )?.company || ""
                  : formData.experience.company
              }
              onChange={(event) => {
                if (editingItemId) {
                  handleSectionChange(
                    "experience",
                    "company",
                    event.target.value,
                    editingItemId
                  );
                } else {
                  handleSectionChange(
                    "experience",
                    "company",
                    event.target.value
                  );
                }
              }}
              className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
              placeholder="Company Name"
            />
          </div>

          <div className="w-full mt-2">
            <span className="text-[#75696C] font-medium mb-2 block">
              Date period
            </span>
            <div className="flex items-center gap-x-2">
              <DatePicker
                selected={formData.experience.date}
                // value={value.date}
                // onChange={(date) => onChange("date", date)}
                value={
                  editingItemId
                    ? formData.experience.items.find(
                        (item) => item.id === editingItemId
                      )?.date || ""
                    : formData.experience.date
                }
                onChange={(date) => {
                  if (editingItemId) {
                    handleSectionChange(
                      "experience",
                      "date",
                      date,
                      editingItemId
                    );
                  } else {
                    handleSectionChange("experience", "date", date);
                  }
                }}
                className="text-sm w-full text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="زمان"
                dateFormat="yyyy/MM/dd h:mm aa"
                placeholderText="From"
                isClearable
                minDate={new Date()}
              />
              <DatePicker
                selected={formData.experience.date}
                // value={value.date}
                // onChange={(date) => onChange("date", date)}
                value={
                  editingItemId
                    ? formData.experience.items.find(
                        (item) => item.id === editingItemId
                      )?.date || ""
                    : formData.experience.date
                }
                onChange={(date) => {
                  if (editingItemId) {
                    handleSectionChange(
                      "experience",
                      "date",
                      date,
                      editingItemId
                    );
                  } else {
                    handleSectionChange("experience", "date", date);
                  }
                }}
                className="text-sm w-full text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="زمان"
                dateFormat="yyyy/MM/dd h:mm aa"
                placeholderText="To"
                isClearable
                minDate={new Date()}
              />
            </div>
          </div>

          <div className="w-full mt-2">
            <span className="text-[#75696C] font-medium mb-2 block">
              Location
            </span>
            <input
              value={
                editingItemId
                  ? formData.experience.items.find(
                      (item) => item.id === editingItemId
                    )?.location || ""
                  : formData.experience.location
              }
              onChange={(event) => {
                if (editingItemId) {
                  handleSectionChange(
                    "experience",
                    "location",
                    event.target.value,
                    editingItemId
                  );
                } else {
                  handleSectionChange(
                    "experience",
                    "location",
                    event.target.value
                  );
                }
              }}
              className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
              placeholder="Location"
            />
          </div>

          <div className="w-full mt-2">
            <span className="text-[#75696C] font-medium mb-2 block">
              company Description
            </span>
            <input
              value={
                editingItemId
                  ? formData.experience.items.find(
                      (item) => item.id === editingItemId
                    )?.shortDescription || ""
                  : formData.experience.shortDescription
              }
              onChange={(event) => {
                if (editingItemId) {
                  handleSectionChange(
                    "experience",
                    "shortDescription",
                    event.target.value,
                    editingItemId
                  );
                } else {
                  handleSectionChange(
                    "experience",
                    "shortDescripton",
                    event.target.value
                  );
                }
              }}
              className="w-full text-sm text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
              placeholder="company Description"
            />
          </div>

          <div className="w-full mt-2">
            <span className="text-[#75696C] font-medium mb-2 block">
              Bullets
            </span>

            <input
              value={
                editingItemId
                  ? formData.experience.items.find(
                      (item) => item.id === editingItemId
                    )?.longDescription || ""
                  : formData.experience.longDescription
              }
              onChange={(event) => {
                if (editingItemId) {
                  handleSectionChange(
                    "experience",
                    "longDescription",
                    event.target.value,
                    editingItemId
                  );
                } else {
                  handleSectionChange(
                    "experience",
                    "longDescription",
                    event.target.value
                  );
                }
              }}
              className="w-full text-sm h-16 text-[#7D8588] mt-1 bg-transparent outline-none py-3 pl-3 pr-12 border-[1px] border-[#AFB4B5] focus:border-green-400 transition-all duration-300 rounded"
              placeholder="What was a successful outcome of your work? (e.g. Raises $3,000 for the charity)"
            />
          </div>

          <div className="w-full h-10 flex justify-between items-center px-4 border-[1px] border-[#dde7e9] mt-2 rounded">
            <div className="flex items-center gap-x-1">
              <div className="w-6 h-6 flex justify-center items-center text-xl text-[#4e4f50] rounded-full">
                <IoMdCheckmarkCircleOutline />
              </div>
              <span className="text-[#53555e] text-sm block">
                Content Issues
              </span>
            </div>

            <div className="w-6 h-6 bg-green-600 flex justify-center items-center text-white cursor-pointer text-2xl rounded">
              <IoIosCheckmark />
            </div>
          </div>
          <div
            onClick={() => setOpenEdit(false)}
            className="w-full h-12 flex justify-center items-center bg-[#5e41f0] cursor-pointer rounded mt-9 text-white text-base"
          >
            Done
          </div>
        </form>
      </div>
    </>
  );
};

export default Experience;
