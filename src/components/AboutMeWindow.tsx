import WindowWrapper from "./WindowWrapper";

export default function AboutMeWindow({onMaximize, onMinimize, onClose }: { onMaximize: () => void, onMinimize: () => void, onClose: () => void }) { 
  return (
    <WindowWrapper id="about-me-window" title="About me"onMaximize={onMaximize} onMinimize={onMinimize} onClose={onClose}>
        <div className="about-me"
        style={{color: '#2E6374',}}>
            <p>Hi, I'm Shilpa Bojjireddy. Welcome to my portfolio!</p>
            <p>Figuring out what to write here...</p>
            <p>Come back soon!</p>
        </div>
    </WindowWrapper>
  );
}
