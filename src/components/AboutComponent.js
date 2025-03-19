import React, { Component } from "react";
import { Row, Nav, NavItem, NavLink } from "reactstrap";
import constants from "../utils/constants";

class About extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row" id="about">
            <div className="col d-flex justify-content-center">
              <u>
                <h1 className="mb-5">About</h1>
              </u>
            </div>
          </div>
          <Row className='d-flex justify-content-center'>
            <div className="col-12 col-lg-7 col-xl-7 d-flex justify-content-center">
              <img src="assets/images/portrait.jpg" rel='preload' alt="Portrait" width="50%" height="80%" style={{ borderRadius: "10%" }} />
            </div>
            <div className="col-12 col-xl-5">
              <h2 className='d-flex justify-content-center justify-content-xl-start'>Hi, I'm Jason. Nice to meet you.</h2>
              <p className='d-flex justify-content-center justify-content-xl-start'>
              Senior Frontend Engineer with 5+ years of experience building high-performance, enterprise-grade web applications and managing robust frontend infrastructures. Proven expertise in modern JavaScript frameworks and technologies. Adept at streamlining agile processes, implementing automated testing, and working within cross-functional teams to deliver intuitive user experiences and robust solutions. Passionate about optimizing performance, enforcing best coding practices, and mentoring junior developers to meet evolving client goals and technical challenges that drive business impact.
              </p>
            </div>
            <Row className="col d-flex justify-content-center mt-3">
              <div>
                <Nav>
                  <NavItem>
                    <NavLink href={constants.LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin" /> LinkedIn
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={constants.GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" /> GitHub
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={constants.RESUME_PDF} download id="resume">
                      <i className="fa fa-file-pdf-o" /> Resume.pdf
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Row>
          </Row>
        </div>
      </>
    );
  }
}

export default About;
