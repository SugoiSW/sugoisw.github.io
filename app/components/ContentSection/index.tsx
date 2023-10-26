import { CloudArrowUp, Globe, AI } from '../Icons';

export const ContentSection = () => {
  return (
    <div
      id="experiencia"
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-verde">
                Experiencia
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ¿Por qué Elegir a SugoiSW?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Elige a SugoiSW por su experiencia inigualable, soluciones de
                vanguardia y un compromiso firme para convertir tu visión en
                realidad. Aportamos innovación, calidad y servicio personalizado
                a cada proyecto, asegurando tu éxito en el mundo digital.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-[100rem] bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/img/centrales.webp"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUp
                    className="mt-1 h-5 w-5 flex-none text-azul"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Experiencia.
                    </strong>{' '}
                    Nuestro equipo de ingenieros experimentados se especializa
                    en crear soluciones de vanguardia, y personalmente me dedico
                    a garantizar el éxito de tu proyecto.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Globe
                    className="mt-1 h-5 w-5 flex-none text-verde"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Innovación.
                    </strong>{' '}
                    Mantenemos la vanguardia de las tendencias tecnológicas,
                    utilizando las últimas herramientas y técnicas para entregar
                    excelencia.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AI
                    className="mt-1 h-5 w-5 flex-none text-morado"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Personalización.
                    </strong>{' '}
                    Entendemos que cada proyecto es único. Trabajamos
                    estrechamente contigo para adaptar las soluciones a tus
                    objetivos específicos.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AI
                    className="mt-1 h-5 w-5 flex-none text-verde"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Garantía de Calidad.
                    </strong>{' '}
                    Nuestro compromiso con la calidad es inquebrantable.
                    Probamos y perfeccionamos rigurosamente nuestras soluciones
                    para cumplir con los más altos estándares.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AI
                    className="mt-1 h-5 w-5 flex-none text-azul"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Satisfacción del Cliente.
                    </strong>{' '}
                    Tu éxito es nuestro éxito. Priorizamos la comunicación
                    abierta y la colaboración para asegurar que tu proyecto
                    supere tus expectativas.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                ¿Listo para Convertir tus Ideas en Realidad?
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Contáctanos hoy para discutir tu proyecto y descubre cómo
                SugoiSW puede hacerlo realidad. Empecemos juntos en este
                emocionante viaje y transformemos tus conceptos en soluciones de
                vanguardia que dejen una huella duradera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
