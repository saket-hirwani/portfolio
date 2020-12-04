import React from "react";
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button,} from 'react-mdl'

function Projects() {
  return (
    <div className="project_body" id="projects">

    <Grid className="project_grid">
    
    <Cell col={3} phone={4}>
    <Card shadow={5} style={{ width:'80%', margin: "auto", marginTop:30 }}>
    <CardTitle
    className="projectTitle"
      style={{
        color: "#fff",
        height: "180px",
        background:
          "url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover",
      }}
    >
      ChatKaro
    </CardTitle>
    <CardText className="project_desc">
    This is an Online Chatting App, where anyone (with google Authentication) can create chat rooms and chat with their friends.
    </CardText>
    <CardActions border>
      <Button colored>Open App</Button>
      <Button colored>Github Repo</Button>
    </CardActions>
    {/*<CardMenu style={{ color: "#fff" }}>
      <IconButton name="share" />
    </CardMenu>*/}
  </Card></Cell>


  <Cell col={3} phone={4}>
  <Card shadow={5} style={{  width:'80%',margin: "auto", marginTop:30 }}>
  <CardTitle
  className="projectTitle"
    style={{
      color: "#fff",
      height: "180px",
      background:
        "url(https://miro.medium.com/max/3056/1*PR3klDbot3ZS9Kp69LYtHA.png) center / cover",
        
    }}
  >
  ai-question-paper
  </CardTitle>
  <CardText className="project_desc">
  AI based Question Papers for college students.
  </CardText>
  <CardActions border>
    <Button colored>Open App</Button>
    <Button colored>Github Repo</Button>
  </CardActions>
  {/*<CardMenu style={{ color: "#fff" }}>
    <IconButton name="share" />
  </CardMenu>*/}
</Card></Cell>

<Cell col={3} phone={4}>
  <Card shadow={5} style={{  width:'80%',margin: "auto", marginTop:30 }}>
  <CardTitle
  className="projectTitle"
    style={{
      color: "#fff",
      height: "180px",
      background:
        "url(https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg) center / cover",
    }}
  >
  My Portfolio
  </CardTitle>
  <CardText className="project_desc">
  My Portfolio Using ReactJS
  </CardText>
  <CardActions border>
    <Button colored>Open App</Button>
    <Button colored>Github Repo</Button>
  </CardActions>
  {/*<CardMenu style={{ color: "#fff" }}>
    <IconButton name="share" />
  </CardMenu>*/}
</Card></Cell>

<Cell col={3} phone={4}>
  <Card shadow={5} style={{  width:'80%',margin: "auto", marginTop:30 }}>
  <CardTitle
  className="projectTitle"
    style={{
      color: "#fff",
      height: "180px",
      background:
        "url(https://assets-global.website-files.com/5e3c45dea042cf97f3689681/5e417cd336a72b06a86c73e7_Flutter-Tutorial-Header%402x.jpg) center / cover",
    }}
  >
  PianoApp flutter
  </CardTitle>
  <CardText className="project_desc">
  Piano App used to play different sounds using flutter
  </CardText>
  <CardActions border>
    <Button colored>Open App</Button>
    <Button colored>Github Repo</Button>
  </CardActions>
  {/*<CardMenu style={{ color: "#fff" }}>
    <IconButton name="share" />
  </CardMenu>*/}
</Card></Cell>

<Cell col={3} phone={4}>
  <Card shadow={5} style={{  width:'80%',margin: "auto", marginTop:30 }}>
  <CardTitle
  className="projectTitle"
    style={{
      color: "#fff",
      height: "180px",
      background:
        "url(https://assets-global.website-files.com/5e3c45dea042cf97f3689681/5e417cd336a72b06a86c73e7_Flutter-Tutorial-Header%402x.jpg) center / cover",
    }}
  >
  QuizApp flutter
  </CardTitle>
  <CardText className="project_desc">
  Quiz App using Flutter
  </CardText>
  <CardActions border>
    <Button colored>Open App</Button>
    <Button colored>Github Repo</Button>
  </CardActions>
  {/*<CardMenu style={{ color: "#fff" }}>
    <IconButton name="share" />
  </CardMenu>*/}
</Card></Cell>


<Cell col={3} phone={4}>
  <Card shadow={5} style={{  width:'80%',margin: "auto", marginTop:30 }}>
  <CardTitle
  className="projectTitle"
    style={{
      color: "#fff",
      height: "180px",
      background:
        "url(https://cdn.swapps.com/uploads/2019/04/django-faster.jpg) center / cover",
    }}
  >
  Price comparison
  </CardTitle>
  <CardText className="project_desc">
  Compare prices of new smartphones using Django based App
  </CardText>
  <CardActions border>
    <Button disabled colored>Open App</Button>
    <Button colored>Github Repo</Button>
  </CardActions>
  {/*<CardMenu style={{ color: "#fff" }}>
    <IconButton name="share" />
  </CardMenu>*/}
</Card></Cell>



    </Grid>
    </div>
  );
}

export default Projects;
