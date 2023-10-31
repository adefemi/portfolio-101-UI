"use client";

import Header from "./common/header";
import { useEffect, useRef, useState } from "react";
import { scrollToElement } from "@/utils/helper";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Main from "./pages/Home";

export default function Home() {
  const inView = useRef<string>("home");
  const debounceTimer = useRef<any>(0);
  const isAtExperienceTop = useRef<boolean>(false);
  const isAtExperienceBottom = useRef<boolean>(false);

  const goToAbout = () => {
    scrollToElement("about");
    setView("about");
  };

  const goToExperience = () => {
    scrollToElement("experience");
    setView("experience");
  };

  const setView = (view: string) => {
    setTimeout(() => {
      inView.current = view;
    }, 1000);
  };

  const moveItem = (e: any) => {
    let scrollDirection = "";

    if (e.deltaY > 0) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    switch (inView.current) {
      case "home":
        if (scrollDirection === "down") {
          goToAbout();
        }
        break;

      case "about":
        if (scrollDirection === "up") {
          scrollToElement("home");
          setView("home");
        } else if (scrollDirection === "down") {
          goToExperience();
        }
        break;
      case "experience":
        if (scrollDirection === "up" && isAtExperienceTop.current) {
          goToAbout();
        }
        // else if (scrollDirection === "down") {
        //   scrollToElement("projects");
        //   inView.current = "projects";
        // }
        break;
      default:
        break;
    }
  };

  const handleWheel = (e: any) => {
    if (inView.current === "experience") {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const isTop = rect.top >= 0;
        const isBottom =
          experienceSection.scrollTop + experienceSection.clientHeight >=
          experienceSection.scrollHeight;
        isAtExperienceTop.current = isTop;
        isAtExperienceBottom.current = isBottom;

        if (e.deltaY < 0 && !isTop) {
          e.preventDefault();
          goToExperience();
        } else {
          if ((e.deltaY < 0 && isTop) || (e.deltaY > 0 && isBottom)) {
            e.preventDefault(); // Only prevent default if at the top/bottom of the section
          }
        }
      }
    } else {
      e.preventDefault(); // Prevent default scroll behavior in other sections
    }

    if (debounceTimer.current === 0) {
      debounceTimer.current = 1;
      moveItem(e);
      setTimeout(() => {
        debounceTimer.current = 0;
      }, 1000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main>
      <Header />
      <Main goToAbout={goToAbout} />

      <About />
      <Experience />
    </main>
  );
}
