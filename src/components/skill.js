import React from "react";
import { Grid, Cell } from "react-mdl";

function Skill() {
  return (
    <div className="contact_body" id="skill">
      <Grid className="skill_grid">
        <Cell col={12}>
          <h2 style={{ color: "#fff" }}>Skills</h2>
          <div className="skill_card">
            <div className="skill_card_left">
              <p>Programming Languages</p>
            </div>
            <div className="skill_card_right">
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>C</li>
                <li>JavaScript</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
          <div className="skill_card">
            <div className="skill_card_left">
              <p>Client-side</p>
            </div>
            <div className="skill_card_right">
              <ul>
                <li>ReactJS</li>
                <li>React Native</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>AngularJS</li>
              </ul>
            </div>
          </div>
          <div className="skill_card">
            <div className="skill_card_left">
              <p>Server-side</p>
            </div>
            <div className="skill_card_right">
              <ul>
                <li>Django</li>
                <li>Git</li>
                <li>Node.js</li>
                <li>MongoDb</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div className="skill_card">
            <div className="skill_card_left">
              <p>Tools</p>
            </div>
            <div className="skill_card_right">
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere Pro</li>
                <li>Figma</li>
                <li>WonderShare Filmora</li>
              </ul>
            </div>
          </div>
        </Cell>
        <Cell col={12}>
          <h2 style={{ color: "#fff" }}>Education</h2>
          <Grid className="education_grid">
            <Cell col={4}>
              <div className="education_card">
                <h4> Bachelor of Engineering in Computer Science</h4>

                <a
                  href="https://g.page/csit-durg-durg?share"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                    Chhatrapati Shivaji Institute of Technology, Durg
                    (Chhattisgarh)
                  </p>
                </a>
                <a
                  href="https://goo.gl/maps/MiDh8BPp2M4wWZv78"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                <p>
                  {" "}
                  <i class="fa fa-university" aria-hidden="true"></i>{" "}
                  Chhattisgarh Swami Vivekananda Technical University, Bhilai.
                </p>
                </a>
              </div>
            </Cell>
            <Cell col={4}>
            <div className="education_card">
            <h4> Higher Secondary School (12th)</h4>

            
              <p>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                Govt. Higher Secondary School Kodiya, Durg (Chhattisgarh)
              </p>
            
            <a
              href="https://goo.gl/maps/x6uogqWo56dh2hE2A"
              rel="noopener noreferrer"
              target="_blank"
            >
            <p>
              {" "}
              <i class="fa fa-university" aria-hidden="true"></i>{" "}
              Chhattisgarh Board of Secondary Education Raipur.
            </p>
            </a>
          </div>
            </Cell>
            <Cell col={4}>
            <div className="education_card">
            <h4> High School (10th)</h4>
 
            
              <p>
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                Govt. Higher Secondary School Kodiya, Durg (Chhattisgarh)
              </p>
            
            <a
              href="https://goo.gl/maps/x6uogqWo56dh2hE2A"
              rel="noopener noreferrer"
              target="_blank"
            >
            <p>
              {" "}
              <i class="fa fa-university" aria-hidden="true"></i>{" "}
              Chhattisgarh Board of Secondary Education Raipur.
            </p>
            </a>
          </div>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </div>
  );
}

export default Skill;
