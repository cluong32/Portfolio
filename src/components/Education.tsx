import './Education.css';

function Education() {
    return (
        <div className='education-timeline'>
          <div className='education-line' />

          <div className='education-item hs'>
            <div className='education-dot' />
            <div className='education-card'>
              <span className='education-date'>2019 - 2023</span>
              <h3>Pope High School</h3>

              <p className='education-degree'>
                High School Diploma
              </p>

              <p className='education-gpa'>
                GPA: 3.96 / 4.0
              </p>
            </div>
          </div>

          <div className='education-item ksu'>
            <div className='education-dot' />
            <div className='education-card'>
              <span className='education-date'>2022 - 2024</span>
              <h3>Kennesaw State University</h3>
              <p className='education-degree'>
                Computer Science
              </p>

              <p className='education-gpa'>
                GPA: 3.89 / 4.0
              </p>

              <p className='education-note'>
                Transferred to Georgia Tech
              </p>
            </div>
          </div>

          <div className='education-item gt'>
            <div className='education-dot' />
            <div className='education-card'>
              <span className='education-date'>2024 - Present</span>
                <h3>Georgia Instituate of Technology</h3>
                <p className='education-degree'>
                  B.S. Computer Science
                </p>

                <p className='education-gpa'>
                  GPA: 3.32 / 4.0
                </p>
            </div>
          </div>
        </div>
    )
}

export default Education;