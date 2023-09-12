import React, { useEffect, useState } from "react";

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
  currentOption?: string;
}

const SelectEmbed = ({
  options,
  title,
  name,
  onValueChange,
  required = false,
  currentOption = "1",
}: optionList) => {
  const [selectValue, setSelectValue] = useState(currentOption);
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

  useEffect( () => {
    if(currentOption !== undefined && currentOption !== null) {
      setSelectValue(currentOption)
    }
  },[currentOption])

  useEffect( () => {
    console.log("hello option selected: ", options);
  },[options])

  return (
    <>
      <select
        className="select-custom cursor-pointer font-light border-[#8B8986] p-0 h-auto font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
        name={name}
        id={name}
        value={selectValue}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => handleValidation(event.target.value)}
      >
        <option value="">{title}</option>
        {options !== undefined && options !== null && options.map((option, index) => {
          return (
            <option value={option.value} key={index}>
              {option.text}
            </option>
          );
        })}
      </select>
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

export default SelectEmbed;
