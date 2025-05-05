import WindowWrapper from "./WindowWrapper";
import useDragger from "../hooks/useDragger";

export default function AboutMeWindow({ onClose }: { onClose: () => void }) {
  useDragger("about-me-window");
  return (
    <WindowWrapper title="About me" onClose={onClose}>
        <div className="about-me">
            <p>Hi, I'm Shilpa Bojjireddy</p>
            <p>Currently don't have a job</p>
        </div>
    </WindowWrapper>
  );
}
