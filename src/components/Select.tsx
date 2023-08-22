import React, { useState } from "react";

const Select = () => {
    const [selectValue,setSelectValue] = useState("");

    const handleChange = (text: string) => {
        setSelectValue(text);
    };

  return (
    <select
      className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
      name=""
      id=""
      value={selectValue}
      onChange={(event) => handleChange(event.target.value)}
    >
      <option value="">TIPO DE DOCUMENTO</option>
      <option value="DNI">DNI</option>
      <option value="CE">CE</option>
    </select>
  );
};

export default Select;
