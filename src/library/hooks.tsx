import { useActiveSectionContext } from "../contexts/ActiveSection.context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const isMobile = window.innerWidth <= 1024;
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.1 : threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useLazyAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return {
    ref,
    inView
  }
}

export function useScreenSize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 799) {
        setIsMobile(true);
        setIsSticky(false);
      } else {
        setIsMobile(false);
        setIsSticky(true);
      }
    };

    const handleTouchMove = () => {
      setIsTooltipVisible(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("touchmove", handleTouchMove);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return {
    isMobile,
    isSticky,
    setIsSticky,
    isTooltipVisible,
    setIsTooltipVisible
  }
}