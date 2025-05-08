import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

import ConvertMoney from "../../public/images/ConvertMoney.png";
import ToDoList from "../../public/images/ToDoList.png";
import devBurger from "../../public/images/devBurger.png";

export const Projects = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      id: 1,
      image: ConvertMoney,
      name: "ConvertMoney",
      desc: t("ConvertMoney"),
      tecnologys: ["HTML", "CSS", "JavaScript"],
      links: [
        "https://github.com/FelipeAz01/Projeto-Conversor-de-Moedas",
        "https://convertmoneyd.netlify.app",
      ],
    },
    {
      id: 2,
      image: ToDoList,
      name: "ToDoList",
      desc: t("ToDoList"),
      tecnologys: ["HTML", "CSS", "JavaScript"],
      links: [
        "https://github.com/FelipeAz01/To-Do-List",
        "https://taskify-list001.netlify.app/",
      ],
    },
    {
      id: 3,
      image: devBurger,
      name: "devBurger",
      desc: t("devBurger"),
      tecnologys: ["JavaScript", "React", "Axios", "JWT", "Stripe"],
      links: [
        "https://github.com/FelipeAz01/burger-dv-interface?tab=readme-ov-file",
        "",
      ],
    },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-10">
      {projects.map((project) => (
        <motion.li
          key={project.id}
          className="group border-[1px] hover:border-2 border-border hover:border-text-gray rounded-2xl w-full transition-all"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="overflow-hidden rounded-t-2xl">
            <Image
              src={project.image}
              alt={project.name}
              className="rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="px-[10px] py-5 grid gap-5">
            <h3 className="text-2xl font-medium">{project.name}</h3>
            <p className="md:text-center text-text-gray">{project.desc}</p>

            <ul className="text-text font-medium flex flex-wrap gap-5">
              {project.tecnologys.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <div className="flex flex-row flex-wrap gap-5">
              <a
                href={project.links[0]}
                className="project-btn"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl text-text"
                />
                Github
              </a>
              <a
                href={project.links[1]}
                className="project-btn"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faDisplay}
                  className="text-lg text-text"
                />
                Deploy
              </a>
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};
