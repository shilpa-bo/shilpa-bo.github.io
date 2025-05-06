import WindowWrapper from './WindowWrapper';
import ExperienceCard from './ExperienceCard';
import useDragger from '../hooks/useDragger';


export default function ExperienceWindow({ onMinimize, onClose }: { onMinimize: () => void, onClose: () => void }) {  
  return (
    <WindowWrapper id= "experience-window" title="Experience" onMinimize={onMinimize} onClose={onClose}>
      <div className="experience-wrapper">
        <h1 className="experience-title">WORK EXPERIENCE</h1>

        <ExperienceCard
          title="Data Engineer"
          company="All Around Children"
          bullets={["What I did 1", "What I did 2", "What I did 3"]}
          dateRange="Jan 2025 – Present"
        />

        <ExperienceCard
          title="Software Engineer"
          company="Commvault"
          bullets={["What I did 1"]}
          dateRange="June 2024 – Oct 2024"
        />
      </div>
    </WindowWrapper>
  );
}
