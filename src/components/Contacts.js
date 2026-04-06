//  import React from "react";
import Wrapper from "./Wrapper";
import {FaPhone, FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";

 function Contact()
 {
    return(
        <Wrapper>
        <section className="contact">
            <h2> <FaEnvelope/> Contact</h2>
          
            <a  href="mailto: yogesh.thammaiah29@gamil.com">
             <FaEnvelope/>  yogesh.thammaiah29@gmail.com
                </a>
           
            <p><FaPhone/>   <a href="tel:+919482235245">
    +91 9482235245
  </a></p>
         <p>
  <FaMapMarkerAlt /> 
  <a 
    href="https://www.google.com/maps?q=Bengaluru" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Bengaluru
  </a>
</p>
        </section>
        </Wrapper>
    );
 }
 export default Contact;