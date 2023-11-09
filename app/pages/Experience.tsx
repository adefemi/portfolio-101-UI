import React, { Ref, forwardRef } from "react";
import Image from "next/image";

const Experience = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div
    ref={ref}
    {...props}
      className="w-full min-h-fill content-parent relative pt-20 md:pt-32 4xl:pt-44"
      id="experience"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h3 className="text-secondary text-xl lg:text-3xl mb-4 lg:mb-8 px-8">
          Work History
        </h3>
      </div>
      <div className="">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </div>
  );
});

Experience.displayName = "Experience";

const ExperienceItem = () => {
  return (
    <div className="border-0 border-t border-white border-opacity-5 pb-16 4xl:pb-24">
      <div className="w-full max-w-4xl mx-auto flex pt-6 lg:pt-12 px-8">
        <div className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-orange p-1 flex items-center justify-center rounded-full">
          <Image
            src="/assets/me.png"
            alt="logo"
            width={20}
            height={20}
            className="w-full rounded-full"
          />
        </div>
        <div className="flex-1 pl-3 lg:pl-6">
          <div className="flex items-center justify-between md:mt-2">
            <div>
              <div className="text-base lg:text-2xl">
                Senior Software Engineer
              </div>
              <div className="text-sm lg:text-lg text-secondary font-normal">
                Bleachers Report
              </div>
            </div>
            <div className="text-xs lg:text-base text-secondary font-normal">
              <div>Jun 2021</div>
              <div>Present</div>
            </div>
          </div>
          <div className="md:block hidden">
            <Content info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam." />
          </div>
        </div>
      </div>
      <div className="md:hidden block w-full max-w-4xl mx-auto px-8">
        <Content info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam." />
      </div>
    </div>
  );
};

const Content = ({ info }: { info: string }) => (
  <p className="mt-7 text-sm lg:text-base leading-8 lg:leading-10 font-satoshi font-normal">
    {info}
  </p>
);

export default Experience;
