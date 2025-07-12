import React, { useState } from "react";

const FilterAnswer = ({ setSearchAnswer, setShowSearchAnswer }) => {
  const handleChange = (e) => {
    setSearchAnswer(e.target.value);
  };
  return (
    <div className="bg-white font-alfa p-[30px] rounded-[15px]">
      <p className="text-[30px]">Filter Berdasakan Jawaban</p>
      <form>
        <label>
          <input type="radio" name="gender" value="A" onChange={handleChange} />
          .A
        </label>
        <br />
        <label>
          <input type="radio" name="gender" value="B" onChange={handleChange} />
          .B
        </label>
        <br />
        <label>
          <input type="radio" name="gender" value="C" onChange={handleChange} />
          .C
        </label>
        <br />
        <label>
          <input type="radio" name="gender" value="D" onChange={handleChange} />
          .D
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="ALL"
            onChange={handleChange}
          />
          .ALL
        </label>
      </form>
      <button
        onClick={() => setShowSearchAnswer(false)}
        className="bg-red-400 rounded-lg p-[10px] text-white"
      >
        Close
      </button>
    </div>
  );
};

export default FilterAnswer;
