import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Monish's Portfolio</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hi, I’m Monish, a passionate developer with a deep interest in sports and athletics. My journey into web development started with a fascination for how technology can enhance fan experiences and improve the sports industry. I specialize in front-end development and enjoy building interactive, responsive websites. When I’m not coding, I’m actively involved in athletics, which keeps me motivated and focused on creating the best user experiences. I’m always eager to learn new skills and take on exciting challenges, especially in the field of sports-related technologies.
        </p>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="projects">
          <div className="project">
            <h3>UEFA Website</h3>
            <p>
              I developed a fully responsive website for UEFA, providing an engaging platform for soccer fans to access news, match schedules, and live updates. The website includes a modern, user-friendly design with sections dedicated to teams, players, and tournaments. I implemented dynamic content loading, real-time match data, and an interactive fixtures calendar.
            </p>
          </div>
          <div className="project">
            <h3>FIFA Website</h3>
            <p>
              The FIFA website I created serves as a one-stop destination for football enthusiasts, offering comprehensive details about the FIFA World Cup, including match schedules, team stats, player profiles, and historical data. The project includes features like live score updates, team comparison tools, and a media gallery showcasing tournament highlights.
            </p>
          </div>
          <div className="project">
            <h3>EURO Website</h3>
            <p>
              I designed and developed a website for the UEFA European Championship, providing an immersive experience for fans with features such as live match tracking, team rankings, and detailed player stats. The site includes interactive maps, tournament statistics, and a live feed to keep fans updated with real-time scores and news.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill">
          <label>HTML</label>
          <div className="progress-bar">
            <div className="progress html" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <label>CSS</label>
          <div className="progress-bar">
            <div className="progress css" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill">
          <label>JavaScript</label>
          <div className="progress-bar">
            <div className="progress js" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <label>React</label>
          <div className="progress-bar">
            <div className="progress react" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill">
          <label>Python</label>
          <div className="progress-bar">
            <div className="progress python" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />
          <label>Message</label>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2>Connect with Me</h2>
        <p>Email: xdrblack80@gmail.com</p>
        <p>Phone: 991784765</p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/monish">linkedin.com/in/monish</a>
        </p>
        <p>Copyright © 2024</p>
      </div>
    </footer>
  );
}

export default App;
