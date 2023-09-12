import React, { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import SliderType from "./SliderType";
import queryFunctions from "../utils/queryFunctions";
import SelectEmbed from "./SelectEmbed";
import axios from "axios";
import Checkbox from "./Checkbox";
import { backendUrl } from "../consts";

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
  const [privacidad, setPrivacidad] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [currentOpt, setCurrentOpt] = useState("1");

  const getText = async () => {
    const data = await queryFunctions(
      backendUrl + "cotizations"
    );
    let dataProd = JSON.parse(data);
    console.log('newtypes: ',dataProd.data[0]);
    setText(dataProd.data[0]);
  };

  const optionsList = [
    { value: "DNI", text: "DNI" },
    { value: "CE", text: "CE" },
  ];

  const aptTypes = [
    {
      value: "1",
      text: "1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA, 1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA",
    },
    {
      value: "2",
      text: "2D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA, 1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA",
    },
    {
      value: "3",
      text: "3D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA, 1D + ESTAR, SALA-COMEDOR, BALCÓN, 1.5 SSHH, COCINA",
    },
  ];

  useEffect(() => {
    getText();
  }, []);

  // useEffect(() => {
  //   console.log("this is the tipo de depa: ", tipoDepa);
  // }, [tipoDepa]);

  const handleChangeOnSlider = (value: number) => {
    setCurrentOpt((value + 1).toString());
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    let data = new FormData();
    data.append("Nombre", nombres);
    data.append("Apellido", apellidos);
    data.append("Tipodepa", tipoDepa);
    data.append("Telefono", fono);
    data.append("Correo", correo);
    data.append("Tipodoc", tipoDoc);
    data.append("Documento", documento);
    data.append("Mensaje", mensaje);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://script.google.com/macros/s/AKfycbyFcwYJhBHCrHh7edJDUqAGMY6cp9n9cJhR4tpskCtBR9EXsLx4w8oeYnV7bfIpy1I/exec",
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setMessageSent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="bg-white py-20 px-4 lg:px-[100px]" id="form">
      {text !== null && text !== undefined ? (
        <div className="flex flex-col lg:flex-row gap-6 md:gap-0 items-center">
          <div className="w-full lg:w-6/12">
            {
              !text?.attributes?.gallery ? <img className="w-full h-full object-cover" src={text?.attributes?.alternativeimage?.data?.attributes?.url} alt="" /> : <SliderType type={tipoDepa} onSliderChange={handleChangeOnSlider} />
            }
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
                    <SelectEmbed
                      currentOption={currentOpt}
                      options={text?.attributes?.depatypes}
                      title={"Escoge tu tipo de depa!"}
                      name={""}
                      onValueChange={(event) => setTipoDepa(event)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Input
                  placeholder="MONBRES"
                  name="nombre"
                  texto={""}
                  onValueChange={(event) => setNombres(event)}
                />
              </div>
              <div>
                <Input
                  placeholder="APELLIDOS"
                  name="apellido"
                  texto={""}
                  onValueChange={(event) => setApellidos(event)}
                />
              </div>
              <div>
                <Input
                  placeholder="TELÉFONO"
                  name="telefono"
                  texto={""}
                  onValueChange={(event) => setFono(event)}
                />
              </div>
              <div>
                <Input
                  placeholder="CORREO ELECTRÓNICO"
                  name="correo"
                  texto={""}
                  onValueChange={(event) => setCorreo(event)}
                />
              </div>
              <div>
                <Select
                  title="TIPO DE DOCUMENTO"
                  options={optionsList}
                  name={"tipodocumento"}
                  onValueChange={(event) => setTipoDoc(event)}
                />
              </div>
              <div>
                <Input
                  placeholder="NRO. DE DOCUMENTO"
                  name="documento"
                  texto={""}
                  onValueChange={(event) => setDocumento(event)}
                />
              </div>
              <div className="col-span-2">
                <TextArea
                  texto={""}
                  placeholder={"MENSAJE"}
                  name={"mensaje"}
                  onValueChange={(event) => setMensaje(event)}
                />
              </div>
              {messageSent ? (
                <div className="mt-2 col-span-2 text-xl pl-2">
                  <p>El mensaje ha sido envíado correctamente!!</p>
                </div>
              ) : (
                <>
                  <div className="col-span-2">
                    <Checkbox
                      texto={text?.attributes?.checkbox}
                      name={"privacidad"}
                      selected={privacidad}
                      onValueChange={(event) => setPrivacidad(event)}
                    />
                  </div>
                  <div className="mt-2">
                    <button
                      className="custom-button"
                      disabled={!privacidad}
                      onClick={(event) => handleSubmit(event)}
                    >
                      <span className="pt-2">{text?.attributes?.button}</span>
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Form;
