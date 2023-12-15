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
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 799) {
        setIsMobileMenuActive(true);
        setIsSticky(false);
      } else {
        setIsMobileMenuActive(false);
        setIsSticky(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobileMenuActive,
    isSticky,
    setIsSticky
  }
}