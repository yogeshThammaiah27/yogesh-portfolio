import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";

function App()
{
  // const[darkMode,setDarkMode] = useState(false);
  return(
    // <div className={darkMode ? "dark" :""}>
    //   <button onClick={() =>setDarkMode(!darkMode)} className="toggle-btn">
    //     Toggle Mode
    //   </button>
    <Router>

   
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
 <Profile/>   
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      </>
        } 
        />
       </Routes>
    </Router>
    // </div>
  );
}
export default App;