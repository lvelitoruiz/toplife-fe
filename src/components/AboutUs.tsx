import React, { useEffect, useState } from "react";
import queryFunctions from "../utils/queryFunctions";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { backendUrl } from "../consts";

const AboutUs = () => {
  const [aboutInfo, setAbouInfo] = useState<any>({});

  const routeFixed = "";

  const getInfo = async () => {
    const data = await queryFunctions(
      backendUrl + "abouts"
    );
    let dataProd = JSON.parse(data);
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
          src={aboutInfo.banner1?.data?.attributes?.url}
          alt=""
        />
        <div className="relative h-[242px] md:h-[401px] ml-[33px]">
          <img
            className="h-[242px] md:h-[401px] w-full"
            src={aboutInfo.banner2?.data?.attributes?.url}
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
              src={aboutInfo.banner3?.data?.attributes?.url}
              alt=""
            />
          </div>
          <div className="lg:w-8/12 flex items-start flex-col pt-10 lg:pt-0 px-4 lg:px-[100px]">
            <div className="pb-3">
              <h2 className="text-[#2C261F] text-[26px]">{aboutInfo.title2}</h2>
            </div>
            <div className="text-[#9B8F86] pb-5">
              <ReactMarkdown>{aboutInfo.description2}</ReactMarkdown>
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
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:pl-10">
            <div className="flex items-center h-[100px]">
              <img
                className="h-[87px]"
                src={aboutInfo.logotorre?.data?.attributes?.url}
                alt=""
              />
            </div>
            <div className="text-[#9B8F86]">
              <ReactMarkdown>{aboutInfo.description4}</ReactMarkdown>
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
                      src={image.attributes.url}
                      alt=""
                      style={{
                        height: `${image.attributes.alternativeText}px`,
                      }}
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
