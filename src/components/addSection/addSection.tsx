const AddSection = ({ sections, setShowAddSection }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center z-50">
      <div className="bg-white w-[90%] max-w-5xl rounded-xl shadow-lg p-6">
        <div className="w-full flex flex-col justify-center items-center gap-y-2">
          <h1 className="text-2xl font-semibold">Add a new section</h1>
          <h3 className="text-base font-normal">
            Click on a section to add it to your resume
          </h3>
        </div>

        <div className="w-full h-full grid grid-cols-3 gap-4 mt-6 py-6 overflow-y-scroll">
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Summary</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Project</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Languages</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Skills</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Education</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Training</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Find me online</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
              </div>
            </div>
            <span>Strengths</span>
          </div>
          {/* End Box */}
          {/* Box */}
          <div className="h-48 flex flex-col justify-center items-center gap-y-1">
            <div className="relative group w-full h-full">
              <div className="w-full h-full bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.75)]"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-30 invisible group-hover:visible flex justify-center items-center w-full h-full transition-all duration-200">
                <button className="bg-blue-600 px-12 py-2 cursor-pointer text-white text-xl rounded">
                  Add To Resume
                </button>
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
