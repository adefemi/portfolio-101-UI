import React from "react";
import Image from "next/image";

const ProjectCards = ({ hasMaxWidth = false }: { hasMaxWidth?: boolean }) => {
  return (
    <div
      className={`w-full relative overflow-hidden rounded-2xl ${
        hasMaxWidth && "max-w-5xl"
      } h-100 md:h-84 xl:h-100 4xl:h-150`}
    >
      <Image
        src="https://cdn.pixabay.com/photo/2023/09/14/19/14/landscape-8253576_1280.jpg"
        fill
        sizes="100%"
        alt="mainProject"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute z-10 bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-black/60 px-6  xl:px-12 xl:py-6">
        <h3 className="text-2xl xl:text-5xl">Djuix.io</h3>
        <p className="font-satoshi font-normal text-sm xl:text-lg text-white text-opacity-80 mb-1 xl:mb-10">
          Djuix is all about making APIs creation with django smooth and faster
        </p>
        <a href="/" target="__blank" className="font-satoshi font-normal text-sm xl:text-base">
          www.djuix.io
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;
