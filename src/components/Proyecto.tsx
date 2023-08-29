import React, { useEffect, useState } from "react";
import Cercado from "../images/caercadeproyectos.png";
import Nomena from "../images/logo-nomena.png";
import queryFunctions from "../utils/queryFunctions";

const Project = () => {
  const [proyectoData, setProyecto] = useState<any>(null);
  const [datos, setDatos] = useState<any>(null);

  const getProyecto = async () => {
    const data = await queryFunctions(
      "https://top-life-backend-805c2a56b99a.herokuapp.com/api/proyectos"
    );
    let dataProd = JSON.parse(data);
    setProyecto(dataProd);
  };

  useEffect(() => {
    getProyecto();
  }, []);

  useEffect(() => {
    if (proyectoData !== undefined && proyectoData !== null) {
      setDatos(proyectoData.data[0].attributes);
    }
  }, [proyectoData]);

  return (
    <section className="bg-white pb-0 pt-20 lg:py-20">
      {datos !== undefined && datos !== null ? (
        <div className="flex flex-col-reverse lg:flex-row lg:items-center">
          <div className="lg:w-6/12">
            <img
              className="w-full object-cover"
              src={datos.fotoproyecto.data[0].attributes.url}
              alt=""
            />
          </div>
          <div className="lg:w-6/12 flex items-start flex-col px-4 lg:px-[100px]">
            <div className="pb-3">
              <p className="text-[#F09B3C] uppercase pt-2">{datos.subtitle}</p>
              <h2 className="text-[#2C261F] text-[26px]">{datos.title}</h2>
            </div>
            <div className="text-[#9B8F86] pb-5">
              <p className="pt-2 pb-3">{datos.description}</p>
              <a className="text-[#42B0CD] underline text-xs lg:hidden" href="">
                Ver más
              </a>
              <div className="hidden lg:block">
                <p className="pt-2 pb-3">{datos.description2}</p>
                <p className="pt-2 pb-3">{datos.description3}</p>
              </div>
            </div>
            <a
              className="w-full md:w-fit font-medium h-[50px] bg-[#42B0CD] text-white px-16 uppercase flex items-center shadow-[0_10px_20px_0_rgba(66,176,205,0.20)]"
              href={datos.file.data[0].attributes.url}
              target="_blank"
            >
              <span className="pt-2">{datos.button}</span>
            </a>
            <div className="border-t border-[#D9D9D9] pt-5 mt-10 w-full mb-10 lg:mb-0">
              <p className="text-sm text-[#2C261F] pt-2">Diseñado por:</p>
              <div className="flex items-center gap-10 mt-4">
                <img className="h-[20px]" src={Nomena} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Project;
