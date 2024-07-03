import { ToastContainer, Bounce } from "react-toastify";

import Layout from "../routes/layout/Layout.component";
import AboutMe from "../components/about-me/AboutMe.component";
import Introduction from "../components/introduction/Introduction.component";
import Skills from "../components/skills/Skills.component";
import { ScrollProgress } from "../components/scroll-progress/ScrollProgress.component";
import Projects from "../components/projects/Projects.component";
import Contact from "../components/contact/Contact.component";
import Footer from "../components/footer/Footer.component";
import ThemeSwitch from "../components/theme-switch/ThemeSwitch.component";

import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../contexts/Theme.context";

const Home = () => {
  const { theme } = useTheme();
  return (
    <Layout>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
      <ThemeSwitch />
      <header>
        <ScrollProgress
          position={"left"}
          color={"#78CCE2"}
          height={10}
          smoothness={true}
        />
        <Introduction />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
