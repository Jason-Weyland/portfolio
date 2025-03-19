import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";

const RenderSkills = ({ skillsList }) => {
  return (
    <>
      {skillsList.map((skill) => {
        return (
          <div className="col-3 col-md-2 mb-5 align-self-center" key={skill.id}>
            <Card className='noBorder'>
              <CardImg top src={skill.img} alt={skill.alt} />
            </Card>
          </div>
        );
      })}
    </>
  );
};

// const RenderSkillsBar = ({ skillsList }) => {
//   return (
//     <>
//       {skillsList.map((skill) => {
//         if (skill.id < 10) {
//           return (
//             <>
//               <div className="row" key={skill.id}>
//                 <div className="col-3 col-md-2 align-self-center">{skill.skill}</div>
//                 <div className="col-9 col-md-10 align-self-center">
//                   <Progress color="info" value={skill.value} className="my-2" />
//                 </div>
//               </div>
//             </>
//           )}
//           return <div/>;
//       })}
//     </>
//   );
// };

const Skills = ({skillsList}) => (
  <>
    <div className="container">
      <div className="row row-content" id="skills">
        <div className="col d-flex justify-content-center">
          <u>
            <h1>Skills</h1>
          </u>
        </div>
      </div>
      <div className="row">
        <RenderSkills skillsList={skillsList} />
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <h6>To see more details about skills and work experience, please download my <a className='resume' href='#about'>resume</a></h6>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-12 col-md-8">
          <RenderSkillsBar skillsList={this.props.skillsList} />
        </div>
        <div className="col-12 col-md-4">
          <h2>Honorary Mention</h2>
          <div className="row d-flex">
            <ul>
              <li>Redux Thunk</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>REST API</li>
              <li>Reactstrap</li>
              <li>React-Redux-Forms</li>
              <li>Redux Logger</li>
              <li>React-Router-Dom</li>
              <li>Android Studio</li>
              <li>Font Awesome</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  </>
);

export default Skills;

