"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Angular</li>
        <li>React </li>
        <li>Node.js</li>
        <li>Javascript</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad Minuto de Dios</li>
        <li>Platzi </li>
        <li>Udemy </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Desarrollador FrontEnd Developer</li>
        <li>Uso Profesional de React Hooks</li>
        <li>Git y Github</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about image"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mí </h2>
          <p className="text-base lg:text-lg">
            💻 Soy ingeniero de sistemas apasionado por el desarrollo frontend,
            durante mi carrera, he trabajado en diversos proyectos que abarcan
            desde la creación de aplicaciones web modernas hasta la
            implementación de interfaces de usuario intuitivas.
          </p>
          <br />
          <p className="text-base lg:text-lg">
            🚀 Poseo sólidos conocimientos en JavaScript, destacando en
            frameworks como React y Angular. Mi experiencia se extiende a
            Node.js, permitiéndome crear aplicaciones frontend y backend de
            extremo a extremo.{" "}
          </p>
          <br />
          <p className="text-base lg:text-lg">
            ☕ Cuando no estoy inmerso en el mundo del código, me encanta
            disfrutar de una buena taza de café mientras escucho rock.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
