import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

import KmEmbalagens from "../../public/images/KmEmbalagens.png";
import ViaMobilidade5e17 from "../../public/images/5 e 17.jpeg";
import ViaMobilidade8e9 from "../../public/images/8 e 9.jpeg";

export const Experiences = () => {
  const t = useTranslations("Experiences");

  const experiences = [
    {
      id: 1,
      role: t("KmEmbalagens.role"),
      period: t("KmEmbalagens.period"),
      companyLogo: KmEmbalagens,
      companyName: "Km Embalagens",
    },
    {
      id: 2,
      role: t("ViaMobilidade5e17.role"),
      period: t("ViaMobilidade5e17.period"),
      companyLogo: ViaMobilidade5e17,
      companyName: "CCR Via Mobilidade - Linhas 5 e 17",
    },
    {
      id: 3,
      role: t("ViaMobilidade8e9.role"),
      period: t("ViaMobilidade8e9.period"),
      companyLogo: ViaMobilidade8e9,
      companyName: "CCR Via Mobilidade - Linhas 8 e 9",
    },
  ];

  return (
    <ul>
      {experiences.map((experience) => (
        <motion.li
          key={experience.id}
          className="professional-item group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              className="rounded-[4px] min-w-11 max-w-11"
            />
          </div>
          <div>
            <p className="font-medium text-lg text-text">{experience.role}</p>
            <p className="text-sm text-text-gray">{experience.period}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};
