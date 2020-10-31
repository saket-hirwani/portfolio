import React from "react";
import {
  Layout,
  Header,
  HeaderRow,
  Textfield,
  Navigation,
  Drawer,
  Content,
} from "react-mdl";
import "./App.css";
import Landingpage from "./components/landingpage";
import About from './components/about';
import Resume from './components/resume';
import Projects from'./components/projects';
import Contact from './components/contact';
import Skill from './components/skill';
import Footer from './components/footer';
// import {  Route, Switch } from "react-router-dom";
import{HashLink as Link} from "react-router-hash-link"
function App() {
  return (
    <div className="App">
      {/* Uses a header that contracts as the page scrolls down. */}
      <div className="demo-big-content">
      <>
  
        <Layout>
          <Header className="header-color" waterfall hideTop>
            <HeaderRow title="Saket Kumar">
              <Textfield
                value=""
                onChange={() => {}}
                label="Search2"
                expandable
                expandableIcon="search"
              />
            </HeaderRow>
            <HeaderRow>
              <Navigation>
                <Link smooth to="#home">Home</Link>
                <Link smooth to="#projects">Projects</Link>
                <Link smooth to="#skill">Skill & Education</Link>
                <Link smooth to="#resume">Resume</Link>
                <Link smooth to="#about">About</Link>
                <Link smooth to="#contact">Contact</Link>
              </Navigation>
            </HeaderRow>
          </Header>
          <Drawer title="Saket Kumar">
            <Navigation>
            <Link smooth to="#home">Home</Link>
            <Link smooth to="#projects">Projects</Link>
            <Link smooth to="#skill">Skill & Education</Link>
            <Link smooth to="#resume">Resume</Link>
            <Link smooth to="#about">About</Link>
            <Link smooth to="#contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
            <div className="main_body">
              <Landingpage />
              <Projects/>
              <Skill/>
              <Resume/>
              <About/>
              <Contact/>
              <Footer/>
    </div>
            </div>
          </Content>
        </Layout>
        </>
      </div>
    </div>
  );
}

export default App;
