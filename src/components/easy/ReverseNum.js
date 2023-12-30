import React from "react";

const ReverseNum = () => {
  function num(e) {
    return Number(e.toString().split("").reverse().join(""));
  }
  console.log(num(37));

  // or

  function numb(e) {
    let rev = 0;
    while (e > 0) {
      let rem = e % 10;
      rev = rev * 10 + rem;
      e = Math.floor(e / 10);
    }
    return rev;
  }
  console.log(numb(12345));

  return (
    <div>
      <h3>
        Qsn 5 :- Write a JavaScript function that reverse a number
        <br /> Open console.log() and show the result{" "}
      </h3>
    </div>
  );
};

export default ReverseNum;
