import './App.css';
import FolderIcon from './components/FolderIcon';
import DocumentIcon from './components/DocumentIcon';
import ImageIcon from './components/ImageIcon';
import useDateTime from './hooks/useDateTime';
import ExperienceWindow from './components/ExperiencesWindow';
import { JSX, useState } from 'react';
import ProjectsWindow from './components/ProjectsWindow';
import AboutMeWindow from './components/AboutMeWindow';


function App() {
  type WindowEntry = {
    id: string;
    z: number;
  }
  const dateTime = useDateTime();
  const [openWindows, setOpenWindows] = useState<WindowEntry[]>([]);
  const [zCounter, setZCounter] = useState(0);

  const handleOpenWindow = (windowName: string) => {
    console.log("handleOpenWindow", windowName);
    if (!openWindows.some(w => w.id === windowName)) {
      setZCounter(zCounter + 1);
      setOpenWindows([...openWindows, { id: windowName, z: zCounter }]);
    }
  };

  const closeWindow = (windowName: string) => {
    setOpenWindows(openWindows.filter(w => w.id !== windowName));
  };

  const bringToFront = (windowName: string) => {
    console.log("bringToFront", windowName);
    setOpenWindows(openWindows.map(w => {
      if (w.id === windowName) {
        return { ...w, z: zCounter };
      }
      return w;
    }));
    setZCounter(zCounter + 1);
  };

  const windowComponents: { [key: string]: JSX.Element } = {
    'experience': <ExperienceWindow onClose={() => closeWindow('experience')} />,
    'projects': <ProjectsWindow onClose={() => closeWindow('projects')} />,
    'about-me': <AboutMeWindow onClose={() => closeWindow('about-me')} />,
  };
  
  return (
    <div className="screen">
      <div className="desktop">
        <FolderIcon label="projects" onDoubleClick={() => handleOpenWindow('projects')}/>
        <DocumentIcon label="experience" onDoubleClick={() => handleOpenWindow('experience')}/>
        <ImageIcon label="about me" onDoubleClick={() => handleOpenWindow('about-me')}/>

        {openWindows.map((win, index) => {
          const offsetStyle = {
            top: `${100 + index * 30}px`,
            left: `${100 + index * 30}px`,
            position: 'absolute' as const,
            zIndex: win.z,
          };

          return (
            <div key={win.id} style={offsetStyle} onMouseDown={() => bringToFront(win.id)}>
              {windowComponents[win.id]}
            </div>
          );
        })}

      </div>
  
      <div className="taskbar">
        <div className="taskbar-windows"> 
          {openWindows.map((win) => (
                <button
                key={win.id}
                className="taskbar-button"
                onClick={() => {
                  // Optional: toggle focus, or bring to front later
                }}
              >
                {win.id}
              </button>  
          ))}
        </div>
        <div className="spacer"></div>
        <div className="date_and_time">{dateTime}</div>
      </div>
    </div>
  );
  }


export default App
