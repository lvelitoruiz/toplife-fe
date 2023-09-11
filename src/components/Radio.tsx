import React, { useEffect, useState } from "react";

interface RadioProperties {
  texto: string;
  label: string;
  name: string;
  selected?: boolean;
  extraStyles?: string;
  onValueChange: (value: string) => void;
}

const Radio = ({ texto, label, name, onValueChange }: RadioProperties) => {
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

  return (
    <>
      <input
        id={name}
        type="radio"
        value={inputValue}
        name={name}
        className="custom-radio"
        onChange={(event) => handleChange(event.target.value)}
      />
      <label htmlFor={name} className="ml-2 text-sm pt-[10px]">
        {label}
      </label>
    </>
  );
};

export default Radio;
