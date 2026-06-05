import { SECTIONS } from '../App';
import './NavBar.css'

function NavBar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="menu">
            <div className='logo' onClick={scrollToTop}>
                Carter
            </div>
            <ul className='ul'>
                <li><a href={`#${SECTIONS.ABOUT}`}>About</a></li>
                <li><a href={`#${SECTIONS.PROJECTS}`}>Projects</a></li>
                <li><a href={`#${SECTIONS.EXPERIENCE}`}>Experience</a></li>
                <li><a href={`#${SECTIONS.SKILLS}`}>Skills</a></li>
                <li><a href={`#${SECTIONS.EDUCATION}`}>Education</a></li>
            </ul>
        </nav>
    );
}

export default NavBar