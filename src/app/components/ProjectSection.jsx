import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "React",
        description: "Project 1 description",
        image: "/images/projects/",
        tag: ["All", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Angular",
        description: "Project 1 description",
        image: "/images/projects/",
        tag: ["All", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "React",
        description: "Project 1 description",
        image: "/images/projects/",
        tag: ["All", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "React",
        description: "Project 1 description",
        image: "/images/projects/",
        tag: ["All", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "React",
        description: "Project 1 description",
        image: "/images/projects/",
        tag: ["All", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "React",
        description: "Project 1 description",
        image: "/images/projects/",
        tag: ["All", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 7,
        title: "React",
        description: "Project 1 description",
        image: "/images/projects/",
        tag: ["All", "web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectSection = () => {
  return (
    <div>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'> 
            My Projects 
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
            <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>Web</button>
            <button>Mobile</button>
        </div>
        <div>
            { 
                projectsData.map(({id, title, description, image, gitUrl, previewUrl}) => (
                    <ProjectCard 
                        key={id}
                        title={title}
                        description={description}
                        imageUrl={image}
                        gitUrl={gitUrl}
                        previewUrl={previewUrl}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ProjectSection