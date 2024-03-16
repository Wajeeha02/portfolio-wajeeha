import React from "react";
import "./AboutMe.css";
import wajeeha from "../Images/wajeeha (2).jpg";
import graphics from "../Images/graphics.png";
import customerSupport from "../Images/customer support.jpg";
import codeImg from "../Images/code.png";
import what from "../Images/what.png";
import DownloadButton from "./Download.jsx";
function AboutMe() {
  return (
    <div className="about-me" data-aos="fade-up">
      <div className="about-heading">
        <h1>ABOUT ME!</h1>
        <div className="line">
          <p></p>
        </div>
      </div>
      <div className="about-info">
        <div className="about-picture">
          <img src={wajeeha} alt="Wajeeha's About Picture"></img>
        </div>
        <div className="about-content">
          <p>
            Welcome to my portfolio! I'm thrilled to share my journey as an
            undergraduate software engineer with a passion for creativity and a
            focus on front-end development. My name is Wajeeha Usman, and I
            specialize in graphic design tools such as Adobe Illustrator and
            Photoshop, as well as video editing using CapCut. Let me give you a
            glimpse into my world.
          </p>
          <div class="icon-location">
            <i class="fas fa-map-marker-alt fa-2x"></i>
            <p>Wah, Pakistan</p>
          </div>

          <div class="icon-graduation">
            <i class="fas fa-graduation-cap fa-2x"></i>
            <p>Software Engineering - UET Taxila</p>
          </div>
        </div>
      </div>
      <div className="about2" data-aos="fade-up">
        <div className="about2-content">
          <p>
            From a young age, I've been captivated by the world of graphic
            design. My proficiency in tools like Adobe Illustrator and Photoshop
            allows me to bring imagination to life, turning concepts into
            visually stunning creations. Whether it's crafting logos,
            illustrations, or other graphical elements, I take pride in
            delivering designs that not only meet but exceed expectations.
          </p>
        </div>
        <div className="about2-picture">
          <img src={graphics} alt="graphics picture"></img>
        </div>
      </div>
      <div className="about3" data-aos="fade-up">
        <div className="about3-picture">
          <img src={customerSupport} alt="customer-support"></img>
        </div>
        <div className="about3-content">
          <p>
            Customer Support Specialist with International Experience:<br></br>
            In addition to my roles as a software engineer and graphic designer,
            I have nearly one year of enriching experience as a Customer Support
            Specialist with the esteemed German company, Razor Group. This
            experience has allowed me to hone crucial skills in communication,
            time management, and problem-solving.
          </p>
        </div>
      </div>
      <div className="about4"data-aos="fade-up">
        <div className="about4-content">
          <p>
            Front-End Developer Extraordinaire:<br></br>In the realm of software
            engineering, my focus lies in front-end development, particularly in
            React projects. Crafting seamless and user-friendly interfaces is
            where I thrive. I believe that the user experience is paramount, and
            my coding skills are dedicated to ensuring that every click and
            interaction is intuitive and enjoyable.
          </p>
        </div>
        <div className="about4-picture">
          <img src={codeImg} alt="front-end code"></img>
        </div>
      </div>
      <div className="about5" data-aos="fade-up">
        <div className="about5-picture">
          <img src={what} alt="What I do?"></img>
        </div>
        <div className="about5-content">
          <p>
            Why I Do What I Do: <br></br>What drives me is the intersection of
            technology and creativity. The ability to blend the logical
            precision of coding with the artistic flair of design fuels my
            passion. I am on a continuous journey of growth, learning, and
            pushing boundaries to stay at the forefront of both the design and
            development worlds.
          </p>
        </div>
      </div>
      <div className="connect" data-aos="fade-up">
        <h1>
          LET'S <span>CONNECT!</span>
        </h1>
        <p>
          I'm always excited to collaborate on new projects, whether it's
          bringing a design vision to life or developing innovative front-end
          solutions. If you're looking for a creative and technically adept
          individual to join your team or contribute to a project, I'd love to
          connect. Feel free to explore my portfolio and reach out for any
          inquiries or collaborations.
        </p>
        <DownloadButton/>
      </div>
    </div>
  );
}
export default AboutMe;
