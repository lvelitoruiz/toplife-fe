import React, { useState } from "react";

interface option {
  value: string;
  text: string;
}

interface optionList {
  options: option[];
  title: string;
  name: string;
  extraStyles?: string;
  onValueChange: (value: string) => void;
  required?: boolean;
}

const Select = ({
  options,
  title,
  name,
  onValueChange,
  required = true,
}: optionList) => {
  const [selectValue, setSelectValue] = useState("");
  const [hasError, setError] = useState(false);

  const handleChange = (text: string) => {
    setSelectValue(text);
    onValueChange(text);
  };

  const handleValidation = (text: string) => {
    if (text === undefined || text === null || text === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <select
        className="select-custom border cursor-pointer font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
        name={name}
        id={name}
        value={selectValue}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => handleValidation(event.target.value)}
      >
        <option value="">{title}</option>
        {options.map((option, index) => {
          return (
            <option value={option.value} key={index}>
              {option.text}
            </option>
          );
        })}
      </select>
      {required ? (
        <>{hasError ? <span className="error-field">Este campo no puede estar vacío.</span> : null}</>
      ) : null}
    </>
  );
};

export default Select;
