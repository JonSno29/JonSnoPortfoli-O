import { useState, useEffect } from "react";
import {Navbar, Container } from "react-bootstrap";
import logo from "..";
import logo from "..";
import logo from "..";
import logo from "..";

export const NavBar = () =>  {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {   
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            } 
            }
            window.addEventListener('scroll', onScroll);

            return () => window.removeEventListener('scroll', onScroll);
        }, [])
         
        const onUpdateActiveLink = (value) => {   
            setActiveLink(value);
         }
return (
  <Navbar expand="lg">
    <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="logo" />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span className="navbar-toggler-icon"></span> 
          </Navbar.Toggle>  
          <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="me-auto">     
           <NavItem eventKey={1} href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</NavItem>
        <NavItem eventKey={2} href="#aboutme"className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>ABOUT ME</NavItem>
        <NavItem eventKey={2} href="#myprojects"className={activeLink === 'myprojects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('myprojects')}>MY PROJECTS</NavItem>
        <NavItem eventKey={3} href="#resume"className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>MY RESUME</NavItem>
        <NavItem eventKey={4} href="#myskills"className={activeLink === 'myskills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('myskills')}>MY SKILLS</NavItem>
        <NavItem eventKey={5} href="#reachouttome"className={activeLink === 'reachouttome' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('reachouttome')}>REACH OUT TO ME</NavItem>
      </Nav>
      <span className="navbar-text">
        <div className="social-icon">
            <a href="#"><img src={} alt=""/></a>
            <a href="#"><img src={} alt=""/></a>
            <a href="#"><img src={} alt=""/></a>
        </div>
        <button className="" onClick={() => console.log('connection')}></span>REACH OUT TO ME!</span>
     </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}