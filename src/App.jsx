import ResumeEditor from "./components/resumeEditor/resumeEditor";
import { MobileProvider } from "./context/mobileContext";

export default function App() {
  return (
    <MobileProvider>
      <div className="">
        <ResumeEditor />
      </div>
    </MobileProvider>
  );
}
