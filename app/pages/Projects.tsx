import React, { Ref, forwardRef } from "react";
import ProjectCards from "../common/ProjectCards";

const Project = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className="w-full h-fill content-parent relative pt-36 pb-6 overflow-y-scroll no-scrollbar"
      id="project"
    >
      <div className="grid grid-cols-2 gap-x-36">
        <div className="flex flex-col items-end text-sm sm:text-base xl:text-xl lg:leading-8">
          <h3 className="text-secondary text-xl xl:text-3xl mb-4 ">Projects</h3>
          <p className="font-satoshi font-normal max-w-lg text-justify">
            Take a look at some of the projects I&apos;ve been working on in my
            free time; you might find them interesting.
          </p>
        </div>
        <ProjectCards hasMaxWidth />
      </div>
      <div className="mx-auto max-w-13xl mt-40">
        <h3 className="text-secondary text-xl xl:text-3xl mb-4 ">
          More notable ones
        </h3>
      </div>
      <div className="border-t border-white border-opacity-5  ">
        <div className="grid gap-12 grid-cols-2 max-w-13xl mx-auto mt-16">
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
        </div>
      </div>
    </div>
  );
});

Project.displayName = "Project";

export default Project;
