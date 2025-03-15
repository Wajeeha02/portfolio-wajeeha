import React from "react";
import { Link } from "react-router-dom";
import hacktober from "../Images/Hactoberfest Poster.jpeg";
import leader from "../Images/Leader Poster.jpeg";
import wajeeha from "../Images/wajee.jpg";
import womenday from "../Images/Womens day post.png";
import "../Portfolio/ProjectCard.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="landing-page" data-aos="fade-up">
        <div className="main-heading" data-aos="fade-up">
          <div className="coder">
            <h1>&lt;coder&gt;</h1>
            <h2>
              Front End Developer who focus on writing clean, <br></br>
              elegant and efficient code.
            </h2>
          </div>

          <div className="main-intro">
            <h1>&lt;h1&gt; HELLO WORLD! &lt;/h1&gt;</h1>
            <h2>
              <span>&lt;h2&gt;I'M WAJEEHA USMAN.&lt;/h2&gt;</span>
            </h2>
          </div>
        </div>

        <div className="about-picture" data-aos="fade-up">
          <img src={wajeeha} alt="Wajeeha's About Picture"></img>
        </div>
      </div>

      <div className="about">
        <div className="about-content" data-aos="fade-up">
          <h1>ABOUT</h1>
          <p>
            Hey there! I'm Wajeeha, a multitasker by heart and a go-getter by
            choice. My journey started in my 3rd semester when I took my first
            step into the professional world with customer experience—a decision
            that raised eyebrows. "Why are you doing this?" they asked. But I
            believed in my ability to multitask, explore beyond boundaries, and
            grow in multiple domains. Coming from a software engineering
            background, I didn’t stop there. While handling customer
            interactions, I was also diving into coding, sharpening my skills,
            and soon stepping into the world of development. Over time, I
            specialized in React, Next.js, and modern web technologies, building
            scalable and user-friendly applications. Alongside development, I
            embraced my role as a virtual assistant, managing tasks efficiently
            and optimizing workflows. For me, it has always been simple: Follow
            your passion. Do what makes you happy. No rules, no limitations—just
            continuous learning, building, and evolving. 🚀 Let’s connect and
            collaborate—because great minds think alike!
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
          <p>
          A wide range of services including web development. With my expertise and creativity, I can bring your ideas to life and help your business stand out from the competition.
          </p>
        </div>
        <div className="right-services">
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
            <p>
              Designed a Women's Day poster for UET Taxila, celebrating female
              empowerment and achievements.
            </p>
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
            <p>
              Designed a poster to introduce the new leaders of the society.
            </p>
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
