import { InitialRow } from './components/InitialRow';
import { BenefitsGrid } from './components/BenefitsGrid';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ContentSection } from './components/ContentSection';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <Nav />
      <InitialRow />
      <BenefitsGrid />
      <ProjectsGrid />
      <ContentSection />
      <Footer />
    </div>
  );
}
