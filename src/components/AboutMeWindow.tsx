import WindowWrapper from "./WindowWrapper";
import useDragger from "../hooks/useDragger";

export default function AboutMeWindow({ onMinimize, onClose }: { onMinimize: () => void, onClose: () => void }) {
  return (
    <WindowWrapper id="about-me-window" title="About me" onMinimize={onMinimize} onClose={onClose}>
        <div className="about-me">
            <p>Hi, I'm Shilpa Bojjireddy</p>
            <p>Currently don't have a job</p>
        </div>
    </WindowWrapper>
  );
}
