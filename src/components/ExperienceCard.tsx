type Props = {
    title: string;
    company: string;
    bullets: string[];
    dateRange: string;
  };
  
  export default function ExperienceCard({ title, company, bullets, dateRange }: Props) {
    return (
      <div className="experience-card">
        <div className="card-header">
          <h2 className="job-title">{title}</h2>
          <span className="date">{dateRange}</span>
        </div>
        <p className="company">{company}</p>
        <ul className="bullet-list">
          {bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  