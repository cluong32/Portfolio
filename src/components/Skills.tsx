import './Skills.css';

function Skills() {
    return (
        <div className='skills-tree'>
            <div className='skills-columns'>
            <div className='skill-category languages'>
                <div className='category-icon'>&lt;/&gt;</div>
                <h3>Languages</h3>

                <div className='skill-tags'>
                <span>Python</span>
                <span>Java</span>
                <span>C</span>
                <span>C#</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>SQL</span>
                <span>HTML</span>
                <span>CSS</span>
                </div>
            </div>

            <div className='skill-category development'>
                <div className='category-icon'>◈</div>
                <h3>Development</h3>

                <div className='skill-tags'>
                <span>React</span>
                <span>React Native</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>REST APIs</span>
                <span>OAuth</span>
                </div>
            </div>

            <div className='skill-category cs'>
                <div className='category-icon'>&gt;_</div>
                <h3>Computer Science</h3>

                <div className='skill-tags'>
                <span>Data Structures</span>
                <span>Algorithms</span>
                <span>Object-Oriented Programming</span>
                <span>Database Systems</span>
                <span>Memory Management</span>
                <span>Assembly</span>
                <span>Computer Architecture</span>
                </div>
            </div>

            <div className='skill-category math'>
                <div className='category-icon'>&sum;</div>
                <h3>Math</h3>

                <div className='skill-tags'>
                <span>Calculus</span>
                <span>Linear Algebra</span>
                <span>Discrete Mathematics</span>
                <span>Combinatorics</span>
                <span>Physics</span>
                <span>Advanced Arithmetic</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skills;