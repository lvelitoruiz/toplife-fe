import React, { useState } from "react";

const TextArea = () => {
  const [textValue, setText] = useState("");

  const handleChange = (text: string) => {
    setText(text);
  };

  return (
    <textarea
      className="border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
      name=""
      id=""
      cols={30}
      rows={4}
      placeholder="MENSAJE"
      value={textValue}
      onChange={(event) => handleChange(event.target.value)}
    ></textarea>
  );
};

export default TextArea;
