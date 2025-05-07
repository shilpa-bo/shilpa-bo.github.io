import WindowWrapper from "./WindowWrapper";

export default function AboutMeWindow({onMaximize, onMinimize, onClose }: { onMaximize: () => void, onMinimize: () => void, onClose: () => void }) { 
  return (
    <WindowWrapper id="about-me-window" title="About me"onMaximize={onMaximize} onMinimize={onMinimize} onClose={onClose}>
        <div className="about-me">
            <p>Hi, I'm Shilpa Bojjireddy. Welcome to my portfolio!</p>
        </div>
    </WindowWrapper>
  );
}
