import React, { Ref, forwardRef } from "react";
import BlogCard from "../common/BlogCard";

const Blog = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className="w-full h-fill content-parent relative pt-20 md:pt-36 pb-6 overflow-y-scroll no-scrollbar"
      id="blog"
    >
      <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-20 4xl:gap-x-36 px-5 md:px-8 4xl:px-0 pb-20">
        <div className="flex flex-col items-end text-sm sm:text-base xl:text-xl lg:leading-8 mb-10 md:mb-0">
          <h3 className="text-secondary text-xl xl:text-3xl mb-4 ">Blogs</h3>
          <p className="font-satoshi font-normal max-w-lg text-justify">
            I also create blogs both in written form and as a youtube video, all
            about the tech world and how i see it. Here is my latest addition
          </p>
        </div>
        <BlogCard hasMaxWidth />
      </div>
      <div className="border-t border-white border-opacity-5 px-5 md:px-8 4xl:px-0">
        <div className="grid gap-8 md:gap-4 lg:gap-12 md:grid-cols-2 max-w-13xl mx-auto mt-8 md:mt-16">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
});

Blog.displayName = "Blog";

export default Blog;
