import './App.css';
import FolderIcon from './components/FolderIcon';
import DocumentIcon from './components/DocumentIcon';
import ImageIcon from './components/ImageIcon';
import useDateTime from './hooks/useDateTime';
import ExperienceWindow from './components/ExperiencesWindow';
import { JSX, useState } from 'react';
import ProjectsWindow from './components/ProjectsWindow';
import AboutMeWindow from './components/AboutMeWindow';
import PixelCanvas from './components/PixelCanvas';

function App() {
  type WindowEntry = {
    id: string;
    z: number;
    top: number;
    left: number;
    minimized: boolean;
    maximized: boolean;
    width: number;
    height: number;
  }
  const dateTime = useDateTime();
  const [openWindows, setOpenWindows] = useState<WindowEntry[]>([
    {
      id: 'about-me',
      z: 1,
      top: 100,
      left: 500,
      minimized: false,
      maximized: false,
      width: 500,
      height: 500
    },  
  ]);
  const [zCounter, setZCounter] = useState(0);
  
  const handleOpenWindow = (windowName: string) => {
    const existing = openWindows.find(w => w.id === windowName);

    if (existing) {
      if (existing.minimized) {
        // Restore it (toggle minimized = false)
        setOpenWindows(windows =>
          windows.map(w =>
            w.id === windowName ? { ...w, minimized: false } : w
          )
        );
      } else {
        // Or: bring to front if it's already open
        bringToFront(windowName);
      }
    }
    else{
      // First time opening window
      const newZ = zCounter + 1;
      const offset = openWindows.length * 30;

      setOpenWindows([
        ...openWindows,
        {
          id: windowName,
          z: newZ,
          top: 100 + offset,
          left: 100 + offset,
          minimized: false,
          maximized: false,
          width: 700,
          height: 500
        }
      ]);
      setZCounter(newZ);
    }
  };
  
  const closeWindow = (windowName: string) => {
    setOpenWindows(openWindows.filter(w => w.id !== windowName));
  };

  const toggleMinimizeWindow = (windowName: string) => {
    console.log("toggleMinimizeWindow", windowName);

    setOpenWindows(current =>
      current.map(w =>
        w.id === windowName ? { ...w, minimized: !w.minimized, maximized: false } : w
      )
    );
  };

  const toggleMaximizeWindow = (windowName: string) => {
    console.log("toggleMaximizeWindow", windowName);
    setOpenWindows(current =>
      current.map(w =>
        w.id === windowName ? { ...w, maximized: !w.maximized } : w
      )
      //also disabled the maximized button here
    );
  }
  
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
    'experience': <ExperienceWindow onMaximize={() => toggleMaximizeWindow('experience')} onMinimize={() => toggleMinimizeWindow('experience')} onClose={() => closeWindow('experience')} />,
    'projects': <ProjectsWindow onMaximize={() => toggleMaximizeWindow('projects')} onMinimize={() => toggleMinimizeWindow('projects')} onClose={() => closeWindow('projects')} />,
    'about-me': <AboutMeWindow onMaximize={() => toggleMaximizeWindow('about-me')} onMinimize={() => toggleMinimizeWindow('about-me')} onClose={() => closeWindow('about-me')} />,
  };
  
  return (
    <>
      <PixelCanvas />
        <div className="screen" >
      <div className="desktop">
        <FolderIcon label="projects" onDoubleClick={() => handleOpenWindow('projects')} top={40} left={36}/>
        <DocumentIcon label="experience" onDoubleClick={() => handleOpenWindow('experience')} top={160} left={40}/>
        <ImageIcon label="about me" onDoubleClick={() => handleOpenWindow('about-me')} top={280} left={45}/>

        {openWindows.map((win) => {
            const offsetStyle = {
                top: `${win.top}px`,
                left: `${win.left}px`,
                width: `${win.width}px`,
                height: `${win.height}px`,
                position: 'absolute' as const,
                zIndex: win.z,
              };
        // Only render the window if it's NOT minimized
        if (win.minimized) return null; 

          return (
            <div key={win.id} id={`${win.id}`} style={offsetStyle} onMouseDown={() => bringToFront(win.id)}>
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
                  // If window is minimized, restore it
                  if (win.minimized) {
                    setOpenWindows(windows =>
                      windows.map(w =>
                        w.id === win.id ? { ...w, minimized: false } : w
                      )
                    );            
                  }
                  else{ //if window is already open, bring to front
                    bringToFront(win.id);
                  }
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

    </>
  );
  }


export default App
