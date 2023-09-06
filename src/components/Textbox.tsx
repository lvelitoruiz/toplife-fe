import React, { useEffect, useState } from "react";

interface TextboxProperties {
  texto: string;
  placeholder: string;
  name: string;
  type?: string;
  extraStyles?: string;
  onValueChange: (value: string) => void;
  required?: boolean;
}

const Textbox = ({
  name,
  placeholder,
  type = "text",
  texto,
  onValueChange,
  required = true,
}: TextboxProperties) => {
    
  const [hasError, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (texto !== undefined && texto !== null) {
      setInputValue(texto);
    }
  }, [texto]);

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
      <textarea
        className="custom-textbox"
        name={name}
        id={name}
        cols={30}
        rows={4}
        value={inputValue}
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => handleValidation(event.target.value)}
      ></textarea>
      {required ? (
        <>
          {hasError ? (
            <span className="error-field">
              Este campo no puede estar vacío.
            </span>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default Textbox;
