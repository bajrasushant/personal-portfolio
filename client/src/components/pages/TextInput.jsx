import React from "react";

const TextInput = ({ label, id, name, value, onChange, type }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type?type:"text"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded py-1 px-2"
      />
    </div>
  );
};

export default TextInput;

