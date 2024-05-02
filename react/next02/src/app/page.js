'use client'
import { useState } from "react";

export default function Home() {

  const [input,setInput]=useState("00")
  
  // const calculateResult = (input) => {

  //   try {

  //     const operators = ["+", "-", "*", "/","%"];
  //     let operator = null;

  //     for (let i = 0; i<input.length; i++) {
  //       if (operators.includes(input[i])) {
  //         operator = input[i];
  //         break
  //       }
  //     }

  //     if (!operator) {
  //       setInput(parseFloat(input).toString());
  //       return;
  //     }
  //     const [operand1, operand2] = input.split(operator).map(parseFloat);
  //     let result;
  //     switch (operator) {
  //       case "+":
  //         result = operand1 + operand2;
  //         break;

  //       case "-":
  //         result = operand1 - operand2;
  //         break;

  //       case "*":
  //         result = operand1 * operand2;
  //         break;

  //       case "/":
  //         result = operand1 / operand2;
  //         break;

  //         case "%":
  //           result = operand1 % operand2;
  //           break;

  //       default:
  //         throw new Error("invalid operator");
  //     }
  //     setInput(result.toString());
  //   } catch (error) {
  //     setInput("Error");
  //   }
  // };

  const handleBtnClick=(value)=>{
    if(value==="C"){
      setInput("")
    }else if (value==="X"){
      setInput(input.slice(0,-1))
    }else if(value==="="){
             setInput(eval(input).toString())
             // another way 
      // calculateResult(input)
    }
    else{

      setInput((preValue)=>preValue + value)
     
    }

  }
  return (
    <div className="container">
      <div className="calc">
        <h1 id="input">{input}</h1>
        <div>
          <button onClick={()=>handleBtnClick("C")}>C</button>
          <button onClick={()=>handleBtnClick("X")}>X</button>
          <button onClick={()=>handleBtnClick("%")}>%</button>
          <button onClick={()=>handleBtnClick("/")}>/</button>
        </div>
        <div>
          <button onClick={()=>handleBtnClick("7")}>7</button>
          <button onClick={()=>handleBtnClick("8")}>8</button>
          <button onClick={()=>handleBtnClick("9")}>9</button>
          <button onClick={()=>handleBtnClick("*")}>*</button>
        </div>
        <div>
          <button onClick={()=>handleBtnClick("4")}>4</button>
          <button onClick={()=>handleBtnClick("5")}>5</button>
          <button onClick={()=>handleBtnClick("6")}>6</button>
          <button onClick={()=>handleBtnClick("-")}>-</button>
        </div>
        <div>
          <button onClick={()=>handleBtnClick("1")}>1</button>
          <button onClick={()=>handleBtnClick("2")}>2</button>
          <button onClick={()=>handleBtnClick("3")}>3</button>
          <button onClick={()=>handleBtnClick("+")}>+</button>
        </div>
        <div>
          <button onClick={()=>handleBtnClick("0")}>0</button>
          <button onClick={()=>handleBtnClick("00")}>00</button>
          <button onClick={()=>handleBtnClick(".")}>.</button>
          <button onClick={()=>handleBtnClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}
