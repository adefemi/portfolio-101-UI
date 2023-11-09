import React from "react";
import Image from "next/image";

const BlogCard = ({ hasMaxWidth = false }: { hasMaxWidth?: boolean }) => {
  return (
    <div
      className={`w-full relative overflow-hidden rounded-2xl ${
        hasMaxWidth && "max-w-5xl"
      } h-150`}
    >
      <Image
        src="https://cdn.pixabay.com/photo/2023/09/14/19/14/landscape-8253576_1280.jpg"
        fill
        sizes="100%"
        alt="mainProject"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute z-10 bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-black/60  px-12 py-6">
        <h3 className="text-5xl">Serverless File Uploads: A Journey from Perplexity to Clarity</h3>
        <a href="/" target="__blank" className="font-satoshi font-normal">
          Read
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
