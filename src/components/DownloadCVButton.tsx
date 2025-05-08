"use client";
import { motion } from "motion/react";
import { useParams } from "next/navigation";

export const DownloadCVButton = () => {
  const { locale } = useParams();
  const cvPath =
    locale === "en"
      ? "/Felipe Lemos de Azevedo Donda - Curriculum-en.pdf"
      : "/Felipe Lemos de Azevedo Donda - Curriculo-pt.pdf";

  return (
    <motion.a
      href={cvPath}
      download
      className="btn"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Download CV
    </motion.a>
  );
};
