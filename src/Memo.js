import React from 'react';
import { useMemo,useState } from 'react';
export default function Memo({data}) {
    const [inputValue,setInputValue]=useState(" ");
    const expensiveCalculation = (data) => {
        console.log("Performing Calculation");
        return data.toUpperCase();
};
const memoizedResult = useMemo(() => expensiveCalculation(inputValue),[inputValue]);
  return (
    <div>
        <br></br>
        <label>Data:<br></br>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </label>
        <p>Original Data:{inputValue}</p>
        <p>Memoized Result:{memoizedResult}</p>
        </div>
  );
}
