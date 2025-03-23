import * as motion from "motion/react-client";
import { ToolboxItems } from "@/components/ToolboxItems";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GitIcon from "@/assets/icons/git.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import PostmanIcon from "@/assets/icons/postman.svg";
import GCloudIcon from "@/assets/icons/google-cloud.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import { Fragment } from "react";
import Image from "next/image";

const skillsData = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "NextJs",
    iconType: NextIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Express",
    iconType: ExpressIcon,
  },
  {
    title: "Firebase",
    iconType: FirebaseIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "NodeJs",
    iconType: NodeIcon,
  },
  {
    title: "Google Cloud",
    iconType: GCloudIcon,
  },
  {
    title: "MongoDB",
    iconType: MongodbIcon,
  },
  {
    title: "MySQL",
    iconType: MysqlIcon,
  },
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4 w-full mb-10 mt-5"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl font-bold mb-5"
      >
        Skills
      </motion.h1>

      <ToolboxItems
        items={skillsData}
        className=""
        itemsWrapperClassName="animate-move-left [animation-duration:30s]"
      ></ToolboxItems>
      <ToolboxItems
        items={skillsData}
        className="mt-6"
        itemsWrapperClassName="animate-move-right [animation-duration:25s]"
      ></ToolboxItems>
    </motion.div>
  );
}

export default Skills;
