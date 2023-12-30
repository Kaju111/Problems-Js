import React from "react";

const EmptyArray = () => {
  const num = [1, 2, 3, 4, 5, 6, 7];
  num.length = 0;

  console.log(num);

  return (
    <div>
      <h3>
        Qsn 3:- How to empty an array is javascript. do not reset it to a new
        array, and do not loop through to pop each value
        <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default EmptyArray;
