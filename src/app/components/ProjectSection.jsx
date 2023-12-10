"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Landing page",
    description:
      "Landing page desarrollada en React/Next.js, incorporando estilos mediante SASS y lazy load.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/santiagoMoreno73/fly-landing.git",
    previewUrl: "https://fly-landing-green.vercel.app/",
  },
  {
    id: 2,
    title: "Juego de memoria",
    description:
      "Juego de memoria interactivo en JavaScript y CSS para potenciar la agilidad mental y la diversión.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/santiagoMoreno73/game_memory.git",
    previewUrl: "https://memory-game-iota-ochre.vercel.app/",
  },
  {
    id: 3,
    title: "Simulación 3d",
    description:
      "Simulación 3D de la ciudad de Manhattan utilizando Angular 17 y Cesium.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/santiagoMoreno73/manhattan-3d.git",
    previewUrl: "https://manhattan-3d.vercel.app/",
  },
  {
    id: 4,
    title: "Weibook App",
    description:
      "Colaboré en el desarrollo de la aplicación utilizando Ionic, contribuyendo al diseño.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "https://weibook.co/benefits/agenda",
  },
  {
    id: 5,
    title: "Aplicación web",
    description:
      "Colaboré en el desarrollo de la aplicación web utilizando React.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.geoaitech.com/",
  },
  {
    id: 6,
    title: "API REST",
    description:
      "Api desarrollada en node.js con express, donde se maneja CRUD y autenticación.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/santiagoMoreno73/API_CACAO.git",
    previewUrl: "",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Mobile"
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
            transition={{ duration: 0.2, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              iconUrl={project.icon}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
