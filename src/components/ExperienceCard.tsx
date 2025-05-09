import "./ExperienceCard.css";

type Props = {
    title: string;
    company: string;
    companyUrl?: string;  
    bullets: string[];
    dateRange: string;
  };
  
  export default function ExperienceCard({ title, company, companyUrl,bullets, dateRange }: Props) {
    return (
      <div className="experience-card">
        <div className="header-row">
          <h2 className="job-title">{title}</h2>
          <span className="date">{dateRange}</span>
        </div>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="company">
        {company}
      </a>
        <ul className="bullet-list">
          {bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  