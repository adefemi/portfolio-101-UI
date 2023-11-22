import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogType } from "@/utils/types";

const BlogCard = ({
  data,
  hasMaxWidth = false,
}: {
  data: BlogType;
  hasMaxWidth?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", delay: 0.6 }}
      className={`w-full relative overflow-hidden rounded-2xl ${
        hasMaxWidth && "max-w-5xl"
      } h-120 md:h-84 xl:h-100 4xl:h-150`}
    >
      <img
        src={data.cover}
        alt={data.title}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="absolute z-10 bottom-0 w-full h-36 lg:h-24 bg-black bg-opacity-80 px-6 py-5 xl:px-12 xl:py-10 flex flex-col justify-around">
        <h3 className="text-lg xl:text-xl font-satoshi">
          {data.title}
        </h3>
        <a
          href={data.link}
          target="__blank"
          className="font-satoshi font-normal text-slate-400"
        >
          Read
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
