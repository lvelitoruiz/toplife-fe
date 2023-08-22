import React, { useState } from "react";

import ViewSingular from "./ViewSingular";
import ViewGallery from "./ViewGallery";

const Galleries = () => {
  const  [activeTab,setActiveTab] = useState(true)

  return (
    <section className="bg-[#2C261F] py-20">
      <div id="myTabs" className="overflow-hidden">
        <div className="px-4 lg:px-[100px] flex items-center justify-between flex-col lg:flex-row gap-5 mb-10">
          <h2 className="text-[20px] md:text-[26px] text-white">
            <span className="font-medium">Ambientes</span> ideales para ti
          </h2>
          <div className="flex items-center w-full md:w-[400px] bg-[#0000002b]">
            <button
              className={`tab-button ${ activeTab ? "active" : "" } font-medium w-full h-[65px] flex items-center justify-center`}
              onClick={ () => setActiveTab(true) }
            >
              <span className="pt-3">INTERIORES 360°</span>
            </button>
            <button
              className={`tab-button ${ !activeTab ? "active" : "" } font-medium w-full h-[65px] flex items-center justify-center`}
              onClick={ () => setActiveTab(false) }
            >
              <span className="pt-3">ÁREAS COMUNES</span>
            </button>
          </div>
        </div>
        <ViewSingular activeTab={activeTab} />
        <ViewGallery activeTab={!activeTab} />
      </div>
    </section>
  );
};

export default Galleries;
