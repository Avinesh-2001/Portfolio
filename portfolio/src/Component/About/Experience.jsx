import React from "react";
import exp from "./../../Image/exp.png";
import './../css/expedu.css';
const Experience = () => {
  const experienceData = [
    {
      id: 1,
      date: "April 2024 - August 2024",
      position: "Frontend Developer Intern",
      company: "Center for Development of Telematics",
    },
    {
      id: 2,
      date: "May 2022 - July 2022",
      position: "Software Testing Intern",
      company: "Benciti Technology pvt. ltd.",
    },
  ];

  return (
    <div className="exp">
      <h2 className="exp-head">Experience</h2>
      <div className="exp-side">
        <div className="exp-leftside">
          <img src={exp} alt="Experience illustration" />
        </div>
        <div className="exp-rightside">
          <ul>
            {experienceData.map((item) => (
              <li key={item.id}>
                <div className="exp-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="exp-details">
                  <span className="exp-date">{item.date}</span>
                  <h3 className="exp-post">{item.position}</h3>
                  <p className="companyname">{item.company}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
