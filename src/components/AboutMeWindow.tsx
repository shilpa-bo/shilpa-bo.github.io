import WindowWrapper from "./WindowWrapper";

export default function AboutMeWindow({ onMinimize, onClose }: { onMinimize: () => void, onClose: () => void }) {
  return (
    <WindowWrapper id="about-me-window" title="About me" onMinimize={onMinimize} onClose={onClose}>
        <div className="about-me">
            <p>Hi, I'm Shilpa Bojjireddy</p>
        </div>
    </WindowWrapper>
  );
}
