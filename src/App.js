
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="resume-container">
        {/* Header with contact information */}
        <header className="contact-info">
          <h1>GANESH YUVAN VARADA</h1>
          <p>Parvathipuram, Andhra Pradesh | 9392328831 | <a href="mailto:yuvanvasavi@gmail.com">yuvanvasavi@gmail.com</a></p>
          <div className="social-links">
            <a href="https://linkedin.com/in/ganesh-yuvan-varada-3409bb2a0" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href="https://github.com/yuvanvarada" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </header>

        {/* Summary Section */}
        <section className="section">
          <h2>PROFILE</h2>
          <p>Tech enthusiast currently in my third year at Vasavi College of Engineering, passionate about exploring cutting-edge technologies and their applications. Skilled in problem-solving, collaborative projects, and hands-on learning across emerging tech domains. Actively involved in tech communities, events, and workshops to stay updated and contribute to innovative solutions.</p>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2>EDUCATION</h2>
          
          <div className="item">
            <div className="item-header">
              <h3 className="item-title">BE-INFORMATION TECHNOLOGY</h3>
              <span className="item-date">October 2022 - Present</span>
            </div>
            <p>VASAVI COLLEGE OF ENGINEERING, HYDERABAD, INDIA</p>
            <p>CGPA: 7.69</p>
          </div>

          <div className="item">
            <div className="item-header">
              <h3 className="item-title">INTERMEDIATE</h3>
              <span className="item-date">2022</span>
            </div>
            <p>VEDANTHA JUNIOR COLLEGE, PARVATHIPURAM, INDIA</p>
            <p>Percentage: 86%</p>
          </div>

          <div className="item">
            <div className="item-header">
              <h3 className="item-title">10TH GRADE</h3>
              <span className="item-date">2020</span>
            </div>
            <p>KAVIRAYANI PUBLIC SCHOOL, PARVATHIPURAM, INDIA</p>
            <p>Percentage: 83.6%</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2>PROJECTS</h2>
          
          <div className="item">
            <h3 className="item-title">Micro Doppler Based Classification</h3>
            <ul>
              <li>Engineered an advanced Micro-Doppler Classification system using deep learning frameworks (TensorFlow and PyTorch) to distinguish between birds and drones through radar signal processing</li>
              <li>Achieved 98% classification accuracy in various environmental conditions</li>
              <li>Implemented a sophisticated CNN-LSTM architecture for analyzing micro-Doppler signatures and extracting unique temporal features from spectrograms</li>
              <li>Enabled real-time target classification and threat assessment while reducing false positives by 92% compared to conventional methods</li>
            </ul>
          </div>

          <div className="item">
            <h3 className="item-title">Explore Ease</h3>
            <ul>
              <li>Developed a website showcasing India's rich heritage and culture</li>
              <li>Implemented features to help users plan trips, discover nearby attractions, and explore cultural experiences</li>
              <li>Tech Stack: Python, HTML, CSS, JavaScript</li>
            </ul>
          </div>

          <div className="item">
            <h3 className="item-title">Women Safety Project</h3>
            <ul>
              <li>Developed a comprehensive Women Safety System using Python and OpenCV that combines real-time video surveillance, facial recognition, and gesture detection</li>
              <li>Implemented machine learning models for pattern recognition with 94% accuracy</li>
              <li>Integrated GPS tracking, geofencing capabilities, and a gesture-based SOS system</li>
              <li>Reduced emergency response time by 37% while eliminating the need for direct phone access during threatening situations</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2>TECHNICAL SKILLS</h2>
          <ul className="skills-list">
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>SQL</li>
            <li>DBMS</li>
            <li>Algorithms</li>
            <li>Web Development</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>OpenCV</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="section">
          <h2>CERTIFICATIONS</h2>
          <ul>
            <li>THE JOY OF COMPUTING WITH PYTHON (NPTEL) - SILVER+ELITE</li>
            <li>PROGRAMMING IN JAVA - SILVER+ELITE</li>
            <li>Participation in Tech Savishkaar 2.0 - Finalist</li>
          </ul>
        </section>

        {/* Languages Section */}
        <section className="section">
          <h2>LANGUAGES</h2>
          <ul className="skills-list">
            <li>English</li>
            <li>Telugu</li>
            <li>Hindi</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;