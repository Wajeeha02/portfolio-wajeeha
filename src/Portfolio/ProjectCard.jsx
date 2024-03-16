import React from "react";

export default function ProjectCard({ name, description, link, image }) {
  return (
    <div className="project-card" >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
  
    </div>
  );
}
