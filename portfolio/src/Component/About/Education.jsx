import React from "react";
import education from "./../../Image/education.png";
import './../css/expedu.css';
const Education = () => {
  const educationData = [
    {
      id: 1,
      date: "2020 - 2024 | Gurugram",
      institution: "BML MUNJAL UNIVERSITY (B.Tech)",
      gpa: "Cum. GPA: 8.04 / 10.0",
    },
    {
      id: 2,
      date: "2019 | Gurgaon(Haryana)",
      institution: "Euro International School (INTERMEDIATE)",
      gpa: "Percentage : 83.40",
    },
  ];

  return (
    <div className="education">
      <h2 className="education-head">Education</h2>
      <div className="edu-side">
        <div className="edu-leftside">
          <ul>
            {educationData.map((item) => (
              <li key={item.id}>
                <div className="education-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-details">
                  <span className="education-date">{item.date}</span>
                  <h3 className="education-institution">{item.institution}</h3>
                  <p className="education-gpa">{item.gpa}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="edu-rightside">
          <img src={education} alt="Education illustration" />
        </div>
      </div>
    </div>
  );
};

export default Education;
