import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectType } from "@/utils/types";

const ProjectCards = ({
  data,
  hasMaxWidth = false,
}: {
  data: ProjectType;
  hasMaxWidth?: boolean;
}) => {
  const formattedLink = data.link.replace("https://", "");
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", delay: 0.6 }}
      className={`w-full relative overflow-hidden rounded-2xl ${
        hasMaxWidth && "max-w-5xl"
      } h-100 md:h-84 xl:h-100 4xl:h-150`}
    >
      <img
        src={data.cover}
        alt={data.name}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="absolute z-10 bottom-0 w-full h-36 bg-black bg-opacity-80 px-6  xl:px-12 xl:py-6 flex flex-col justify-around">
        <div>
          <h3 className="text-2xl xl:text-4xl">{data.name}</h3>
          <p className="font-satoshi font-normal text-sm text-white text-opacity-80 mb-1 xl:mb-10">
            {data.description}
          </p>
        </div>
        <a
          href={data.link}
          target="__blank"
          className="font-satoshi font-normal text-sm xl:text-base"
        >
          {formattedLink}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCards;
