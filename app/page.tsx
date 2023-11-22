"use client";

import Header from "./common/header";
import { useEffect, useRef } from "react";
import { scrollToElement } from "@/utils/helper";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Main from "./pages/Home";
import Project from "./pages/Projects";
import Blog from "./pages/Blogs";
import Contact from "./pages/Contact";

export default function Home() {
  const currentSectionIndex = useRef(0);
  const isScrolling = useRef(false);
  const touchStartRef = useRef(0);
  const sectionCanScroll = useRef(false);
  const eventActive = useRef(false);
  const sections = [
    "home",
    "experience",
    "about",
    "project",
    "contact",
    "blog",
  ];

  const handleSectionalScroll = (direction: number) => {
    const section = document.getElementById(
      sections[currentSectionIndex.current]
    );
    if (!section) return false;
    const atTop = section.scrollTop === 0;
    const atBottom =
      section.scrollHeight <= section.scrollTop + section.clientHeight;

    if (atTop) {
      if (direction === -1 && currentSectionIndex.current > 0) {
        gotoIndex(currentSectionIndex.current - 1);
        return;
      }
    }
    if (atBottom) {
      if (
        direction === 1 &&
        currentSectionIndex.current < sections.length - 1
      ) {
        gotoIndex(currentSectionIndex.current + 1);
        return;
      }
    }
    isScrolling.current = true;
    section.scrollTo({
      top: section.scrollTop + direction * (section.clientHeight / 2),
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const defaultScroll = (direction: number) => {
    if (!sectionCanScroll.current) {
      const nextSectionIndex = currentSectionIndex.current + direction;
      if (nextSectionIndex < 0 || nextSectionIndex > sections.length - 1)
        return;
      gotoIndex(nextSectionIndex);
      return;
    } else {
      handleSectionalScroll(direction);
    }
  };

  const handleWheel = (e: any) => {
    e.preventDefault();

    if (isScrolling.current) return;
    console.log("wheel move");
    const direction = e.deltaY > 0 ? 1 : -1;

    defaultScroll(direction);
  };

  const handleTouchStart = (e: any) => {
    touchStartRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: any) => {
    e.preventDefault();
    if (isScrolling.current) return;
    const touchEnd = e.changedTouches[0].clientY;
    const touchStart = touchStartRef.current;

    const direction = touchStart > touchEnd ? 1 : -1;
    defaultScroll(direction);
  };

  const handleHashChange = (hash: string) => {
    const index = sections.indexOf(hash);
    currentSectionIndex.current = index;
    sectionCanScroll.current = checkIfSectionCanScroll(index);
  };

  const getHashIndex = () => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return null;
    const index = sections.indexOf(hash);
    if (index === -1) {
      // clear hash
      window.location.hash = "";
      return null;
    }
    return index;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    gotoIndex(getHashIndex() || currentSectionIndex.current);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const checkIfSectionCanScroll = (index: number) => {
    const section = document.getElementById(sections[index]);
    if (!section) return false;
    const { scrollHeight, clientHeight } = section;
    return scrollHeight > clientHeight;
  };

  const gotoIndex = (index: number) => {
    isScrolling.current = true;
    scrollToElement(sections[index]);
    currentSectionIndex.current = index;
    sectionCanScroll.current = checkIfSectionCanScroll(index);
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  return (
    <main>
      <Header handleHashChange={handleHashChange} />
      <Main goToAbout={() => gotoIndex(1)} />
      <Experience />
      <About />
      <Project />
      <Contact />
      <Blog />
    </main>
  );
}
