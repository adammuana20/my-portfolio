import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import './ScrollProgress.styles.scss'

interface ScrollProgressProps {
  position: "left" | "center" | "right";
  color: string;
  height: number;
  smoothness: boolean;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  position,
  color,
  height,
  smoothness,
}) => {
  const { scrollYProgress } = useScroll();
  const [barPosition, setBarPosition] = useState<string>(position);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (position === "left") {
      setBarPosition("0%");
    } else if (position === "center") {
      setBarPosition("50%");
    } else if (position === "right") {
      setBarPosition("100%");
    }
  }, [position]);

  const barAnimation = smoothness
    ? { scaleX: scaleX }
    : { scaleX: scrollYProgress };

  return (
    <motion.div
      className='progress'
      style={{
        ...barAnimation,
        height: height,
        backgroundColor: `${color}`,
        originX: barPosition,
      }}
    />
  );
};
