import WindowWrapper from './WindowWrapper';
import ExperienceCard from './ExperienceCard';


export default function ExperienceWindow({onMaximize, onMinimize, onClose }: { onMaximize: () => void, onMinimize: () => void, onClose: () => void }) {  
  return (
      <WindowWrapper id="experience-window" title="Experience" onMaximize={onMaximize} onMinimize={onMinimize} onClose={onClose}>
        <div
          className="experience-content-wrapper"
        >
          <h1 className="experience-title" style={{color: '#2E6374',}}>Work Experience</h1>

          <ExperienceCard
            title="Data Engineer"
            company="All Around Children"
            companyUrl="https://www.allaroundchildren.com/"
            bullets={["Designed intuitive data models, simplifying complex insights into straightforward formats for administrators",
            "Implemented automated daily staffing reports with a scheduling optimization algorithm to improve visibility and efficiency in teacher allocation"
            ]}
            dateRange="Jan 2025 – Present"
          />

          <ExperienceCard
            title="Software Engineer Intern"
            company="Commvault"
            companyUrl="https://www.commvault.com/"
            bullets={["Reduced Continuous Integration (CI) tests execution time by 60% by creating a Python multiprocessing & multithreading tool based on data-driven insights from log analysis",
              "Ranked top 10 of 50+ interns in hackathon for presenting test automation tool & CI insights to business leadership",
              "Cut VM configuration time by 35% through command line automation of setup, deployment, & system integration",
            ]}
            dateRange="June 2024 – Oct 2024"
          />

          <ExperienceCard
            title="Teaching Assistant"
            company="University of California, Los Angeles"
            companyUrl="https://www.ucla.edu/"
            bullets={["Assisted 6 professors as a Learning Assistant (LA) in Intro to Physics, Computer Science & Data Structures courses",
              "Mentored 200+ students across Physics and Computer Science courses, achieving 95% student satisfaction rating",
              "Enhanced learning & accessibility by creating 31 hours of C++ tutorials that break down complex concepts",
              "Built web compiler app used by 600+ students to compile & test C++ projects on Linux servers with Python & Flask"
            ]}
            dateRange="Jan 2023 – Jan 2025"
            />

          <ExperienceCard
            title="Software Engineer Intern"
            company="Commvault"
            companyUrl='https://www.commvault.com/'
            bullets={["Automated deployment of deceptive assets simulating cyberattacks on Linux and Windows, strengthening threat detection and incident response testing",
                      "Streamlined identity management by integrating AWS APIs to automate user lifecycle operations for 1,000+ accounts",
                      "Developed 50+ Python test cases with Linux systems integration to validate a software deception product, boosting reliability and test coverage"
            ]} 
            dateRange="June 2023 – Sept 2023"
          />
        </div>
      </WindowWrapper>
  );
}
