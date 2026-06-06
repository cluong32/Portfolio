import './App.css'
import { useRef, useEffect } from 'react';
import { Download } from 'lucide-react';
import { animate, scrambleText } from 'animejs';

import Resume from './assets/Resume.pdf';
import BMO from './assets/bmo.png';
import Smiski from './assets/smiski.png';
import Terminal from './assets/terminal.png';

import ContactPopup from './components/ContactPopup';
import NavBar from './components/NavBar';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!nameRef.current || !subtitleRef.current) return;

    animate(nameRef.current, {
      innerHTML: scrambleText({
        text: 'const name = "Carter Luong";',
        chars: "numbers",
      }),
      duration: 1400,
      onComplete: () => {
        if (!nameRef.current) return;

        nameRef.current.innerHTML =
          '<span class="code-keyword">const name = "</span><span class="code-string">Carter Luong</span><span class="code-keyword">";</span>';
      },
    });

    animate(subtitleRef.current, {
      innerHTML: scrambleText({
        text: "// Software Engineer and Computer Scientist",
        chars: "numbers",
      }),
      duration: 1600,
      delay: 400,
    });
  }, []);
  return (
    <>
      <title>Carter Luong</title>

      <NavBar />

      <h1 ref={nameRef}></h1>
      <h2 ref={subtitleRef}></h2>

      <div className='interact-buttons'>
        <a className='resume-link' href={Resume} download="Carter Luong Resume" target="_blank" rel='nonreferrer'>
          <button className="button"><Download />Resume</button>
        </a>
        <ContactPopup />
      </div>
      
    
      <section className="About" id={SECTIONS.ABOUT}>
        <h1 className='section-title'>About</h1>
        <div className='about-container'>
          <div className='about-top'>
            <img src={Terminal} alt='terminal-pfp' className='about-pfp'/>
            <img src={BMO} alt='bmo' className='about-bmo' />
          </div>

          <div className='about-bottom'>
            <img src={Smiski} alt='smiski' className='about-smiski' />
            <p className='about-text'>
              My name is Carter Luong, and I am a student at Georgia Tech pursuing a Bachelor of Science in Computer Science. I am extremely interested 
              in technology, problem solving, and continuous learning. I am proud of my mathematical abilities and proficiency in a variety of programming languages. 
              Exploring new technologies and learning new programming languages is a challenge that I find rewarding and enduring, and it is something that I plan to continue throughout my career. 
              <br />
              Outside of academia, I am well-traveled and have explored more than a dozen countries across Asia, Europe, and the Americas. 
              I am extremely grateful for the opportunities that I had at a young age, and this has built my appreciation for different 
              cultures and lifestyles across the globe. In my free time, I enjoy playing piano, video games, and challenging myself to 
              learn new skills.
            </p>
          </div>
        </div>
      </section>


      <section className="Projects" id={SECTIONS.PROJECTS}>
        <h1 className='section-title'>Projects</h1>
        
        <Projects />
      </section>


      <section className="Experience" id={SECTIONS.EXPERIENCE}>
        <h1 className='section-title'>Experience</h1>
        
        <Experience />
      </section>


      <section className="Skills" id={SECTIONS.SKILLS}>
        <h1 className='section-title'>Skills</h1>

        <Skills />
      </section>


      <section className='Education' id={SECTIONS.EDUCATION}>
        <h1 className='section-title'>Education</h1>

        <Education />
      </section>
    </>
  )
}

export default App;
export const SECTIONS = {
  ABOUT: "about-section",
  PROJECTS: "project-section",
  EXPERIENCE: "exp-section",
  SKILLS: "skill-section",
  EDUCATION: "education-section"
} as const;
