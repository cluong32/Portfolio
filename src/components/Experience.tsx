import './Experience.css';

function Experience() {
    return (
        <div className='experience-list'>
          <div className='experience-card'>
            <div className='experience-header'>
              <div>
                <h3>Intern</h3>
                <h4>Amanda Lindroth</h4>
              </div>

              <div className='experience-meta'>
                <span>Atlanta, GA</span>
                <span>March 2020 - September 2024</span>
              </div>
            </div>

            <ul>
              <li>Managed inventory, organized shipments, and coordinated warehouse activities, support daily operations across a high-volume facility.</li>
              <li>Contributed to a warehouse pop-up sale that generated over $200,000$ in revenue by supporting sales operations and helping process inventory from over 100+ pallets of merchandise.</li>
              <li>Installed, configured, and maintained POS hardware and software systems to ensure reliable and smooth checkout operations for a seamless customer experience.</li>
            </ul>
          </div>

          <div className='experience-card'>
            <div className='experience-header'>
              <div>
                <h3>Intern</h3>
                <h4>Kumon</h4>
              </div>

              <div className='experience-meta'>
                <span>Marietta, GA</span>
                <span>May 2022, August 2022</span>
              </div>
            </div>

            <ul>
              <li>Improved student understanding of math and reading concepts by providing one-on-one guidance and explaining the material.</li>
              <li>Supported a positive learning environment by helping students complete coursework and reinforcing learning objectives.</li>
            </ul>
          </div>
        </div>
    )
}

export default Experience;