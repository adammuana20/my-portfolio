import Layout from "../routes/layout/Layout.component"
import AboutMe from "../components/about-me/AboutMe.component"
import Introduction from "../components/introduction/Introduction.component"
import Skills from "../components/skills/Skills.component"
import { ScrollProgress } from "../components/scroll-progress/ScrollProgress.component"
import Projects from "../components/projects/Projects.component"


const Home = () => {
  return (
    <Layout>
      <header className="header-container">
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
      </main>
    </Layout>
  )
}

export default Home