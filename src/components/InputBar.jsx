import React from "react";

const InputBar = ({
  labelName,
  forVal,
  typeVal,
  idVal,
  nameVal,
  value,
  handleChange,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label
        className="text-[0.8rem] text-gray-500 font-500 text-left"
        htmlFor={forVal}
      >
        {labelName}
      </label>
      <input
        className="border-2 py-2 px-4 rounded-lg w-full"
        type={typeVal}
        id={idVal}
        name={nameVal}
        value={value}
        onChange={(evt) => handleChange(evt)}
      />
    </div>
  );
};

export default InputBar;
