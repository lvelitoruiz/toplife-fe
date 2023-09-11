import React, { useEffect, useState } from "react";
import queryFunctions from "../utils/queryFunctions";
import Asesor from "./Asesor";
import { backendUrl } from "../consts";

interface asesorProps {
    Nombre: string;
    cargo: string;
    correo: string;
    telefono: string;
    whatsapp: string;
  }

const Asesors = () => {
  const [asesores, setAsesores] = useState<any>([]);

  const getAsesores = async () => {
    const data = await queryFunctions( backendUrl + "asesors");
    let dataProd = JSON.parse(data);
    setAsesores(dataProd.data);
  };

  useEffect(() => {
    getAsesores();
  }, []);

  return (
    <section className="py-20 px-4 lg:px-[100px]">
      <div>
        <h2 className="text-[20px] md:text-[26px] text-left pb-5">
          Estamos para <span className="font-medium">Asesorarte</span>
        </h2>
        <div className="bg-white px-5">
            {
                asesores !== undefined && asesores !== null && asesores.map((item: any, index:number) => {
                    return (
                        <Asesor data={item.attributes} key={index} last={ index + 1 == asesores.length } />
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Asesors;
