import "hover.css/css/hover-min.css";
import "./Education.css";

const education = [
  {
    school: "G.B. Pant Govt. Engineering College, Pauri Garhwal",
    program: "B.Tech in Electronics & Communication Engineering",
    period: "Aug 2018 – Mar 2023",
  },
  {
    school: "Shri Guru Ram Rai Public School, Dehradun",
    program: "CBSE – 12th",
    period: "Apr 2017 – Mar 2018",
  },
  {
    school: "Shri Guru Ram Rai Public School, Dehradun",
    program: "CBSE – 10th",
    period: "Jul 2015 – Mar 2016",
  },
];

export default function Education() {
  return (
    <section className="education section-card hvr-grow">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item) => (
          <article key={`${item.school}-${item.program}`} className="education-card">
            <div>
              <h3>{item.school}</h3>
              <p className="education-program">{item.program}</p>
            </div>
            <span className="education-period">{item.period}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
