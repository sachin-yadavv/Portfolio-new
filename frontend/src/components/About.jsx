import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

import { MdAnalytics } from "react-icons/md";

export default function About() {
  const tools = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "Power BI", icon: <MdAnalytics className="text-yellow-500" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-black dark:text-white" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ];

  const data = [
    {
      name: "Languages",
      icon1: "./assets/code-icon.png",
      icon2: "./assets/code-icon-dark.png",
      description: " C++, HTML, CSS, JavaScript, React Js, Next Js",
    },
    {
      name: "Education",
      icon1: "./assets/edu-icon.png",
      icon2: "./assets/edu-icon-dark.png",
      description: "B.Tech in AIML from BIT Mesra",
    },
    {
      name: "Projects",
      icon1: "./assets/project-icon.png",
      icon2: "./assets/project-icon-dark.png",
      description: "Built more than 5 projects",
    },
  ];

  return (
    <div
      id="about"
      className="w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>

      <h2 className="text-center text-4xl sm:text-5xl font-Ovo">About me</h2>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 my-16">
        {/* LEFT IMAGE SECTION */}
        <div className="max-w-max mx-auto relative">
          <img
            src="./assets/user-image.jpeg"
            alt="User"
            className="w-64 sm:w-80 rounded-3xl"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src="./assets/Gemini_Generated_Image_wbnebmwbnebmwbne.png"
              alt=""
              className="w-full animate-spin_slow rounded-full absolute top-0 left-0"
            />

            <img
              src="./assets/abc.jpeg"
              alt=""
              className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="flex-1 w-full">
          <p className="mb-10 max-w-2xl font-Ovo text-sm sm:text-base leading-7">
            I’m a Full-Stack Web Developer passionate about creating modern,
            responsive, and scalable web applications. I enjoy building seamless
            user experiences, solving real-world problems, and continuously
            exploring new technologies to improve my skills.
          </p>

          {/* CARDS */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
            {data.map((item) => (
              <li
                key={item.name}
                className="
                  border border-gray-300 dark:border-white/30
                  rounded-xl p-6
                  cursor-pointer
                  hover:bg-lightHover
                  hover:-translate-y-1
                  duration-500
                  dark:hover:bg-darkHover/50
                  transition-all 
                bg-white dark:bg-transparent
                  hover:shadow-[4px_4px_0px_#000]
                  dark:hover:shadow-[4px_4px_0px_#fff]
                "
              >
                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />

                <img
                  src={item.icon2}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm dark:text-white/80 leading-6">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* TOOLS */}
          <h4 className="my-8 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>

          <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
            {tools.map((tool) => (
              <li
                key={tool.name}
                title={tool.name}
                className="
                  flex items-center justify-center
                  w-14 h-14 sm:w-16 sm:h-16
                  border border-gray-300 dark:border-white/30
                  rounded-xl
                  cursor-pointer
                  hover:-translate-y-1
                  hover:scale-105
                  duration-300
                  bg-white/5
                  backdrop-blur-sm
                "
              >
                <div className="text-2xl sm:text-3xl">{tool.icon}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
