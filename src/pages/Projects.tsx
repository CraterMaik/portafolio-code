
import LayoutMain from '../component/layout/Main';
import ProjectMain from '../component/sections/ProjectMain';
import Projects from '../component/sections/Projects';
import Footer from '../component/sections/Footer';

export default function PageProjects() {
  return (
    <LayoutMain>
      <ProjectMain />
      <Projects />
      <Footer />
    </LayoutMain>
  )
}