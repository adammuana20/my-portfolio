import { TypeAnimation } from "react-type-animation";

import avatar from "../../assets/images/avatar.png";
import avatarContainer from "../../assets/images/avatar-container.png";

import "./Introduction.styles.scss";
import { useLazyAnimation, useSectionInView } from "../../library/hooks";
import { useTheme } from "../../contexts/Theme.context";

const Introduction = () => {
  const { ref: refSection } = useSectionInView("Home");
  const { ref: refAnimation, inView } = useLazyAnimation();

  const { theme } = useTheme();

  return (
    <section
      className={`introduction-container ${
        theme === "dark" ? "dark-intro" : ""
      }`}
      id="home"
      ref={refSection}
    >
      <div className={`information ${inView ? "show" : ""}`} ref={refAnimation}>
        <div className="text">
          <h2>Hello, I'm</h2>
          <h1 className="glitch" data-text="Adam Muaña">
            Adam Muaña <span className="wave">👋</span>
          </h1>
        </div>
        <TypeAnimation
          sequence={[
            "React Developer",
            1000,
            "Next.JS Developer",
            1000,
            "Fullstack Developer",
            1000,
            "Frontend Developer",
            1000,
            "Online Gamer 😃",
            1000,
          ]}
          wrapper="div"
          speed={50}
          style={{
            fontSize: "clamp(1.8rem, 2vw, 3rem)",
            display: "block",
            textAlign: "center",
          }}
          repeat={Infinity}
        />
      </div>
      <div
        className={`avatar-container ${inView ? "show" : ""}`}
        ref={refAnimation}
      >
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="rotating-img-container">
          <img src={avatarContainer} alt="Sample" className="rotating" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
