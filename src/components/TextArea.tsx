import React, { useEffect, useState } from "react";

interface TextAreaProperties {
  texto: string;
  placeholder: string;
  name: string;
  extraStyles?: string;
  onValueChange: (value: string) => void;
  required?: boolean;
}

const TextArea = ({
  name,
  placeholder,
  texto,
  onValueChange,
  required = true,
}: TextAreaProperties) => {
  const [textValue, setText] = useState("");

  useEffect(() => {
    if (texto !== undefined && texto !== null) {
      setText(texto);
    }
  }, [texto]);

  const handleChange = (text: string) => {
    setText(text);
    onValueChange(text);
  };

  return (
    <textarea
      className="border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
      name={name}
      id={name}
      cols={30}
      rows={4}
      placeholder={placeholder}
      value={textValue}
      onChange={(event) => handleChange(event.target.value)}
    ></textarea>
  );
};

export default TextArea;
