import React from "react";
import "./Home.css";
import wajeeha from "../Images/wajeeha (2).jpg";
import "../Portfolio/ProjectCard.jsx";
import { Link } from "react-router-dom";
import womenday from '../Images/Womens day post.png'
import hacktober from '../Images/Hactoberfest Poster.jpeg'
import leader from '../Images/Leader Poster.jpeg'

export default function Home() {
  return (
    <div className="home">
      <div className="landing-page" data-aos="fade-up">
        <div className="skills">
          <div className="graphics">
            <h1>Graphic Designer</h1>
            <h2>
              I design beautifully simple things<br></br>and I love what I do.
            </h2>
          </div>
          <div className="coder">
            <h1>&lt;coder&gt;</h1>
            <h2>
              Front End Developer who focus on writing clean, <br></br>
              elegant and efficient code.
            </h2>
          </div>
        </div>
        <div className="main-heading" data-aos="fade-up">
          <h1>&lt;h1&gt; HELLO WORLD! &lt;/h1&gt;</h1>
          <h2>
            <span>&lt;h2&gt;I'M WAJEEHA USMAN.&lt;/h2&gt;</span>
          </h2>
        </div>
      </div>

      <div className="about" >
        <div className="about-picture" data-aos="fade-up">
          <img src={wajeeha} alt="Wajeeha's About Picture"></img>
        </div>
        <div className="about-content" data-aos="fade-up">
          <h1>ABOUT</h1>
          <p>
            I am currently enrolled in UET Taxila pursuing a degree in Software
            Engineering. My passion lies in graphics content and front-end web
            development, where I find joy in bringing creative ideas to life
            through code. My journey has been marked by hands-on experiences
            gained through internships, and. With a keen interest in pushing the
            boundaries of technology, I thrive on the challenges that come with
            multitasking and am committed to delivering excellence in every
            project I undertake.
          </p>
          <div class="icon-location" data-aos="fade-up">
            <i class="fas fa-map-marker-alt fa-2x"></i>
            <p>Wah, Pakistan</p>
          </div>

          <div class="icon-graduation" data-aos="fade-up">
            <i class="fas fa-graduation-cap fa-2x"></i>
            <p>Software Engineering - UET Taxila</p>
          </div>
        </div>
      </div>
      <div className="services" data-aos="fade-up">
        <div className="left-services">
          <h1>Services Offered</h1>
          <h2></h2>
          <p>
            A wide range of services including graphic design and web
            development. With my expertise and creativity, I can bring your
            ideas to life and help your business stand out from the competition.
          </p>
        </div>
        <div className="right-services">
          <div className="graphic-designing">
            <i class="fas fa-paint-brush"></i>
            <h1>Graphic Designing</h1>
            <p>
              From logo design to branding materials, I can create visually
              stunning graphics.
            </p>
          </div>
          <div className="web-development">
            <i class="fas fa-code"></i>
            <h1>Web Development</h1>
            <p>
              I can develop a custom website that meets your specific needs and
              expectations
            </p>
          </div>
        </div>
      </div>

      <div className="projects" data-aos="fade-up">
        <div className="projects-heading">
          <h1>Projects</h1>
          <h3></h3>
          <h2>Showcasing Creative Design Projects</h2>
        </div>
            {/* Project Cards */}
            <div className="project-cards" data-aos="fade-out">
          {/* Project 1 */}
          <div className="project-card">
            <img src={womenday} alt="Project 1" />
            <h3>Women's Day Poster</h3>
            <p>Designed a Women's Day poster for UET Taxila, celebrating female empowerment and achievements.</p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <img src={hacktober} alt="Project 2" />
            <h3>HactoberFest Poster</h3>
            <p>Crafted a poster for an event hosted by MLSA.</p>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <img src={leader} alt="Project 3" />
            <h3>Announcement Poster</h3>
            <p>Designed a poster to introduce the new leaders of the society.</p>
          </div>
        </div>
          <Link to="/portfolio" className="see-all-btn">
            See All
          </Link>
      </div>
      <div className="reviews"></div>
    </div>
  );
}
