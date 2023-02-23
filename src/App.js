import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";
import Header from "./components/header/header";
import Menu from "./components/navbar/Menu";
import Skills from "./components/skills/Skills";
import Projects from './components/projects/Projects'
import  Testimonial  from "./components/Testimonial/Testimonial";
import Crosel from "./components/Crosel";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="bg-[#0B1224] text-slate-100 h-screen bg-cover mx-auto container">
      <Menu />
      <Header id="Home"/>
      <AboutMe id="skills"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Testimonial id="skills"/>
      <Contact id="skills"/>
      <Footer id="skills"/>
    </div>
   
  );
}

export default App;
