import React from "react";
import "./css/profile.css";
import profile from "./../Image/mine.jpg";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Footer from "./Footer";
// import Allproject from "./Allproject";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "Frontend Developer",
      animate: false,
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
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { animate, role } = this.state; // Destructure name
    return (
      <div>
        <div id="profile" className={`container ${animate ? "animate" : ""}`}>
          <div className="diagonal-line"></div>
          <div className="left-side">
            <h1 className="heading">
              Hi all, I am <span className="name">Avinesh...</span>
            </h1>

            <p className="description">
              I am a passionate <span className="role">{role}</span>.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/avinesh2001/"
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
                className="GeeksforGeeks"
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
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Profile;
