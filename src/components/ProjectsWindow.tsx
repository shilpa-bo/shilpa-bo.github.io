import WindowWrapper from './WindowWrapper';


export default function ProjectsWindow({ onMinimize, onClose }: { onMinimize: () => void, onClose: () => void }) {
  return (
    <WindowWrapper id="projects-window" title="Projects" onMinimize={onMinimize} onClose={onClose}>
        <div className="projects-wrapper">
            <h1 className="projects-title">PROJECTS</h1>
        </div>
    </WindowWrapper>
  );
}
