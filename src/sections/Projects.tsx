import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

interface Project {
  title: string;
  description: string;
  link: string;
  code: string;
  previewVideo: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "DevDetective",
    description: "This is an API based GitHub stats finder app.",
    link: "https://adi-ray.github.io/GitHub-Detective/",
    code: "https://github.com/adi-ray/GitHub-Detective",
    previewVideo: "/videos/DevDetective.mp4",
    technologies: ["JavaScript", "Node.js", "Tailwind CSS", "GitHub API"],
  },
  {
    title: "Realtime Tracking Tool",
    description:
      "This tool enables users to track their devices' location on a map in real-time using geolocation.",
    link: "https://github.com/adi-ray/RealTime-Device-Tracking",
    code: "https://github.com/adi-ray/RealTime-Device-Tracking",
    previewVideo: "/videos/Realtime Tracking.mp4",
    technologies: [
      "Leaflet",
      "Express",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Mapty",
    description: "This is a workout tracking web application.",
    link: "https://adi-ray.github.io/workout-tracking-web-app/",
    code: "https://github.com/adi-ray/workout-tracking-web-app",
    previewVideo: "/videos/Mapty.mp4",
    technologies: ["Leaflet", "HTML", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "MedLens-AI",
    description:
      "This project aims to leverage generative AI to provide detailed analysis, assisting in identifying potential health issues efficiently and accurately.",
    link: "https://medlensai.streamlit.app/",
    code: "https://github.com/adi-ray/MedLens-AI",
    previewVideo: "/videos/MedLens-AI.webm",
    technologies: ["Python", "Streamlit", "Google Gemini"],
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4 w-full mt-8"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl font-bold mb-5"
      >
        Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid md:grid-cols-2 sm:grid-cols-1 gap-4"
      >
        {projectsData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link href={project.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
