import React, { useEffect, useState } from "react";

interface asesorProps {
  Nombre: string;
  cargo: string;
  correo: string;
  telefono: string;
  whatsapp: string;
}

const Asesor = (data: any, last?: boolean) => {
  return (
    <div
      className={`grid grid-cols-10 md:grid-cols-12 gap-5 py-6 ${
        !data.last ? "border-b border-[#D9D9D9]" : ""
      } items-center`}
    >
      <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2">
        <div className="flex items-center">
          <img src="" alt="" />
          <div>
            <p className="text-[#2C261F] font-medium">{data.data.Nombre}</p>
            <p className="text-[#2C261F] text-sm">{data.data.cargo}</p>
          </div>
        </div>
      </div>
      <div className="col-span-10 md:col-span-6 lg:col-span-3">
        <a className="flex items-center gap-4" href="">
          <i className="icon-phone text-[#42B0CD] text-[26px]"></i>
          <p className="text-[#2C261F] text-sm pt-2">{data.data.telefono}</p>
        </a>
      </div>
      <div className="col-span-10 md:col-span-6 lg:col-span-3">
        <a className="flex items-center gap-4" href="">
          <i className="icon-mail text-[#42B0CD] text-[26px]"></i>
          <p className="text-[#2C261F] text-sm pt-2">{data.data.correo}</p>
        </a>
      </div>
      <div className="col-span-10 md:col-span-6 lg:col-span-3">
        <a className="flex items-center gap-4" href="">
          <i className="icon-wsp text-[#42B0CD] text-[26px]"></i>
          <p className="text-[#2C261F] text-sm pt-2">{data.data.whatsapp}</p>
        </a>
      </div>
    </div>
  );
};

export default Asesor;
