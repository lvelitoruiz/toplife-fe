import React, { useState, useEffect } from "react";
import Virtual from "../images/virtual.png";
import queryFunctions from "../utils/queryFunctions";
import { backendUrl } from "../consts";

interface viewProps {
  activeTab: boolean;
  onOpenModal: (typeAssign: string, sourceAssign: string) => void;
}

const ViewSingular = ({ activeTab, onOpenModal }: viewProps) => {
  const [image, setImage] = useState<any>({});

  const getImage = async () => {
    const data = await queryFunctions(
      backendUrl + "singulars"
    );
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
            src={image?.image?.data?.attributes?.url || ""}
            alt={image.text}
          />
          <button
            className="absolute w-[80px] h-[80px] flex items-center justify-center bg-[#f1f1f136] rounded-full shadow-[0_10px_20px_0_rgba(0,0,0,0.25)]"
            onClick={(event) => onOpenModal('iframe','https://kuula.co/share/5fNRy/collection/7JFqp?logo=0&info=0&fs=1&vr=1&initload=0&thumbs=1&inst=es')}
          >
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
