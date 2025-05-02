import './App.css';
import FolderIcon from './components/FolderIcon';
import DocumentIcon from './components/DocumentIcon';
import ImageIcon from './components/ImageIcon';
import useDateTime from './hooks/useDateTime';


function App() {
  const dateTime = useDateTime();


  return (
    <div className="screen">
      <div className="desktop">
        <FolderIcon label="experience" />
        <DocumentIcon label="resume" />
        <FolderIcon label="projects" />
        <ImageIcon label="about me" />
      </div>
  
      <div className="taskbar">
        <div className="spacer" />
        <div className="date_and_ti me">{dateTime}</div>
      </div>
    </div>
  );
  }


export default App
