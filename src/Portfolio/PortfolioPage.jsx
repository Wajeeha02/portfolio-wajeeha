import React from "react";
import ProjectCard from "./ProjectCard";
import "./Portfolio.css";
import logonew from '../Images/logonew.jpg'
import finalLogo from '../Images/FINAL LOGO-01.png'
import womenday from '../Images/Womens day post.png'
import kalmak from '../Images/Kalmak Illustration.jpeg'
import pakistan from '../Images/Pakistan Day.jpeg'
import promotion from '../Images/Promotional Poster.jpeg'
import hacktober from '../Images/Hactoberfest Poster.jpeg'
import leader from '../Images/Leader Poster.jpeg'
import mlsa from '../Images/MLSA Posters-02.png'
export default function PortfolioPage() {
  const projects = [
    {
      image: logonew,
      name: "Secure Scope",
      description: "Secure scope was a team project of Google Developer Solution Challenge.",
      link: "https://example.com/project1",
     
    },
    
    {
      name: "Announcement Poster",
      description: "Designed a poster to introduce the new leaders of the society.",
     
      image: leader
    },
    {
      name: "Logo",
      description: "I created a logo for a furniture company using Illustrator.",
    
      image: finalLogo 
    },
    {
      name: "Womens Day Poster",
      description: "Designed a Women's Day poster for UET Taxila, celebrating female empowerment and achievements.",
    
      image: womenday 
    },
    {
      name: "KALMAK Illustration",
      description: "Developed a Kalmak illustration during my startup internship for the purpose of branding.",
    
      image:kalmak
    }
    ,
    {
      name: "MLSA Alpha Posters",
      description: "Developed a poster to introduce new Microsoft Learn Student Ambassadors.",
    
      image:mlsa
    }
    ,
    {
      name: "Pakistan Day Poster",
      description: "Designed a Pakistan Day poster for a competition.",
    
      image:pakistan
    }
    ,
    {
      name: "Promotional Poster",
      description: "This poster was created to promote the event.",
     
      image:promotion
    }
    ,
    {
      name: "HacktoberFest Poster",
      description: "Crafted a poster for an event hosted by MLSA.",
 
      image:hacktober
    }
  ];

  return (
    <div>
      <div className="portfolio-heading">
        <h1>Portfolio Projects</h1>
        <h2></h2>
        <h3>Showcasing creative design projects</h3>
       
      </div>
      <div className="cards" data-aos="fade-up">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            link={project.link}
           
          />
        ))}
      </div>
    </div>
  );
}
