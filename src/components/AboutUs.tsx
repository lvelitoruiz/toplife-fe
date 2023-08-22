import React, { useEffect, useState } from "react";
import queryFunctions from "../utils/queryFunctions";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const AboutUs = () => {
  const [aboutInfo, setAbouInfo] = useState<any>({});

  const routeFixed = "https://top-life-backend-805c2a56b99a.herokuapp.com";

  const getInfo = async () => {
    const data = await queryFunctions("https://top-life-backend-805c2a56b99a.herokuapp.com/api/abouts");
    let dataProd = JSON.parse(data);
    // console.log(dataProd.data[0].attributes);
    setAbouInfo(dataProd.data[0].attributes);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <section className="bg-white pb-0 pt-20 lg:py-20 px-4 lg:px-[100px] lg:mt-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:w-6/12">
            <h2 className="text-[#2C261F] text-[30px] md:text-[40px] font-semibold leading-tight">
              {aboutInfo.title}
            </h2>
          </div>
          <div className="lg:w-4/12 pt-5 pb-10 lg:py-0">
            <p className="text-[#9B8F86] lg:text-end pb-2">
              {aboutInfo.description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[300px] md:h-[472px] flex items-center justify-start top-0 sticky">
        <img
          className="absolute h-[300px] md:h-[472px] w-full top-0 bottom-0 left-0 right-0 object-cover"
          src={routeFixed + aboutInfo.banner1?.data?.attributes?.url}
          alt=""
        />
        <div className="relative h-[242px] md:h-[401px] ml-[33px]">
          <img
            className="h-[242px] md:h-[401px] w-full"
            src={routeFixed + aboutInfo.banner2?.data?.attributes?.url}
            alt=""
          />
          <p className="absolute bottom-[16px] left-[30px] text-white text-base md:text-[26px] leading-tight">
            {aboutInfo.alt}
          </p>
        </div>
      </section>

      <section className="relative bg-white py-20">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-4/12">
            <img
              className="w-full object-cover h-[400px] lg:h-fit lg:min-h-[580px]"
              src={routeFixed + aboutInfo.banner3?.data?.attributes?.url}
              alt=""
            />
          </div>
          <div className="lg:w-8/12 flex items-start flex-col pt-10 lg:pt-0 px-4 lg:px-[100px]">
            <div className="pb-3">
              <h2 className="text-[#2C261F] text-[26px]">
                {aboutInfo.title2}
                {/* Acerca de <span className="font-medium">Nostros</span> */}
              </h2>
            </div>
            <div className="text-[#9B8F86] pb-5">
              <ReactMarkdown>{aboutInfo.description2}</ReactMarkdown>
              {/* <p className="pt-2 pb-3">
                Somos la alianza de dos empresas peruanas: Val Desarrollos
                Inmobiliarios e Inmobiliaria Torre Blanca.Una colaboración que
                une la experiencia en desarrollo, gestión, construcción y venta
                de proyectos de gran envergadura en Lima y provincias.
              </p>
              <a className="text-[#42B0CD] underline text-xs lg:hidden" href="">
                Ver más
              </a>
              <div className="hidden lg:block">
                <p className="pt-2 pb-3">
                  Val Desarrollo Inmobiliario, tiene 11 años de trayectoria,
                  destacándose por su habilidad en la gestión, administración y
                  venta de bancos de terrenos de manera eficiente y rentable, en
                  Lima y provincias.
                </p>
                <p className="pt-2 pb-3">
                  Por otro lado, Inmobiliaria Torre Blanca tiene 24 años en el
                  sector, en ese tiempo ha consolidado su reputación,
                  gestionando con éxito todo el proceso de sus proyectos
                  inmobiliarios en Lima Moderna.
                </p>
                <p className="pt-2 pb-3">
                  Resultado de esta alianza, TOP LIFE Juan de Aliaga se presenta
                  como una propuesta excepcional, donde cada detalle ha sido
                  cuidadosamente diseñado para brindar a nuestros clientes una
                  experiencia de vida inigualable. Conoce más de cada uno de
                  nosotros.
                </p>
              </div> */}
            </div>
            <div className="w-full">
              <p className="text-sm text-[#F09B3C] uppercase pt-2 mb-[13px]">
                {aboutInfo.more}
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <a
                  className="w-full md:w-fit border-2 border-[#42B0CD] font-medium h-[50px] text-[#42B0CD] px-16 uppercase flex items-center justify-center"
                  href=""
                >
                  <span className="pt-2">{aboutInfo.valtext}</span>
                </a>
                <a
                  className="w-full md:w-fit border-2 border-[#42B0CD] font-medium h-[50px] text-[#42B0CD] px-16 uppercase flex items-center justify-center"
                  href=""
                >
                  <span className="pt-2">{aboutInfo.torreblancatext}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F1F1F1] py-20 px-4 lg:px-[100px]">
        <div className="pb-5">
          <h2
            className="text-[#2C261F] text-[26px] leading-tight"
            dangerouslySetInnerHTML={{ __html: aboutInfo.title3 }}
          ></h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-6/12 lg:pr-10 lg:border-r lg:border-[#D9D9D9]">
            <div className="flex items-center h-[100px]">
              <img
                className="h-[46px]"
                src={routeFixed + aboutInfo.logoval?.data?.attributes?.url}
                alt=""
              />
            </div>
            <div className="text-[#9B8F86]">
              <ReactMarkdown>{aboutInfo.description3}</ReactMarkdown>
              {/* <p className="pt-2 pb-3">
                VAL DI, parte de Conexa Financial Group, es una empresa
                inmobiliaria que administra un patrimonio de más de 2,500
                hectáreas de terreno en Lima y provincias.
              </p>
              <p className="pt-2 pb-3">
                Con la ambición de expandirse en el sector inmobiliario,
                lanzamos TOP LIFE - Juan de Aliaga. Con este proyecto, queremos
                satisfacer las necesidades de vivienda sostenible, segura y con
                un gran potencial de inversión.
              </p> */}
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:pl-10">
            <div className="flex items-center h-[100px]">
              <img
                className="h-[87px]"
                src={routeFixed + aboutInfo.logotorre?.data?.attributes?.url}
                alt=""
              />
            </div>
            <div className="text-[#9B8F86]">
              <ReactMarkdown>{aboutInfo.description4}</ReactMarkdown>
              {/* <p className="pt-2 pb-3">
                Inmobiliaria Torre Blanca, ha llevado a cabo exitosamente la
                construcción de 21 edificios de departamentos en Lima.
              </p>
              <p className="pt-2 pb-3">
                Sus proyectos están en los distritos más importantes de la
                capital como Santiago de Surco, San Borja, Miraflores, San
                Isidro, Pueblo Libre y ahora lanzamos TOP LIFE Juan de Aliaga,
                en Magdalena del Mar.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 px-4 lg:px-[100px]">
        <div className="pb-5">
          <h2
            className="text-[#2C261F] text-[26px] leading-tight"
            dangerouslySetInnerHTML={{ __html: aboutInfo.title4 }}
          ></h2>
          <p className="text-[#9B8F86]">{aboutInfo.description5}</p>
        </div>
        <div className="grid grid-cols-10 md:grid-cols-12 gap-5 border-b border-[#D9D9D9] pb-20">
          {aboutInfo.perks !== undefined && aboutInfo.perks !== null
            ? aboutInfo.perks.map((perk: any, index: number) => {
                return (
                  <div
                    className="col-span-10 md:col-span-6 lg:col-span-3 pt-2 h-full"
                    key={index}
                  >
                    <div className="border-t-[4px] p-5 border-[#F1F1F1] hover:bg-[#F1F1F1] hover:border-[#42B0CD] h-full">
                      <i
                        className={`${perk.icon} text-[33px] text-[#2C261F]`}
                      ></i>
                      <p className="text-[#2C261F] font-semibold text-sm mb-2 mt-2">
                        {perk.title}
                      </p>
                      <p className="text-[#9B8F86] text-sm">{perk.text}</p>
                    </div>
                  </div>
                );
              })
            : null}
          {/* <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2 h-full">
            <div className="border-t-[4px] p-5 border-[#F1F1F1] hover:bg-[#F1F1F1] hover:border-[#42B0CD] h-full">
              <i className="icon-equipo text-[33px] text-[#2C261F]"></i>
              <p className="text-[#2C261F] font-semibold text-sm mb-2 mt-2">
                TRABAJO EN EQUIPO
              </p>
              <p className="text-[#9B8F86] text-sm">
                Nuestra alianza impulsa el trabajo en equipo, buscando
                aprovechar al máximo la experiencia de todos nuestros miembros.
              </p>
            </div>
          </div>
          <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2 h-full">
            <div className="border-t-[4px] p-5 border-[#F1F1F1] hover:bg-[#F1F1F1] hover:border-[#42B0CD] h-full">
              <i className="icon-estetica text-[33px] text-[#2C261F]"></i>
              <p className="text-[#2C261F] font-semibold text-sm mb-2 mt-2">
                ESTÉTICA
              </p>
              <p className="text-[#9B8F86] text-sm">
                Queremos un producto de calidad para nuestro clientes, por eso,
                el objetivo es lograr un diseño y estilo que cumpla las
                expectativas del mercado.
              </p>
            </div>
          </div>
          <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2 h-full">
            <div className="border-t-[4px] p-5 border-[#F1F1F1] hover:bg-[#F1F1F1] hover:border-[#42B0CD] h-full">
              <i className="icon-honestidad text-[33px] text-[#2C261F]"></i>
              <p className="text-[#2C261F] font-semibold text-sm mb-2 mt-2">
                HONESTIDAD
              </p>
              <p className="text-[#9B8F86] text-sm">
                Creemos en empresas que tienen rectitud y transparencia. Por
                eso, nos guiamos de valores de honestidad en toda nuestra
                gestión.
              </p>
            </div>
          </div>
          <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2 h-full">
            <div className="border-t-[4px] p-5 border-[#F1F1F1] hover:bg-[#F1F1F1] hover:border-[#42B0CD] h-full">
              <i className="icon-eficiencia text-[33px] text-[#2C261F]"></i>
              <p className="text-[#2C261F] font-semibold text-sm mb-2 mt-2">
                EFICIENCIA
              </p>
              <p className="text-[#9B8F86] text-sm">
                Optimizamos nuestros procesos para que el resultado ayude a un
                mejor producto para que nuestros clientes se beneficien de
                nuestra rapidez y ejecución.
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col pt-[72px]">
          <div>
            <h2
              className="text-[#2C261F] text-[26px] mb-5 leading-tight text-center lg:text-start"
              dangerouslySetInnerHTML={{ __html: aboutInfo.title5 }}
            ></h2>
          </div>
          <div className="flex items-center justify-center lg:justify-between flex-wrap gap-10">
            {aboutInfo.logos?.data?.length
              ? aboutInfo.logos?.data?.map((image: any, index: number) => {
                  return (
                    <img
                      key={index}
                      className={`h-[${image.attributes.alternativeText}px]`}
                      src={routeFixed + image.attributes.url}
                      alt=""
                      style={{ 'height': `${image.attributes.alternativeText}px`}}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
