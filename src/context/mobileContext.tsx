import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const MobileContext = createContext();

const defaultSections = [
  { id: "summary", title: "Summary", component: "summary", column: "left" },
  { id: "projects", title: "Projects", component: "projects", column: "left" },
  {
    id: "languages",
    title: "Languages",
    component: "languages",
    column: "right",
  },
  { id: "skills", title: "Skills", component: "skills", column: "left" },
  {
    id: "education",
    title: "Education",
    component: "education",
    column: "right",
  },
  {
    id: "experience",
    title: "Experience",
    component: "experience",
    column: "right",
  },
];

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [initialSections, setInitialSections] = useState(() => {
    try {
      const savedSections = localStorage.getItem("resume-sections");
      if (savedSections) {
        return JSON.parse(savedSections);
      }
    } catch (error) {
      console.error("Error loading sections from localStorage:", error);
    }
    return defaultSections;
  });

  useEffect(() => {
    try {
      localStorage.setItem("resume-sections", JSON.stringify(initialSections));
    } catch (error) {
      console.error("can not store sections to localStorage:", error);
    }
  }, [initialSections]);

  const addSectionItem = (sectionName) => {
    setFormData((prev) => {
      const section = prev[sectionName];
      const newItem = createDefaultItem(sectionName);

      return {
        ...prev,
        [sectionName]: {
          ...section,
          items: [...section.items, newItem],
        },
      };
    });
  };

  const removeSection = (id) => {
    setInitialSections((prev) => prev.filter((section) => section.id !== id));
    console.log("Removed Section: ", initialSections, id);
  };
  const toggleSection = (section) => {
    setInitialSections((prev) => {
      const sectionExist = prev.some((item) => item.id === section.id);
      if (sectionExist) {
        return prev.filter((item) => item.id !== section.id);
      } else {
        return [...prev, section];
      }
    });
    console.log("toggled Section: ", initialSections, section);
  };
  const removeSectionItem = (sectionName, id) => {
    setFormData((prev) => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        items: prev[sectionName].items.filter((item) => item.id !== id),
      },
    }));
  };
  const handleSectionChange = (sectionName, field, value, itemId = null) => {
    setFormData((prev) => {
      const section = prev[sectionName];

      if (itemId) {
        return {
          ...prev,
          [sectionName]: {
            ...section,
            items: section.items.map((item) =>
              item.id === itemId ? { ...item, [field]: value } : item
            ),
          },
        };
      } else {
        return {
          ...prev,
          [sectionName]: {
            ...section,
            [field]: value,
          },
        };
      }
    });
  };

  const createDefaultItem = (sectionName) => {
    const defaultItems = {
      summary: { id: Date.now(), description: "" },
      education: { id: Date.now(), degree: "", school: "", date: null },
      projects: {
        id: Date.now(),
        name: "",
        date: null,
        location: "",
        shortDescription: "",
        outcome: "",
      },
      achievement: { id: Date.now(), name: "", description: "" },
      experience: {
        id: Date.now(),
        subTitle: "",
        company: "",
        date: null,
        location: "",
        shortDescription: "",
        longDescription: "",
      },
      skills: { id: Date.now(), skill: "" },
      languages: { id: Date.now(), lang: "", level: "" },
      strengths: { id: Date.now(), strength: "", explain: "" },
      socialMedia: { id: Date.now(), social: "", identify: "" },
      training: { id: Date.now(), course: "" },
    };

    return defaultItems[sectionName] || { id: Date.now() };
  };
  /* isMobile section */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  /* End isMobile section */

  const [formData, setFormData] = useState({
    address: {
      name: "",
      apply: "",
      phone: "",
      email: "",
      linkedin: "",
      location: "",
    },
    summary: {
      title: "",
      items: [
        {
          id: Date.now(),
          description: "",
        },
      ],
    },
    education: {
      title: "",
      items: [
        {
          id: Date.now(),
          degree: "",
          school: "",
          date: null,
        },
      ],
    },
    projects: {
      title: "",
      items: [
        {
          id: Date.now(),
          name: "",
          date: null,
          location: "",
          shortDescription: "",
          outcome: "",
        },
      ],
    },
    achievement: {
      title: "",
      items: [
        {
          id: Date.now(),
          name: "",
          description: "",
        },
      ],
    },
    experience: {
      title: "",
      items: [
        {
          id: Date.now(),
          subTitle: "",
          company: "",
          date: null,
          location: "",
          shortDescription: "",
          longDescription: "",
        },
      ],
    },
    skills: {
      title: "",
      items: [
        {
          id: Date.now(),
          skill: "",
        },
      ],
    },
    languages: {
      title: "",
      items: [
        {
          id: Date.now(),
          lang: "",
          level: "",
        },
      ],
    },
    strengths: {
      title: "",
      items: [
        {
          id: Date.now(),
          strength: "",
          explain: "",
        },
      ],
    },
    socialMedia: {
      title: "",
      items: [
        {
          id: Date.now(),
          social: "",
          identify: "",
        },
      ],
    },
    training: {
      title: "",
      items: [
        {
          id: Date.now(),
          course: "",
        },
      ],
    },
  });

  /* Download PDF */

  const resumeRef = useRef();
  const handleDownloadPDF = async () => {
    const element = resumeRef.current;

    if (!element) {
      console.warn("Resume element not found. Please open preview first.");
      alert("لطفا ابتدا پیش‌نمایش رزومه را باز کنید.");
      return;
    }

    try {
      // ایجاد canvas از محتوای رزومه
      const canvas = await html2canvas(element, {
        scale: 2, // کیفیت بالاتر
        useCORS: true,
        logging: false,
      });

      // تبدیل canvas به تصویر
      const imgData = canvas.toDataURL("image/png");

      // ایجاد PDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // محاسبه ابعاد تصویر برای قرارگیری در PDF
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      const pdfImgHeight = pdfWidth / ratio;

      // اضافه کردن تصویر به PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfImgHeight);

      // اگر محتوا بیشتر از یک صفحه باشد، صفحات جدید اضافه می‌کند
      let heightLeft = pdfImgHeight;
      let position = 0;

      while (heightLeft >= pdfHeight) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, -position, pdfWidth, pdfImgHeight);
        heightLeft -= pdfHeight;
      }

      // دانلود PDF
      pdf.save(`${formData.address.name || "resume"}-cv.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("خطا در تولید PDF. لطفا دوباره تلاش کنید.");
    }
  };

  return (
    <MobileContext.Provider
      value={{
        isMobile,
        formData,
        setFormData,
        handleDownloadPDF,
        resumeRef,
        initialSections,
        removeSection,
        setInitialSections,
        addSectionItem,
        removeSectionItem,
        handleSectionChange,
        toggleSection,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error("useMobile must be used within a MobileProvider");
  }
  return context;
};
