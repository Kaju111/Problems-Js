import React from "react";

const Palindrome = () => {
  function num(e) {
    let number = e.toString().split("").reverse().join("");
    let numberStr = e.toString();
    if (number === numberStr) {
      console.log("Palindrome");
    } else {
      console.log("Not Palindrome");
    }
  }
  console.log(num(292));

  return <div>yo</div>;
};

export default Palindrome;
