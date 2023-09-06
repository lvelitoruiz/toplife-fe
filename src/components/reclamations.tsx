import React, { useEffect, useState } from "react";
import Select from "./Select";
import Input from "./Input";
import TextArea from "./TextArea";
import Textbox from "./Textbox";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Upload from "./Upload";
import postFunctions from "../utils/postFunctions";

const Reclamations = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [doc, setDoc] = useState("");
  const [place, setPlace] = useState("");
  const [tutor, setTutor] = useState("");
  const [tutorLastName, setTutorLastName] = useState("");
  const [tutorDocument, setTutorDocument] = useState("");

  const [local, setLocal] = useState("");
  const [departamento, setDepa] = useState("");
  const [provincia, setProvincia] = useState("");
  const [distrito, setDistrito] = useState("");
  const [tipoDocumento, setTipoDoc] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [detalle, setDetalle] = useState("");
  const [pedido, setPedido] = useState("");

  const [bienContratado, setBienContratado] = useState("");
  const [tipoPedido, setTipoPedido] = useState("");
  const [autorizacion, setAutorizacion] = useState("");

  const [privacidad, setPrivacidad] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | any>(null);

  type FormObjectType = {
    [key: string]: string;
  };

  const formData = new FormData();

  const formObject: FormObjectType = {
    nombres: name,
    apellidos: lastName,
    correo: mail,
    telefono: phone,
    documento: doc,
    direccion: place,
    tutor: tutor,
    apellidotutor: tutorLastName,
    documentotutor: tutorDocument,
    establecimiento: local,
    departamento: departamento,
    provincia: provincia,
    distrito: distrito,
    tipodocumento: tipoDocumento,
    mensaje: mensaje,
    detalle: detalle,
    pedido: pedido,
    biencontratado: bienContratado,
    tiporeclamacion: tipoPedido,
    autorizacion: autorizacion,
  };

  const optionsList = [
    { value: "DNI", text: "DNI" },
    { value: "CE", text: "CE" },
  ];

  const validateForm = () => {
    event?.preventDefault();
    const hasEmptyValue = Object.values(formObject).some(
      (value) => value === ""
    );
    if (hasEmptyValue) {
      alert("completa bien");
    } else {
      alert("bien completado");
    }
  };

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  // const handleSubmit = () => {
  //   console.log("this is the form data: ", formObject);

  //   for (let key in formObject) {
  //     console.log(formObject[key]);
  //     formData.append(key, formObject[key]);
  //   }

  //   formData.append("reclamationfile", selectedFile);

  //   console.log("entries in the FormData object:");
  //   for (let [key, value] of (formData as any).entries()) {
  //     console.log(key, value);
  //   }

  //   postFunctions(formData);
  // };

  return (
    <section>
      <div className="container mx-auto py-10 lg:py-28 px-4 lg:px-0">
        <div className="text-center pb-10">
          <h2 className="text-[#2C261F] text-[30px] mb-1 leading-tight text-center">
            Libro de reclamaciones
          </h2>
          <p className="text-[#9B8F86] lg:w-6/12 mx-auto">
            Conforme a lo establecido en el Código de Protección y Defensa del
            Consumidor, esta institución cuenta con un libro de reclamaciones a
            su disposición
          </p>
        </div>

        <div className="lg:w-6/12 mx-auto">
          <div className="grid grid-cols-10 md:grid-cols-6 gap-3 items-center">
            <div className="col-span-10 md:col-span-6 mb-5">
              <div>
                <p className="font-semibold text-sm mb-5 text-[#2C261F]">
                  ANTES DE EMPEZAR, INDÍCANOS EL LUGAR EN EL QUE SE DIERON LOS
                  SUCESOS DEL RECLAMO:
                </p>
                <div className="mb-2">
                  <p className="text-xs text-[#2C261F]">ESTABLECIMIENTO</p>
                  <Select
                    options={optionsList}
                    title={"Seleccione"}
                    name={"local"}
                    onValueChange={(event) => setLocal(event)}
                  />
                </div>
              </div>
              <p className="text-xs text-[#9B8F86]">
                Nota: Si la queja o reclamo se relaciona con un proyecto
                entregado, consignar a la oficina principal.
              </p>
            </div>
            <div className="col-span-10 md:col-span-6">
              <p className="text-sm text-[#F09B3C]">
                1. Identificación del consumidor reclamante
              </p>
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"nombres"}
                placeholder={"NOMBRES*"}
                texto={""}
                onValueChange={(event) => setName(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"apellidos"}
                placeholder={"APELLIDOS*"}
                texto={""}
                onValueChange={(event) => setLastName(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"correo"}
                placeholder={"CORREO ELECTRÓNICO*"}
                texto={""}
                onValueChange={(event) => setMail(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"telefono"}
                placeholder={"TELÉFONO/CELULAR*"}
                texto={""}
                onValueChange={(event) => setPhone(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Select
                options={optionsList}
                title={"TIPO DOC."}
                name={"local"}
                onValueChange={(event) => setLocal(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"documento"}
                placeholder={"Nª DE DOCUMENTO*"}
                texto={""}
                onValueChange={(event) => setDoc(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Select
                options={optionsList}
                title={"DEPARTAMENTO"}
                name={"departamento"}
                onValueChange={(event) => setDepa(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Select
                options={optionsList}
                title={"PROVINCIA"}
                name={"provincia"}
                onValueChange={(event) => setProvincia(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Select
                options={optionsList}
                title={"DISTRITO"}
                name={"distrito"}
                onValueChange={(event) => setDistrito(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"direccion"}
                placeholder={"DIRECCIÓN*"}
                texto={""}
                onValueChange={(event) => setPlace(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"tutor"}
                placeholder={"NOMBRE DEL TUTOR*"}
                texto={""}
                onValueChange={(event) => setTutor(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"tutorap"}
                placeholder={"APELLIDO DEL TUTOR*"}
                texto={""}
                onValueChange={(event) => setTutorLastName(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Select
                options={optionsList}
                title={"TIPO DOC. TUTOR"}
                name={"tipodocumento"}
                onValueChange={(event) => setTipoDoc(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <Input
                name={"tutordoc"}
                placeholder={"Nª DE DOCUMENTO DEL TUTOR*"}
                texto={""}
                onValueChange={(event) => setTutorDocument(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-3">
              <p className="text-xs text-[#9B8F86]">
                *Esto aplica si el reclamante es menor de edad
              </p>
            </div>
            <div className="col-span-10 md:col-span-6 pt-5">
              <p className="text-sm text-[#F09B3C]">
                2. Identificación del bien contratado
              </p>
            </div>
            <div className="col-span-10 md:col-span-6">
              <div className="flex gap-5 items-center">
                <div className="flex items-center">
                  <Radio
                    texto={"proyecto"}
                    label={"PROYECTO"}
                    name={"proyecto"}
                    selected={true}
                    onValueChange={(event) => setBienContratado(event)}
                  />
                </div>
                <div className="flex items-center">
                  <Radio
                    texto={"servicio"}
                    label={"SERVICIO"}
                    name={"servicio"}
                    selected={false}
                    onValueChange={(event) => setBienContratado(event)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-10 md:col-span-6">
              <Textbox
                texto={""}
                placeholder={"MENSAJE*"}
                name={"mensaje"}
                onValueChange={(event) => setMensaje(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-6 pt-5">
              <p className="text-sm text-[#F09B3C]">
                3. Detalle de la Reclamación y Pedido del Consumidor
              </p>
            </div>
            <div className="col-span-10 md:col-span-6">
              <div className="flex gap-5 items-center">
                <div className="flex items-center">
                  <Radio
                    texto={"queja"}
                    label={"QUEJA"}
                    name={"queja"}
                    selected={true}
                    onValueChange={(event) => setTipoPedido(event)}
                  />
                </div>
                <div className="flex items-center">
                  <Radio
                    texto={"reclamo"}
                    label={"RECLAMO"}
                    name={"reclamo"}
                    selected={false}
                    onValueChange={(event) => setTipoPedido(event)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-10 md:col-span-6">
              <p className="text-xs text-[#9B8F86]">
                *Reclamo: Disconformidad relacionada a los proyectos o servicios
              </p>
              <p className="text-xs text-[#9B8F86]">
                *Queja: Disconformidad no relacionada a los proyectos o
                servicios;o, malestar o descontento respecto a la atención al
                público.
              </p>
            </div>
            <div className="col-span-10 md:col-span-6">
              <Textbox
                texto={""}
                placeholder={"DETALLE*"}
                name={"detalle"}
                onValueChange={(event) => setDetalle(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-6">
              <Textbox
                texto={""}
                placeholder={"PEDIDO*"}
                name={"detalle"}
                onValueChange={(event) => setPedido(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-6">
              <Upload
                texto={"Adjuntar archivo"}
                extentions={"PDF, PPTX, WORD o imágenes JPG, PNG"}
                name={"upload"}
                onValueChange={(event) => handleFileChange(event)}
              />
            </div>
            <div className="col-span-10 md:col-span-6 pt-5">
              <p className="text-sm text-[#F09B3C]">
                4. Observaciones y acciones adoptadas por el proveedor
              </p>
            </div>
            <div className="col-span-10 md:col-span-6">
              <p className="text-sm text-[#9B8F86]">
                Fecha de comunicación de la respuesta: Jueves, 04 de Octubre del
                2018.
              </p>
              <p className="text-sm text-[#9B8F86]">
                Descripción: “Al ser un reclamo virtual, su caso será derivado
                al área de atención al cliente, a fin de dar respuesta dentro
                del plazo legalmente establecido.
              </p>
            </div>
            <div className="col-span-10 md:col-span-6 pt-5">
              <p className="text-sm text-[#F09B3C]">
                5. Autorizo notificación del resultado del reclamo al correo
                consignado
              </p>
            </div>
            <div className="col-span-10 md:col-span-6">
              <div className="flex gap-5 items-center">
                <div className="flex items-center">
                  <Radio
                    texto={"si"}
                    label={"SI"}
                    name={"si"}
                    selected={true}
                    onValueChange={(event) => setAutorizacion(event)}
                  />
                </div>
                <div className="flex items-center">
                  <Radio
                    texto={"no"}
                    label={"NO"}
                    name={"no"}
                    selected={false}
                    onValueChange={(event) => setAutorizacion(event)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-10 md:col-span-6 mt-5">
              <p className="text-xs text-[#eb323c]">(*) Campos obligatorios</p>
              <div className="mt-5">
                <p className="text-sm text-[#9B8F86]">
                  * La formulación del reclamo no impide a la persona acudir a
                  otras vías de solución de controversias ni es requisito
                  previo.
                </p>
                <p className="text-sm text-[#9B8F86]">
                  * El proveedor deberá dar respuesta al reclamo en un plazo no
                  mayor a (30) treinta días calendario, pudiendo ampliar el
                  plazo hasta (30) treinta días más, previa comunicación al
                  consumidor.
                </p>
              </div>
              <Checkbox
                texto={"He leído y acepto la Políticas de Privacidad de Datos"}
                name={"privacidad"}
                selected={privacidad}
                onValueChange={(event) => setPrivacidad(event)}
              />
              <button
                className="custom-button"
                disabled={privacidad}
                onClick={(event) => validateForm()}
              >
                <span className="pt-2">ENVIAR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reclamations;
