import { DevicePhone, Globe, AI, Camera } from '../Icons';

const features = [
  {
    name: 'Desarrollo de Aplicaciones Móviles',
    description:
      'Nos especializamos en la creación de aplicaciones móviles intuitivas y ricas en funciones para diversas plataformas, dando vida a tus ideas en teléfonos inteligentes y tabletas.',
    icon: DevicePhone,
  },
  {
    name: 'Desarrollo Web',
    description:
      'Nuestro equipo de desarrollo web diseña y construye sitios web y aplicaciones web atractivos y fáciles de usar que cautivan a tu audiencia en línea.',
    icon: Globe,
  },
  {
    name: 'Soluciones de Visión por Computadora',
    description:
      'Experimenta el futuro de la inteligencia artificial con nuestras soluciones de visión por computadora. Creamos aplicaciones que pueden reconocer, analizar e interpretar datos visuales, permitiendo casos de uso innovadores.',
    icon: Camera,
  },
  {
    name: 'Soluciones de Inteligencia Artificial',
    description:
      'Aprovecha el poder de la inteligencia artificial con nuestras soluciones de IA. Desarrollamos aplicaciones inteligentes que pueden automatizar tareas, tomar decisiones basadas en datos y ofrecer información valiosa.',
    icon: AI,
  },
];

export const BenefitsGrid = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Servicios
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Innovación. Integración. Impacto.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Potencia tu Viaje Digital con SugoiSW. Desde aplicaciones móviles
            hasta soluciones web, visión por computadora y IA, transformamos
            ideas en realidades digitales innovadoras, ayudando a que tu negocio
            prospere.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
