import React, { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import SliderType from "./SliderType";
import queryFunctions from "../utils/queryFunctions";
import SelectEmbed from "./SelectEmbed";

const Form = () => {
  const [text, setText] = useState<any>({});

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fono, setFono] = useState("");
  const [correo, setCorreo] = useState("");
  const [tipoDoc, setTipoDoc] = useState("");
  const [documento, setDocumento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoDepa, setTipoDepa] = useState("1");

  const [currentOpt, setCurrentOpt] = useState("1");

  const getText = async () => {
    const data = await queryFunctions("https://top-life-backend-805c2a56b99a.herokuapp.com/api/cotizations");
    let dataProd = JSON.parse(data);
    console.log(dataProd.data[0]);
    setText(dataProd.data[0]);
  };

  const optionsList = [
    {value: "DNI", text: "DNI"},
    {value: "CE", text: "CE"},
  ]

  const aptTypes = [
    {value: "1", text: "1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA, 1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA"},
    {value: "2", text: "2D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA, 1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA"},
    {value: "3", text: "3D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA, 1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA"},
  ]

  useEffect(() => {
    getText();
  }, []);

  useEffect(() => {
    console.log('this is the tipo de depa: ',tipoDepa);
  }, [tipoDepa]);

  const handleChangeOnSlider = (value: number) => {
    console.log('this is the item: ',value + 1);
    setCurrentOpt((value + 1).toString());
  }

  return (
    <section className="bg-white py-20 px-4 lg:px-[100px]" id="form">
      {text !== null && text !== undefined ? (
        <div className="flex flex-col lg:flex-row gap-6 md:gap-0 items-center">
          <div className="w-full lg:w-6/12">
            <SliderType type={tipoDepa} onSliderChange={handleChangeOnSlider} />
          </div>
          <div className="w-full lg:w-6/12 lg:pl-[100px]">
            <div className="pb-5">
              <h2 className="text-[20px] md:text-[26px] text-left">
                {text?.attributes?.title}
              </h2>
              <p className="text-[#9B8F86]">{text?.attributes?.description}</p>
            </div>
            <form className="grid grid-cols-2 gap-2" action="">
              <div className="col-span-2">
                <div className="cursor-pointer border font-light border-[#8B8986] py-2 px-3 min-h-[50px] font-sans text-sm w-full text-[#2C261F] flex items-center">
                  <div className="flex flex-col w-full">
                    <span className="text-[10px]">
                      ELIGE UN MODELO DE DEPARTAMENTO
                    </span>
                    <SelectEmbed currentOption={currentOpt} options={aptTypes} title={"Escoge tu tipo de depa!"} name={""} onValueChange={ (event) => setTipoDepa(event) } />
                  </div>
                </div>
              </div>
              <div>
                <Input placeholder="MONBRES" name="nombre" texto={""} onValueChange={(event) => setNombres(event)} />
              </div>
              <div>
                <Input placeholder="APELLIDOS" name="apellido" texto={""} onValueChange={(event) => setApellidos(event)} />
              </div>
              <div>
                <Input placeholder="TELÉFONO" name="telefono" texto={""} onValueChange={(event) => setFono(event)} />
              </div>
              <div>
                <Input placeholder="CORREO ELECTRÓNICO" name="correo" texto={""} onValueChange={(event) => setCorreo(event)} />
              </div>
              <div>
                <Select title="TIPO DE DOCUMENTO" options={optionsList} name={"tipodocumento"} onValueChange={(event) => setTipoDoc(event)} />
              </div>
              <div>
                <Input placeholder="NRO. DE DOCUMENTO" name="documento" texto={""} onValueChange={(event) => setDocumento(event)} />
              </div>
              <div className="col-span-2">
                <TextArea />
              </div>
              <div className="col-span-2">
                <div className="flex gap-2 w-full">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="relative peer flex items-center justify-center appearance-none w-5 h-5 border-2 border-[#42B0CD] rounded-sm bg-white checked:bg-[#42B0CD] checked:border-0"
                  />
                  <label
                    className="pt-1 text-[#9B8F86] text-sm"
                    htmlFor="some_id"
                  >
                    {text?.attributes?.checkbox}
                  </label>
                  <svg
                    className="absolute w-[18px] h-4 hidden peer-checked:block text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <a
                  className="font-medium h-[50px] bg-[#42B0CD] w-full text-white px-10 uppercase flex items-center justify-center shadow-[0_10px_20px_0_rgba(66,176,205,0.20)]"
                  href=""
                >
                  <span className="pt-2">{text?.attributes?.button}</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Form;
