import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

import AnhembiMorumbi from "../../public/images/Anhembi Morumbi.png";
import Uninove from "../../public/images/Uninove.png";
import DevClub from "../../public/images/DevClub.jpg";

export const Educations = () => {
  const t = useTranslations("Educations");

  const educations = [
    {
      id: 1,
      title: t("AnhembiMorumbi.title"),
      date: "04 / 2025",
      organizationLogo: AnhembiMorumbi,
      orgName: "Anhembi Morumbi",
    },
    {
      id: 2,
      title: t("Uninove.course"),
      date: "09 / 2018 - 04 / 2021",
      organizationLogo: Uninove,
      orgName: "Universidade Nove de Julho",
    },
    {
      id: 3,
      title: t("DevCLub.course"),
      date: "01 / 2024",
      organizationLogo: DevClub,
      orgName: "DevClub",
    },
  ];

  return (
    <ul>
      {educations.map((education) => (
        <motion.li
          key={education.id}
          className="professional-item group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            <Image
              src={education.organizationLogo}
              alt={education.orgName}
              className="rounded-[4px] min-w-11 max-w-11"
            />
          </div>
          <div>
            <p className="font-medium text-lg text-text">{education.title}</p>
            <p className="text-sm text-text-gray">{education.date}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};
