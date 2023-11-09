import React, { Ref, forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = forwardRef((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className="w-full min-h-fill content-parent relative"
      id="about"
    >
      <motion.div
        className="absolute right-0 md:top-32 bottom-0 h-2/4 md:h-minus-32 w-full max-w-4xl 4xl:max-w-10xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <Image src="/assets/me.png" alt="me" fill sizes="100%" priority />
      </motion.div>

      <div className="max-w-2xl h-fill md:h-auto px-5 sm:px-10 xl:px-0 mx-auto xl:mx-0 xl:ml-32 4xl:ml-130 bg-black bg-opacity-70 xl:bg-opacity-0 pt-10 sm:pt-20 md:pt-32 pb-8 xl:pb-0 4xl:pt-72 lg:text-justify text-sm sm:text-base xl:text-xl lg:leading-8 relative z-10">
        <h3 className="text-secondary text-right text-xl xl:text-3xl mb-4 lg:mb-8">
          About Me
        </h3>
        <p className="mb-6 font-satoshi font-normal">
          From a young age, I have been captivated by the intricate workings of
          computers - their remarkable speed, precision, and the convenience
          they bring to our lives. This fascination with technology ignited a
          desire within me to create innovative, functional, and efficient
          solutions. This passion drove me to pursue a degree in Computer
          Science, which served as a launchpad for my journey in the world of
          technology.
        </p>
        <p className="mb-6 font-satoshi font-normal">
          My ultimate goal is to develop groundbreaking, user-centric
          technologies that have the potential to transform our world. I am
          enthusiastic about joining forces with like-minded individuals,
          forward-thinking organisations, and collaborative associations to make
          these game-changing innovations a reality.
        </p>

        <div>
          <h3 className="text-secondary text-2xl mt-5 lg:mt-10 xl:mt-24">
            Say Hello
          </h3>
          <a href="mailto:oseni.adefemigreat@gmail.com">
            oseni.adefemigreat@gmail.com
          </a>

          <h3 className="text-secondary text-2xl mt-4 lg:mt-8 xl:mt-16">
            Connect
          </h3>
          <div className="flex items-center mt-4">
            <a
              href="https://www.linkedin.com/in/adefemi-oseni/"
              target="__blank"
              className="mr-7"
            >
              <Image
                src="/assets/linkedin.png"
                width={20}
                height={20}
                alt="linkedin"
                className=" w-7 xl:w-10"
              />
            </a>
            <a
              href="https://x.com/greatadefemi"
              target="__blank"
              className="mr-7"
            >
              <Image
                src="/assets/x.png"
                width={20}
                height={20}
                alt="linkedin"
                className="w-6 xl:w-8"
              />
            </a>
            <a
              href="https://github.com/adefemi"
              target="__blank"
              className="mr-5"
            >
              <Image
                src="/assets/github.png"
                width={20}
                height={20}
                alt="linkedin"
                className="w-7 xl:w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
