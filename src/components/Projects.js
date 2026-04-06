import React from "react";
import Wrapper from "./Wrapper";
import  {FaProjectDiagram} from "react-icons/fa";
function Projects ()
{
    return(
        <Wrapper>
        <section className="projects">
            <h2><FaProjectDiagram/> Projects</h2>
            <ul>
                <li>
            <div>
                <h3>Traceability system</h3>
                <p>Farm-to-consumer milk tracing system using Java + React.</p>
            </div>
            </li>
              <li>
            <div>
                <h3>MooFlow-V2</h3>
                <p>Automated payment system with microservices.</p>
            </div>
            </li>
            <li>
            <div>
                <h3>Farmer Repository</h3>
                <p>Secure farmer data management system.</p>
            </div>
            </li>
            </ul>
        </section>
        </Wrapper>
    );

}
export default Projects;