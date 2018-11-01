import React,{Fragment} from 'react'
import styled from 'styled-components'
import Logo from '../../src/assets/brand-logo.png'
import SocialLogo from 'social-logos';
import Menu from './Menu.js'
import  './Header.scss'
const Template =require("../assets/fullpic.JPG");

export default class Header extends React.Component{
render(){
return (
   
  <section className="header-section" style={ { backgroundImage: `url(${Template})`} }>
    
      <Image src={Logo} alt="" />
      
    <NavLinks>
        <a
           style={{ padding: "5px", color: "white" }}
          href="mailto:madhurebbana@gmail.com"
        >
          <SocialLogo icon="mail" size={36} />
        </a>
        <a
          style={{ padding: "5px", color: "white" }}
          href="https://www.linkedin.com/in/madhurebbana/"
        >
          <SocialLogo icon="linkedin" size={36} />
        </a>
        <a style={{ padding: "5px" }} href="https://github.com/mrebb">
          <SocialLogo icon="github" size={36} />
        </a>
      </NavLinks>
      <div className="title-section">
        <Title>Full Stack Software Developer</Title>
        <hr style={{borderTopWidth: '5px',
    borderTopStyle: 'solid',
    borderTopColor: 'rgba(255, 255, 255, 0.75)', width:'90%',margin:'0px'}}></hr>
      </div>
     <Menu/>
  </section>
   
);
}
}

const Title = styled.h1`
  color: white;
//   font-family: 'Archivo Narrow';
  font-size: 2.75em;
  text-transform: uppercase;
  font-weight:900;
  padding-right:5%
`;
const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    
`
const NavLinks = styled.div`
    position:absolute;
    background-color:white
   left: 2%;
    margin-top: 25%;
    display: flex;
    flex-direction: column;   
`
const TitleSection = styled.div`
    margin-left: 25%;
    margin-top: 24%;
`
const Image = styled.img`
    align-self: flex-start;
    padding-left:10%;
    padding-top:3%;
    width: 5em;
    height: 5em;
    border-radius: 10%;
    overflow: hidden; 
`
