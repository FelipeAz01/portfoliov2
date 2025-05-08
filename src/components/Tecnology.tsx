"use client";
import Image from "next/image";
import { motion } from "motion/react";

import jsIcon from "../../public/svg/javascriptIcon.svg";
import reactIcon from "../../public/svg/reactIcon.svg";
import nextIcon from "../../public/svg/nextjsIcon.svg";
import mongoIcon from "../../public/svg/mongodb.svg";
import tailwindIcon from "../../public/svg/tailwindIcon.svg";
import typescript from "../../public/svg/typescript.svg";
import html5 from "../../public/svg/html5.svg";
import css3 from "../../public/svg/css3.svg";
import git from "../../public/svg/gitIcon.svg";
import github from "../../public/svg/githubIcon.svg";

import { useEffect, useState } from "react";

export const Tecnology = () => {
  const tecnologys = [
    { id: 1, name: "HTML 5", icon: html5 },
    { id: 2, name: "CSS 3", icon: css3 },
    { id: 3, name: "Git", icon: git },
    { id: 4, name: "GitHub", icon: github },
    { id: 5, name: "JavaScript", icon: jsIcon },
    { id: 6, name: "React", icon: reactIcon },
    { id: 7, name: "TypeScript", icon: typescript },
    { id: 8, name: "TailwindCSS", icon: tailwindIcon },
    { id: 9, name: "Next", icon: nextIcon },
    { id: 10, name: "MongoDB", icon: mongoIcon },
  ];

  const [isLightTheme, setIsLightTheme] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLightTheme(
        window.matchMedia("(prefers-color-scheme: light)").matches
      );
    }
  }, []);

  return (
    <ul className="grid grid-cols-3 grid-rows-2 min-[550px]:grid-cols-10 min-[600px]:grid-rows-1 gap-10">
      {tecnologys.map((tecnology) => (
        <motion.li
          key={tecnology.id}
          className={`cursor-pointer transition-all hover:saturate-100 ${
            isLightTheme
              ? "brightness-[0.18] saturate-0 hover:brightness-100 "
              : "saturate-0 brightness-50 hover:brightness-100"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image src={tecnology.icon} alt={tecnology.name} />
        </motion.li>
      ))}
    </ul>
  );
};
