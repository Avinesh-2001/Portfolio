import "./../css/skills.css";
import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillsData = {
    languages: {
      title: "Languages",
      skills: [
        { icon: "fab fa-html5", name: "HTML" },
        { icon: "fab fa-css3-alt", name: "CSS" },
        { icon: "fas fa-laptop-code", name: "C/C++" },
        { icon: "fab fa-js-square", name: "JavaScript" },
        { icon: "fas fa-database", name: "SQL" },
        { icon: "fab fa-python", name: "Python" },
      ],
    },
    tools: {
      title: "Tools",
      skills: [
        { icon: "fa fa-react", name: "ReactJS" },
        { icon: "fa-brands fa-node-js", name: "Node.js" },
        { icon: "fa-brands fa-node-js", name: "Express.js" },
        { icon: "fa fa-crosshairs", name: "OpenCV" },
        { icon: "fa-solid fa-chart-column", name: "Pandas" },
        { icon: "fa-solid fa-calculator", name: "NumPy" },
      ],
    },
    libraries: {
      title: "Libraries/Framework",
      skills: [
        { icon: "fa-solid fa-palette", name: "Canva" },
        { icon: "fa-brands fa-figma", name: "Figma" },
        { icon: "fa-solid fa-chart-pie", name: "Power BI" },
        { icon: "fa-brands fa-jenkins", name: "Jenkins" },
        { icon: "fa-brands fa-github", name: "GitHub" },
        { icon: "fa-solid fa-drafting-compass", name: "AutoCAD" },
        { icon: "fa-brands fa-google", name: "Google Colab" },
      ],
    },
    database: {
      title: "Database",
      skills: [
        { icon: "fas fa-database", name: "MySQL" },
        { icon: "fas fa-leaf", name: "MongoDB" },
      ],
    },
  };

  const SkillCategory = ({ category, data }) => {
    const isActive = activeCategory === category;

    return (
      <div
        className="skill-category"
        onMouseEnter={() => setActiveCategory(category)}
        onMouseLeave={() => setActiveCategory(null)}
      >
        <h3>{data.title}</h3>
        <ul className={`skill-items ${isActive ? "expand" : "collapse"}`}>
          {data.skills.map((skill, index) => (
            <li
              key={`${category}-${index}`}
              style={{ "--delay": `${index * 1}s` }} // Update to 1 second interval
            >
              <i className={skill.icon} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="skills">
      <h2 className="skills-head" style={{ textAlign: "center" }}>
        SKILLS
      </h2>
      <div className="skills-list">
        {Object.entries(skillsData).map(([category, data]) => (
          <SkillCategory key={category} category={category} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
