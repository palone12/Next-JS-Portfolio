"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Go-Clueless Ecommerce Store",
    description:
      "Developed a full-stack eCommerce application using React, Node, MongoDB, and Express, enabling users to add and display products. Key features include",
    image: "/images/projects/ec.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/palone12/Eccomerce-Mern-Production",
    previewUrl: "https://frantic-toad-outerwear.cyclic.cloud",
  },
  {
    id: 2,
    title: "Social Media Website",
    description:
      "Developed a full-stack social media platform using React, Node.js, Express, and MongoDB with the following features:",
    image: "/images/projects/sc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/palone12/FullStack_Social",
    previewUrl: "https://sociomapp.netlify.app/",
  },
  {
    id: 3,
    title: "Cryptoverse ",
    description:
      "Created a cryptocurrency visualization app with React JS hosted on Netlify, utilizing Rapid API for data. Implemented interactive charts and a user-friendly multi-page design. Leveraged React libraries, including Material UI and Redux, to enhance functionality and displayed comprehensive cryptocurrency information and statistics",
    image: "/images/projects/cry.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/palone12/Crypto",
    previewUrl: "https://cryptoverse-pa.netlify.app",
  },
  {
    id: 4,
    title: "Covid-19 Daashboard",
    description:
      "Access the latest COVID-19 data and gain valuable insights with our easy-to-use dashboard. Stay updated on the number of cases, deaths, and recoveries across countries and regions. Make informed decisions and stay vigilant during these challenging times. Explore interactive maps, charts, and graphs to understand the spread of the virus, track key statistics, and make data-driven decisions.",
    image: "/images/projects/covid.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/palone12/CovidDashBoard",
    previewUrl: "https://coviddashboard19.netlify.app/",
  },
  {
    id: 5,
    title: "Chillax-The Movie App React JS",
    description:
      "Built a React-based movie app that allows users to search and discover movies. Leveraged external APIs to fetch movie data, implemented dynamic search functionality, and designed a user-friendly interface for viewing movie details and trailers.",
    image: "/images/projects/movie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/palone12/Chillax-The-Movie-App",
    previewUrl: "https://chiilax.netlify.app/",
  },
  {
    id: 5,
    title: "The Movie App React Native",
    description:
      "Built a React-based movie app that allows users to search and discover movies. Leveraged external APIs to fetch movie data, implemented dynamic search functionality, and designed a user-friendly interface for viewing movie details and trailers.",
    image: "/images/projects/mobile.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/palone12/React-Native-Movies-App",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
