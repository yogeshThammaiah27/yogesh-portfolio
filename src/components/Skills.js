// import React from "react";
import Wrapper from "./Wrapper";
import { FaTools } from "react-icons/fa";
function Skills()
{
    return(
        <Wrapper>
        <section className="skills">
            <h2> <FaTools/> Skills</h2>
            <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>React.js</li>
                <li>JavaScript, HTML,CSS</li>
                <li>PostgreSQL,MongoDB</li>
                <li>Docker, Kubernetes,AWS</li>
                <li>Kafka, RabbitMQ</li>
            </ul>
        </section>
        </Wrapper>
    );

}
export default Skills;