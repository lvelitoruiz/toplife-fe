import React, { useEffect, useState } from "react";

interface InputProperties {
  name: string;
  placeholder: string;
}

const Input = ({ name, placeholder }: InputProperties) => {
  const [inputValue, setInputValue] = useState("");
  const [placeholdervalue, setPlaceholderValue] = useState(placeholder);

  useEffect(() => {
    if (name !== undefined && name !== null) {
      setInputValue(name);
    }
  }, [name]);

  useEffect(() => {
    if (placeholder !== undefined && name !== null) {
      setPlaceholderValue(placeholder);
    }
  }, [placeholder]);

  const handleChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <>
      <input
        className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
        type="text"
        name="name"
        id="name"
        value={inputValue}
        placeholder={placeholdervalue}
        onChange={(event) => handleChange(event.target.value)}
      />
    </>
  );
};

export default Input;
