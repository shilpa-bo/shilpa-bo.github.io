import WindowWrapper from './WindowWrapper';


export default function ProjectsWindow({ onClose }: { onClose: () => void }) {
  return (
    <WindowWrapper title="Projects" onClose={onClose}>
        <div className="projects-wrapper">
            <h1 className="projects-title">PROJECTS</h1>
        </div>
    </WindowWrapper>
  );
}
