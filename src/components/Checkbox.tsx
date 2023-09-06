import React, { useEffect, useState } from "react";

interface CheckboxProperties {
  texto: string;
  name: string;
  selected: boolean;
  extraStyles?: string;
  onValueChange: (value: boolean) => void;
}

const Checkbox = ({ texto, selected, name, onValueChange }: CheckboxProperties) => {

    const [value,setValue] = useState(false);

    const handleChange = (state: boolean) => {
        setValue(state);
        onValueChange(state);
    }

    useEffect( () => {
        setValue(selected);
    },[selected]);

  return (
    <div className="flex gap-2 w-full my-5">
      <input
        type="checkbox"
        checked={value}
        id={name}
        name={name}
        className="custom-checkbox"
        onChange={(event) => handleChange(!value)}
      />
      <label className="pt-1 text-[#9B8F86] text-sm" htmlFor={name}>
        {texto}
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
  );
};

export default Checkbox;
