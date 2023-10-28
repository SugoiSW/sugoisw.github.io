import { InitialRow } from './components/InitialRow';
import { BenefitsGrid } from './components/BenefitsGrid';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ContentSection } from './components/ContentSection';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

export const metadata = {
  title: 'SugoiSW Soluciones',
  description:
    'Sugoisw es tu socio de confianza para soluciones de software de vanguardia. Nos especializamos en Desarrollo Móvil, Desarrollo Web, Visión por Computadora e Inteligencia Artificial, ofreciendo servicios innovadores y personalizados para ayudar a tu negocio a prosperar. Explora nuestra experiencia y déjanos llevar tu viaje digital al siguiente nivel',
  keywords:
    'Consulting, Software, Mobile Development, Web Development, Computer Vision, AI',
  creator: 'SugoiSW',
  authors: [{ name: 'bernardo' }],
  publisher: 'SugoiSW',
  openGraph: {
    title: 'SugoiSW',
    description:
      'Sugoisw es tu socio de confianza para soluciones de software de vanguardia. Nos especializamos en Desarrollo Móvil, Desarrollo Web, Visión por Computadora e Inteligencia Artificial, ofreciendo servicios innovadores y personalizados para ayudar a tu negocio a prosperar. Explora nuestra experiencia y déjanos llevar tu viaje digital al siguiente nivel',
    url: 'https://sugoisw.github.io/',
    siteName: 'SugoiSW',
    images: [
      {
        url: 'https://sugoisw.github.io/img/logo.png',
        width: 612,
        height: 612,
        alt: 'SugoiSW solutions',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

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
