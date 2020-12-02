import React from "react";
import {  Cell } from "react-mdl";

function About() {
  return (
    <div className="about_body" id="about">
    
      <h2 style={{ color: "#fff", textAlign: "center" }}>About Me</h2>
      <div className="line"></div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHcekXoscn7yQ/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=WlhZ8hW_rTuge8Aolh7TU65KUTbX_J6_PSWtHZqd3Uc"
        alt="Saket Kumar"
        className="About_avatar"
      />
      <Cell col={12}>
      
      <div className="text_container_about">
      
        <b>Who I Am</b>
        <p> I'm Saket Kumar, and I'm a full stack web developer.
      </p>
      </div>

      <div className="text_container_about">
      
        <b>What I love</b>
   <ul>
  <li>Techy: Love to Explore new technologies.</li>
  <li>Love to get knowledge about newly launched smartphones.</li>
  <li>Love to adopt new technologies and work on it.</li>
   </ul>
      </div>

      <div className="text_container_about">
      
        <b>EXTRACURRICULARS</b>
        <li>NSS Volunteer: Completed 2 seven days camps.</li>
        <li>LaQshya Volunteer in D-Bugger (College tech fest).</li>
        <li>Treasurer in Association of Computer Engineers (ACE).</li>
      </div>

      </Cell>
    </div>
  );
}

export default About;
