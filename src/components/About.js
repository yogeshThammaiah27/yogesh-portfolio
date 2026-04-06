// import React from "react";
import Wrapper from "./Wrapper";
import {FaUser } from "react-icons/fa";
function About()
{
    return(
        <Wrapper>
        <section className="about">
            <h2> <FaUser/> About me</h2>
            <p>
                Full Stack Developer with 4 years of experience in desingning and implementing 
                end-to-end software solutions. Specialized in Java, Spring Boot,
                and React.js with strong expertise in building scalable microservices and APIs.
            </p>

        </section>
        </Wrapper>
        //
    );

}
export default About;