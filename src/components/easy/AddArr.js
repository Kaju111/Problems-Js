import React from "react";

const AddArr = () => {
  let arr = ["hehhheeeh", 175, "njlsa", 2, 5, "ajnakan"];
  let sum = 0;

  arr.forEach(function (elm) {
    if (typeof elm === "number") sum = sum + elm;
  });
  console.log(sum);

  return (
    <div>
      <h3>
        Qsn 7:- In an array of number and string only add those member which are
        not string <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default AddArr;
