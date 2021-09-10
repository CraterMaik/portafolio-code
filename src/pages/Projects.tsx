
import LayoutMain from '../component/layout/Main';
import ProjectMain from '../component/sections/ProjectMain';
import ProjectsFull from '../component/sections/ProjectsFull';
import Footer from '../component/sections/Footer';

export default function PageProjects() {
  return (
    <LayoutMain>
      <ProjectMain />
      <ProjectsFull />
      <Footer />
    </LayoutMain>
  )
}