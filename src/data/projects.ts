import { Project } from '@/types/project'

export const projects: Project[] = [
    {
        id: 1,
        title: "Forkfolio",
        description: "Forkfolio is a social platform where users can share, discover, and interact with food recipes, similar to Twitter but focused on cooking.",
        image: "/images/forkfolio.png",
        link: "https://forkfolio-connect.vercel.app/",
        technologies: ["Javascript", "MongoDB", "Express", "ReactJS", "AWS"],
        github: "https://github.com/ash413/forkfolio",
        category: "full-stack"
    },
    {
        id: 2,
        title: "TinyClip",
        description: "URL shortening service",
        image: "/images/tinyclip.png",
        link: "https://tinyclip.onrender.com/",
        technologies: ["Javascript", "MongoDB", "Express", "ReactJS"],
        github: "https://github.com/ash413/url-shortener",
        category: "full-stack"
    }
]