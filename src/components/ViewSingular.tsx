import React, { useState, useEffect } from "react";
import Virtual from "../images/virtual.png";
import queryFunctions from "../utils/queryFunctions";

interface viewProps {
  activeTab: boolean;
}

const ViewSingular = ({ activeTab }: viewProps) => {
  const [image, setImage] = useState<any>({});

  const getImage = async () => {
    const data = await queryFunctions("https://top-life-backend-805c2a56b99a.herokuapp.com/api/singulars");
    let dataProd = JSON.parse(data);
    setImage(dataProd.data[0].attributes);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div data-tab="1" className={`tab-content ${activeTab ? "active" : ""}`}>
      {image !== null && image !== undefined && image !== "" ? (
        <div className="relative flex items-center justify-center w-full h-[444px]">
          <img
            className="w-full h-full object-cover"
            src={(image?.image?.data?.attributes?.url || "")}
            alt={image.text}
          />
          <button className="absolute w-[80px] h-[80px] flex items-center justify-center bg-[#f1f1f136] rounded-full shadow-[0_10px_20px_0_rgba(0,0,0,0.25)]">
            <span className="bg-[#F1F1F1] h-[56px] w-[56px] rounded-full flex items-center justify-center">
              <i className="icon-play text-[40px] text-[#42B0CD]"></i>
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ViewSingular;
