import React from "react";

const Sum = () => {
  const num = (numbers) => {
    let number = 0;
    for (let i = 0; i < numbers.length; i++) {
      number += numbers[i];
    }
    return number;
  };
  const numbers = [1, 2, 3, 4, 5];
  console.log(num(numbers));

  return (
    <div>
      <h3>
        Qsn 10:- Create a function that takes an array of numbers as input and
        returns the sum of all the numbers.
      </h3>
    </div>
  );
};

export default Sum;
