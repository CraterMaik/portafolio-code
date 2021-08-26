import LayoutMain from './component/layout/Main';
import Hero from './component/sections/Hero';
import ProjectMain from './component/sections/ProjectMain';
import Projects from './component/sections/Projects';
import Footer from './component/sections/Footer';

function App() {
  return (
    <LayoutMain>
      <Hero />
      <ProjectMain />
      <Projects />
      <Footer />
    </LayoutMain>
  );
}

export default App;
