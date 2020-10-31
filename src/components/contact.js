import React from "react";
import { Grid, Cell } from "react-mdl";
function Contact() {
  return (
    <div className="contact_body" id="contact">
      <Grid className="contact_grid">
        <Cell col={6}>
          <div className="img_container">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHcekXoscn7yQ/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=WlhZ8hW_rTuge8Aolh7TU65KUTbX_J6_PSWtHZqd3Uc"
              alt="my pic"
              className="avatar"
            />
            <h1 style={{color:'white', fontWeight:"bold"}}>Saket Kumar</h1>
          </div>
        </Cell>
        <Cell col={6}>
          <div className="banner_text_contact">
            <div className="contact_details">
              <h1>Contact Me</h1>
              <p>
                <i className="fa fa-map-marker" arial-hidden="true" />
                <b>Address:</b> Vill.- Kokdi, Post- Pauwara, Dist.- Durg,
                Chhattisgarh, India
              </p>
              <p>
                <i className="fa fa-mobile" arial-hidden="true" />
                Mobile: +91 7000146974
              </p>
              <a
              href="mailto:sakethirwani15@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>
                <i className="fa fa-envelope" arial-hidden="true" />
                Email: saketihirwani15@gmail.com
              </p>
              </a>
            </div>
            <div className="social_links">
              {/*Linkedin */}
              <a
                href="https://www.linkedin.com/in/saket-hirwani/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" arial-hidden="true" />
              </a>
              {/*github */}
              <a
                href="https://github.com/saket-hirwani/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" arial-hidden="true" />
              </a>
           
              {/*youtube */}
              <a
                href="https://www.youtube.com/c/SKTtech"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" arial-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>

      </Grid>
      <form>
      <Grid className="feedback_grid">
      <Cell col={5}>
      <div className="text_container">
      <input className="text_input" type="text" placeholder="Enter your Name"/>
      </div>
      <div className="text_container">
      <input className="text_input" type="text" placeholder="Enter your Email"/>
      </div>
      <div className="text_container">
      <input className="text_input" type="text" placeholder="Subject"/>
      </div>
      </Cell>
      <Cell col={7}>
      <div className="text_container">
      <textarea className="text_area_input"  type="text" placeholder="Type your message here.."/>
      </div>
      </Cell>
      <Cell col={12}>
      <button className="btn-feedback" onClick={{}} type="submit">Submit</button> 
      </Cell>
      </Grid>
      </form>
    </div>
  );
}

export default Contact;
