"use client";
import React, { useState } from "react";

const page = () => {
  const [input, setInput] = useState("");
  const digits = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", "00", "."],
  ];

  const symbols = ["+", "-", "*", "/","%","AC","X","="];

  const generateDigits = () => {
    return digits.map((digit) => {
      return (
        <div  className="flex  ">
          {digit.map((val) => {
            return (
              <div
               
                onClick={() => setInput((pre) => pre + val)}
                className="bg-gray-500 hover:bg-yellow-500 m-2 w-10 h-10 rounded text-white text-center cursor-pointer"
              >
                {val}
              </div>
            );
          })}
        </div>
      );
    });
  };


  
  const handleSymbolClick = (symbol) => {
    const lastChar = input[input.length - 1];
    
    const isLastCharSymbol = symbols.includes(lastChar);
  
    const isNewSymbol = symbols.includes(symbol);
    
  
    if (symbol === "AC") {
      setInput("");
    } else if (symbol === "=") {
      setInput(eval(input));
    } else if (symbol === "X") {
      setInput(input.substring(0, input.length - 1));
    } else if (isLastCharSymbol && isNewSymbol) {
      // If both last character and new symbol are symbols, do nothing
      return;
    } else {
      setInput((prev) => prev + symbol);
    }
  };
  
  return (
    <div className=" flex flex-col justify-center items-center m-10 text-white text-center">
      <div>
        <h1 className="bg-gray-600 w-36 p-2 mt-2 text-center flex flex-col items-center justify-center">
          {input}
        </h1>
        {generateDigits()}
      </div>
      <div className="flex flex-col">
        {symbols.map((item) => {
          return (
            <div 
              onClick={() => handleSymbolClick(item)}
              className=" hover:bg-yellow-500 flex flex-col cursor-pointer m-2 w-10 h-10 bg-orange-700 text-2xl text-white text-center rounded-lg"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;















