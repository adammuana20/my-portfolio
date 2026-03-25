import { lazy, Suspense } from "react";
import { ToastContainer, Bounce } from "react-toastify";

import Layout from "../routes/layout/Layout.component";

// import AboutMe from "../components/about-me/AboutMe.component";
// import Introduction from "../components/introduction/Introduction.component";
// import Skills from "../components/skills/Skills.component";
import { ScrollProgress } from "../components/scroll-progress/ScrollProgress.component";
// import Projects from "../components/projects/Projects.component";
// import Contact from "../components/contact/Contact.component";
import Footer from "../components/footer/Footer.component";
import ThemeSwitch from "../components/theme-switch/ThemeSwitch.component";

import { useTheme } from "../contexts/Theme.context";

const LazyIntroduction = lazy(
  () => import("../components/introduction/Introduction.component")
);
const LazyAboutMe = lazy(
  () => import("../components/about-me/AboutMe.component")
);
const LazySkills = lazy(() => import("../components/skills/Skills.component"));
const LazyProjects = lazy(
  () => import("../components/projects/Projects.component")
);
const LazyContact = lazy(
  () => import("../components/contact/Contact.component")
);

import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/spinner/Spinner.component";

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
      </header>
      <main>
        <Suspense fallback={<Spinner />}>
          <LazyIntroduction />
          <LazyAboutMe />
          <LazySkills />
          <LazyProjects />
          <LazyContact />
        </Suspense>
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
