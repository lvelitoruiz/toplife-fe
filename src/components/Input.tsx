import React, { useEffect, useState } from "react";

interface InputProperties {
  texto: string;
  placeholder: string;
  name: string;
  type?: string;
  customStyles?: React.CSSProperties;
  extraStyles?: string;
  onValueChange: (value: string) => void;
  required?: boolean;
}

const Input = ({
  name,
  placeholder,
  type = "text",
  texto,
  onValueChange,
  required = true,
}: InputProperties) => {
  const [inputValue, setInputValue] = useState("");
  const [placeHold, setPlaceHolder] = useState("");
  const [inputType, setInputType] = useState("text");
  const [inputName, setInputName] = useState("");
  const [isRequired, setRequired] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    if (texto !== undefined && texto !== null) {
      setInputValue(texto);
    }
  }, [texto]);

  useEffect(() => {
    setInputValue(texto);
    setInputName(name);
    setPlaceHolder(placeholder);
    setInputType(type);
    setRequired(required);
  }, [name, placeholder, texto, type, required]);

  const handleChange = (text: string) => {
    setInputValue(text);
    onValueChange(text);
  };

  const handleValidation = (text: string) => {
    if( text === undefined || text === null || text === "") {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <>
      <input
        className="custom-input"
        type={inputType}
        name={inputName}
        id={inputName}
        value={inputValue}
        placeholder={placeHold}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => handleValidation(event.target.value)}
      />
      {isRequired ? (
        <>{hasError ? <span className="error-field">Este campo no puede estar vacío.</span> : null}</>
      ) : null}
    </>
  );
};

export default Input;
