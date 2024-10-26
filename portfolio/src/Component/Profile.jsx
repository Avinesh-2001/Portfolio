import React from "react";
import "./css/profile.css";
import profile from "./../Image/Avinesh_BMU.png";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
// import Allproject from "./Allproject";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "Frontend Developer",
      animate: false,
      name: ['A', 'v', 'i', 'n', 'e', 's', 'h'],
    };
  }

  openPDF = () => {
    window.open("/Avinesh_CV.pdf", "_blank");
  };

  

  componentDidMount() {
    this.setState({ animate: true });
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        role:
          prevState.role === "Frontend Developer"
            ? "Software Developer"
            : "Frontend Developer",
      }));
    }, 3000);

    // Start letter animation
    this.letterAnimationInterval = setInterval(() => {
      this.setState((prevState) => {
        const nextIndex = (prevState.currentLetterIndex + 1) % (prevState.name.length + 1);
        return { currentLetterIndex: nextIndex };
      });
    }, 500); // 0.5 second interval for each letter
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.letterAnimationInterval);
  }

  render() {
    const { animate, role, name } = this.state; // Destructure name
    return (
      <div>
        <div id="profile" className={`container ${animate ? "animate" : ""}`}>
          <div className="diagonal-line"></div>
          <div className="left-side">
            <h1 className="heading">
              Hi all, I am{" "}
              {name.map((letter, index) => (
                <span
                  key={index}
                  className="name"
                  style={{ animationDelay: `${index * 0.5}s` }} 
                >
                  {letter}
                </span>
              ))}{" "}
              ..
            </h1>

            <p className="description">
              I am a passionate <span className="role">{role}</span>.
            </p>
            <div className="social-icons">
              <a
                href="https://leetcode.com/u/Avu_1981/"
                className="linkedin"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Avinesh-2001"
                className="github"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://leetcode.com/u/Avu_1981/"
                className="leetcode"
                title="LeetCode"
              >
                <i className="fas fa-code"></i>
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/avi_nesh_2001/"
                className="geeksforgeeks"
                title="GeeksforGeeks"
              >
                <i className="fas fa-laptop-code"></i>
              </a>
            </div>
            <button className="resumebutton" onClick={this.openPDF} title="CV">
              Download CV
            </button>
          </div>
          <div className="right-side">
            <img src={profile} alt="Profile" className="profile-pic" />
          </div>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Profile;
