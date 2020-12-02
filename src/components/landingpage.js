import React from 'react'
import {Grid, Cell} from 'react-mdl';
function Landingpage() {
    return (
        <div id="home" style={{width:'100%',margin:'auto'}}>
        <Grid className="landing_grid">
        <Cell col={12}>
        <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHcekXoscn7yQ/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=WlhZ8hW_rTuge8Aolh7TU65KUTbX_J6_PSWtHZqd3Uc"
        alt="Saket Kumar"
        className="avatar"
        />
        <div className="banner_text">  
        <h1>Web developer</h1>
        <p>Html | CSS | React js | React native | Python | JavaScript | Node.js | Firebase</p>
        <div className="social_links">
        {/*Linkedin */}
        <a href="https://www.linkedin.com/in/saket-hirwani/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square" arial-hidden="true"/>
        </a>
        {/*github */}
        <a href="https://github.com/saket-hirwani/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-github-square" arial-hidden="true"/>
        </a>
        {/*mail */}
        <a href="mailto:sakethirwani15@gmail.com" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-envelope" arial-hidden="true"/>
        </a>
        {/*youtube */}
        <a href="https://www.youtube.com/c/SKTtech" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-youtube-square" arial-hidden="true"/>
        </a>
        </div>
        </div>
       
        </Cell>

        
        </Grid>
        

        </div>
    )
}

export default Landingpage
