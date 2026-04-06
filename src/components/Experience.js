import React from "react";
import Wrapper from "./Wrapper";
import {FaBriefcase } from "react-icons/fa";
function Experience()
{
    return(
        <Wrapper>
        <section className="experience">
            <h2><FaBriefcase/> Experience</h2>
            <h3>Software Engineer - <a href="https://www.stellapps.com/"> Stellapps Technologies</a></h3>
            <p> March 2022 - February 2026</p>

            <ul>
                <li>Developed microservices using Spring Boot</li>
                <li>Built CRUD APIs and optimized PostgreSQL queries</li>
                <li>Worked with Kafka & RabbitMq from async systems</li>
                <li>Developed apps using Docker,Kubernetes,AWS</li>
            </ul>


        </section>
        </Wrapper>
    );

}
export default Experience;