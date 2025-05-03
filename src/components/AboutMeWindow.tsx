import WindowWrapper from "./WindowWrapper";

export default function AboutMeWindow({ onClose }: { onClose: () => void }) {
  return (
    <WindowWrapper title="About me" onClose={onClose}>
        <div className="about-me">
            <p>Hi, I'm Shilpa Bojjireddy</p>
            <p>Currently don't have a job</p>
        </div>
    </WindowWrapper>
  );
}
