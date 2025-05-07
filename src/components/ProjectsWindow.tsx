import WindowWrapper from './WindowWrapper';


export default function ProjectsWindow({onMaximize, onMinimize, onClose }: { onMaximize: () => void, onMinimize: () => void, onClose: () => void }) { 
  return (
    <WindowWrapper id="projects-window" title="Projects" onMaximize={onMaximize} onMinimize={onMinimize} onClose={onClose}>
        <div className="projects-wrapper">
            <h1 className="projects-title"
            style={{color: '#2E6374',}}>
              In construction
            </h1>
        </div>
    </WindowWrapper>
  );
}
