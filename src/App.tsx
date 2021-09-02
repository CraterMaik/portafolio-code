import LayoutMain from './component/layout/Main';
import Hero from './component/sections/Hero';
import ProjectMain from './component/sections/ProjectMain';
import Projects from './component/sections/Projects';
import Skills from './component/sections/Skills';
import Contact from './component/sections/Contact';
import Footer from './component/sections/Footer';

function App() {
  return (
    <LayoutMain>
      <Hero />
      <ProjectMain />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </LayoutMain>
  );
}

export default App;
