import React from "react";
import Wrapper from "./Wrapper";
import {FaUser, FaProjectDiagram, FaEnvelope, FaTools, 
  FaBriefcase } from "react-icons/fa";

function Navbar()
{
    return(
        <Wrapper>
        <nav className="navbar">
            <h2>A T Yogesh</h2>
            
            <ul>
                <li> <FaUser/> About </li>
                <li> <FaTools/> Skills</li>
                <li> <FaBriefcase/> Experience</li>
                <li> <FaProjectDiagram/> Projects</li>
                <li> <FaEnvelope/> Contacts</li>
            </ul>
        </nav>
        </Wrapper>
    );
}

export default Navbar;