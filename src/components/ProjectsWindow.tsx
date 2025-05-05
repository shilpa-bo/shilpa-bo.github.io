import useDragger from '../hooks/useDragger';
import WindowWrapper from './WindowWrapper';


export default function ProjectsWindow({ onClose }: { onClose: () => void }) {
  useDragger("projects-window");
  return (
    <WindowWrapper title="Projects" onClose={onClose}>
        <div className="projects-wrapper">
            <h1 className="projects-title">PROJECTS</h1>
        </div>
    </WindowWrapper>
  );
}
